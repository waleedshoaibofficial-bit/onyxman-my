#!/usr/bin/env python3
"""
ONYXMAN.MY — STUDIO PODIUM & GLARE-SUPPRESSION COMPOSITOR
Replaces flat black cutout backgrounds with the real 3D bevelled obsidian & gold
marble studio podium (`studio-podium-backdrop.jpg`), suppresses harsh white phone-flash
glare on the black bottle caps/shoulders of Grow XL & Hammer of Thor while preserving
100% authentic label typography, and generates studio-grade .webp & .png assets.
"""

import os
import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT_DIR = r"C:\Users\yasin\AppData\Local\Temp\onyxman-cloud-stage"
ASSETS_DIR = os.path.join(ROOT_DIR, "public", "assets", "products")

BACKDROP_PATH = os.path.join(ASSETS_DIR, "studio-podium-backdrop.jpg")
BOTANICALS_PATH = os.path.join(ASSETS_DIR, "studio-botanicals-macro.jpg")
DISCREET_BOX_PATH = os.path.join(ASSETS_DIR, "studio-discreet-box.jpg")


def save_webp_and_png(pil_img: Image.Image, base_name: str):
    png_path = os.path.join(ASSETS_DIR, f"{base_name}.png")
    webp_path = os.path.join(ASSETS_DIR, f"{base_name}.webp")
    pil_img.save(png_path, format="PNG", optimize=True)
    pil_img.save(webp_path, format="WEBP", quality=92, method=6)
    print(f"  [SAVED] {base_name}.png & .webp ({pil_img.size[0]}x{pil_img.size[1]})")


def suppress_cap_and_shoulder_glare(rgba_img: Image.Image, slug: str) -> Image.Image:
    """
    Suppresses harsh white phone-camera flash glare on the black plastic cap & upper
    shoulder (top 33% of bottle height) and crinkled plastic wrap edges without
    altering the authentic printed label graphics in the middle/lower body.
    """
    arr = np.array(rgba_img).astype(np.float32)
    h, w, _ = arr.shape
    rgb = arr[:, :, :3]
    alpha = arr[:, :, 3]

    # Soften jagged outer 2px edge of alpha mask
    alpha_u8 = alpha.astype(np.uint8)
    alpha_smooth = cv2.GaussianBlur(alpha_u8, (5, 5), 1.2).astype(np.float32)
    arr[:, :, 3] = np.minimum(alpha, alpha_smooth)

    # Compute luminance & saturation
    lum = 0.299 * rgb[:, :, 0] + 0.587 * rgb[:, :, 1] + 0.114 * rgb[:, :, 2]
    max_c = np.max(rgb, axis=2)
    min_c = np.min(rgb, axis=2)
    sat = (max_c - min_c) / (max_c + 1e-5)

    # Top 34% is the black plastic cap + neck + shoulder where phone flash blew out white blobs
    y_grid = np.linspace(0.0, 1.0, h)[:, None]
    cap_shoulder_weight = np.clip((0.36 - y_grid) / 0.10, 0.0, 1.0)

    # Identify low-saturation bright glare pixels (sat < 0.22 and lum > 135) in cap/shoulder
    glare_mask = ((sat < 0.25) & (lum > 125) & (alpha > 10)).astype(np.float32)
    glare_mask = cv2.GaussianBlur(glare_mask, (15, 15), 5.0) * cap_shoulder_weight

    # Replace blown-out white glare on cap/shoulder with sleek studio dark anodized cylinder shading
    x_grid = np.linspace(-1.0, 1.0, w)[None, :]
    cylinder_shade = 24.0 + 38.0 * np.exp(-((x_grid + 0.28) ** 2) / 0.18) + 18.0 * np.exp(-((x_grid - 0.55) ** 2) / 0.08)
    target_r = cylinder_shade * 1.04
    target_g = cylinder_shade * 1.00
    target_b = cylinder_shade * 0.96

    for c_idx, target_c in enumerate([target_r, target_g, target_b]):
        rgb[:, :, c_idx] = rgb[:, :, c_idx] * (1.0 - 0.78 * glare_mask) + target_c * (0.78 * glare_mask)

    # For Grow XL specifically, also attenuate the vertical white flash stripe in upper-middle shoulder (y: 0.30..0.44)
    if slug == "grow-xl":
        mid_shoulder = np.clip(1.0 - np.abs(y_grid - 0.37) / 0.09, 0.0, 1.0)
        mid_glare = ((sat < 0.18) & (lum > 175) & (alpha > 10)).astype(np.float32)
        mid_glare = cv2.GaussianBlur(mid_glare, (11, 11), 3.5) * mid_shoulder
        for c_idx, target_c in enumerate([target_r, target_g, target_b]):
            rgb[:, :, c_idx] = rgb[:, :, c_idx] * (1.0 - 0.68 * mid_glare) + target_c * (0.68 * mid_glare)

    # Add subtle warm champagne-gold (#D4AF37) studio rim light along the outer 4px contour of the bottle
    eroded = cv2.erode(alpha_u8, np.ones((7, 7), np.uint8), iterations=1)
    rim = np.clip((alpha - eroded.astype(np.float32)) / 255.0, 0.0, 1.0)
    rim = cv2.GaussianBlur(rim, (7, 7), 2.0) * 0.42
    gold_rgb = np.array([218.0, 182.0, 95.0], dtype=np.float32)
    for c_idx in range(3):
        rgb[:, :, c_idx] = np.clip(rgb[:, :, c_idx] * (1.0 - rim) + gold_rgb[c_idx] * rim, 0, 255)

    arr[:, :, :3] = np.clip(rgb, 0, 255)
    out = Image.fromarray(arr.astype(np.uint8), mode="RGBA")
    out = ImageEnhance.Contrast(out).enhance(1.08)
    out = ImageEnhance.Sharpness(out).enhance(1.18)
    return out


