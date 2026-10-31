import os
import json
import cv2
import numpy as np

STAGE_DIR = r"C:\Users\yasin\AppData\Local\Temp\onyxman-cloud-stage"
RAW_FILES = {
    "horsemen": r"C:/Users/yasin/.gemini/antigravity/brain/37a7e321-32aa-4896-ab7b-69b1e7e7b02e/.user_uploaded/media_1793280109990_a3563815.jpg",
    "hammer-of-thor": r"C:/Users/yasin/.gemini/antigravity/brain/37a7e321-32aa-4896-ab7b-69b1e7e7b02e/.user_uploaded/media_1793280109990_a1dc234a.jpg",
    "grow-xl": r"C:/Users/yasin/.gemini/antigravity/brain/37a7e321-32aa-4896-ab7b-69b1e7e7b02e/.user_uploaded/media_1793280109994_9621d557.jpg",
    "magnum-pump-xr": r"C:/Users/yasin/.gemini/antigravity/brain/37a7e321-32aa-4896-ab7b-69b1e7e7b02e/.user_uploaded/media_1793280109999_5d34fe93.jpg",
}

def inspect_all():
    report = {}
    for slug, path in RAW_FILES.items():
        img = cv2.imread(path)
        h, w, c = img.shape
        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        info = {
            "slug": slug,
            "path": path,
            "width": int(w),
            "height": int(h),
            "channels": int(c),
            "mean_brightness": round(float(np.mean(gray)), 2),
        }
        if slug == "grow-xl":
            roi_hsv = hsv[110:138, 225:348]
            ymask = cv2.inRange(roi_hsv, (14, 50, 70), (48, 255, 255))
            ys, xs = np.where(ymask > 0)
            info["watermark_text"] = "0173313985"
            info["watermark_yellow_pixels_initial"] = int(len(xs))
            info["watermark_bbox"] = {
                "x_min": int(xs.min() + 225),
                "x_max": int(xs.max() + 225),
                "y_min": int(ys.min() + 110),
                "y_max": int(ys.max() + 110),
            }
        report[slug] = info
    out_path = os.path.join(STAGE_DIR, "scripts", "ms013-inspection-report.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)
    print(json.dumps(report, indent=2))

if __name__ == "__main__":
    inspect_all()