def crop_to_alpha_bbox(pil_rgba: Image.Image) -> Image.Image:
    bbox = pil_rgba.getbbox()
    return pil_rgba.crop(bbox) if bbox else pil_rgba


def composite_bottle_on_podium(backdrop_pil: Image.Image, bottle_rgba: Image.Image, canvas_size=(1600, 1200), bottle_h_ratio=0.68) -> Image.Image:
    """
    Composites a single bottle standing center-stage on the bevelled obsidian & gold podium.
    """
    cw, ch = canvas_size
    bg = backdrop_pil.resize((cw, ch), Image.Resampling.LANCZOS).convert("RGBA")

    bottle = crop_to_alpha_bbox(bottle_rgba)
    target_h = int(ch * bottle_h_ratio)
    scale = target_h / bottle.height
    target_w = int(bottle.width * scale)
    bottle_resized = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # Podium surface top in studio-podium-backdrop.jpg is around y = 78% of height
    foot_y = int(ch * 0.80)
    bx = (cw - target_w) // 2
    by = foot_y - target_h

    # Warm gold back-glow behind bottle
    glow_layer = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
    yg, xg = np.ogrid[:ch, :cw]
    cx, cy = cw // 2, by + int(target_h * 0.48)
    dist = np.sqrt(((xg - cx) / (target_w * 0.85)) ** 2 + ((yg - cy) / (target_h * 0.65)) ** 2)
    glow_alpha = (np.clip(1.0 - dist, 0.0, 1.0) ** 2.2 * 95).astype(np.uint8)
    glow_arr = np.zeros((ch, cw, 4), dtype=np.uint8)
    glow_arr[:, :, 0] = 212
    glow_arr[:, :, 1] = 175
    glow_arr[:, :, 2] = 55
    glow_arr[:, :, 3] = glow_alpha
    bg = Image.alpha_composite(bg, Image.fromarray(glow_arr, mode="RGBA"))

    # Contact shadow ellipse on podium slab
    shadow = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
    s_dist = np.sqrt(((xg - cx) / (target_w * 0.58)) ** 2 + ((yg - (foot_y - 6)) / 26.0) ** 2)
    s_alpha = (np.clip(1.0 - s_dist, 0.0, 1.0) ** 1.8 * 215).astype(np.uint8)
    s_arr = np.zeros((ch, cw, 4), dtype=np.uint8)
    s_arr[:, :, 3] = s_alpha
    bg = Image.alpha_composite(bg, Image.fromarray(s_arr, mode="RGBA"))

    # Subtle inverted reflection on polished obsidian stone
    refl_h = int(target_h * 0.22)
    refl = bottle_resized.transpose(Image.Transpose.FLIP_TOP_BOTTOM).crop((0, 0, target_w, refl_h))
    refl_arr = np.array(refl).astype(np.float32)
    fade = np.linspace(0.28, 0.0, refl_h)[:, None]
    refl_arr[:, :, 3] = refl_arr[:, :, 3] * fade
    refl_img = Image.fromarray(refl_arr.astype(np.uint8), mode="RGBA").filter(ImageFilter.GaussianBlur(2.2))
    bg.alpha_composite(refl_img, (bx, foot_y - 4))

    # Composite crisp bottle
    bg.alpha_composite(bottle_resized, (bx, by))
    return bg.convert("RGB")


def composite_4_bottle_lineup_on_podium(backdrop_pil: Image.Image, bottles_dict: dict) -> Image.Image:
    """
    Composites all 4 Onyxman bottles in an architectural V-formation standing on the
    bevelled black obsidian & gold studio podium (`studio-podium-backdrop.jpg`).
    """
    cw, ch = 1920, 1080
    bg = backdrop_pil.resize((cw, ch), Image.Resampling.LANCZOS).convert("RGBA")

    # Layout order: Horsemen (left), Hammer of Thor (center-left), Grow XL (center-right), Magnum Pump XR (right)
    placements = [
        ("horsemen", 0.21, 0.77, 0.58),
        ("hammer-of-thor", 0.39, 0.80, 0.64),
        ("grow-xl", 0.58, 0.80, 0.65),
        ("magnum-pump-xr", 0.78, 0.77, 0.59),
    ]

    yg, xg = np.ogrid[:ch, :cw]

    # Contact shadows & reflections first
    for slug, x_rel, foot_rel, h_rel in placements:
        b_img = crop_to_alpha_bbox(bottles_dict[slug])
        th = int(ch * h_rel)
        tw = int(b_img.width * (th / b_img.height))
        b_res = b_img.resize((tw, th), Image.Resampling.LANCZOS)
        cx = int(cw * x_rel)
        foot_y = int(ch * foot_rel)
        bx = cx - tw // 2

        # Contact shadow
        s_dist = np.sqrt(((xg - cx) / (tw * 0.52)) ** 2 + ((yg - (foot_y - 5)) / 22.0) ** 2)
        s_alpha = (np.clip(1.0 - s_dist, 0.0, 1.0) ** 1.8 * 210).astype(np.uint8)
        s_arr = np.zeros((ch, cw, 4), dtype=np.uint8)
        s_arr[:, :, 3] = s_alpha
        bg = Image.alpha_composite(bg, Image.fromarray(s_arr, mode="RGBA"))

        # Stone reflection
        refl_h = min(int(th * 0.18), ch - foot_y)
        if refl_h > 5:
            refl = b_res.transpose(Image.Transpose.FLIP_TOP_BOTTOM).crop((0, 0, tw, refl_h))
            refl_arr = np.array(refl).astype(np.float32)
            fade = np.linspace(0.25, 0.0, refl_h)[:, None]
            refl_arr[:, :, 3] *= fade
            refl_img = Image.fromarray(refl_arr.astype(np.uint8), mode="RGBA").filter(ImageFilter.GaussianBlur(2.0))
            bg.alpha_composite(refl_img, (bx, foot_y - 3))

    # Now composite outer bottles first, then inner flagship bottles in front
    for slug, x_rel, foot_rel, h_rel in [placements[0], placements[3], placements[1], placements[2]]:
        b_img = crop_to_alpha_bbox(bottles_dict[slug])
        th = int(ch * h_rel)
        tw = int(b_img.width * (th / b_img.height))
        b_res = b_img.resize((tw, th), Image.Resampling.LANCZOS)
        cx = int(cw * x_rel)
        foot_y = int(ch * foot_rel)
        bx = cx - tw // 2
        by = foot_y - th
        bg.alpha_composite(b_res, (bx, by))

    return bg.convert("RGB")


def main():
    print("====================================================================")
    print("ONYXMAN.MY — STUDIO PODIUM & GLARE-SUPPRESSION COMPOSITOR")
    print("====================================================================")

    backdrop = Image.open(BACKDROP_PATH).convert("RGB")
    botanicals = Image.open(BOTANICALS_PATH).convert("RGB")
    discreet_box = Image.open(DISCREET_BOX_PATH).convert("RGB")

    save_webp_and_png(backdrop, "studio-podium-backdrop")
    save_webp_and_png(botanicals, "studio-botanicals-macro")
    save_webp_and_png(discreet_box, "studio-discreet-box")

    slugs = ["horsemen", "hammer-of-thor", "grow-xl", "magnum-pump-xr"]
    cleaned_bottles = {}

    for slug in slugs:
        cutout_path = os.path.join(ASSETS_DIR, f"{slug}-cutout.png")
        raw_cutout = Image.open(cutout_path).convert("RGBA")
        relit_bottle = suppress_cap_and_shoulder_glare(raw_cutout, slug)
        cleaned_bottles[slug] = relit_bottle

        # Save updated cutout
        save_webp_and_png(relit_bottle, f"{slug}-cutout")

        # Generate 4:3 Studio Podium Stage (1600x1200)
        stage_img = composite_bottle_on_podium(backdrop, relit_bottle, canvas_size=(1600, 1200), bottle_h_ratio=0.68)
        save_webp_and_png(stage_img, f"{slug}-stage")
        save_webp_and_png(stage_img, slug)

        # Generate 4:5 Portrait Studio Podium Stage (1200x1500)
        portrait_img = composite_bottle_on_podium(backdrop, relit_bottle, canvas_size=(1200, 1500), bottle_h_ratio=0.66)
        save_webp_and_png(portrait_img, f"{slug}-portrait")

    # Generate 16:9 4-Bottle Royal Podium Hero Lineup (1920x1080)
    lineup_hero = composite_4_bottle_lineup_on_podium(backdrop, cleaned_bottles)
    save_webp_and_png(lineup_hero, "onyxman-lineup-hero")
    print("[PASS] All Studio Podium & Macro Botanical assets generated.")


if __name__ == "__main__":
    main()
