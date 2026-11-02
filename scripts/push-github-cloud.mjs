#!/usr/bin/env node
/**
 * ONYXMAN.MY — PURE NODE.JS GITHUB GIT-DATA API CLOUD PUSHER & PAGES ACTIVATOR
 * Zero dependency on local `git` CLI. Reads GITHUB_TOKEN from process.env only.
 */

import fs from 'node:fs';
import path from 'node:path';

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error('Missing GITHUB_TOKEN environment variable.');
  process.exit(1);
}

const OWNER = process.env.GITHUB_OWNER || 'waleedshoaibofficial-bit';
const REPO = process.env.GITHUB_REPO || 'onyxman-my';
const ROOT = process.cwd();

const IGNORE_DIRS = new Set([
  'node_modules',
  'dist',
  'dist-ts',
  '.git',
  '.wrangler',
  '.tmp-chrome-profile',
  '.tmp-chrome-audit-8911',
  '.tmp-chrome-audit-8911-b',
  'audit-screenshots',
]);

const IGNORE_FILES = new Set([
  'studio-horsemen-clean.jpg',
  'studio-hammer-clean.jpg',
  'studio-growxl-clean.jpg',
  'studio-magnum-clean.jpg',
  'studio-lineup-hero-clean.jpg',
  'studio-hero-cinema-8k.jpg',
  'studio-vitality-extract-8k.jpg',
  'studio-podium-backdrop.jpg',
  'studio-botanicals-macro.jpg',
  'studio-discreet-box.jpg',
]);

function collectSourceFiles(dir, relPrefix = '', list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      if (rel === 'public') {
        collectPublicStaticFiles(full, 'public', list);
        continue;
      }
      collectSourceFiles(full, rel, list);
    } else if (entry.isFile()) {
      if (IGNORE_FILES.has(entry.name)) continue;
      list.push({ rel, full });
    }
  }
  return list;
}

function collectPublicStaticFiles(dir, relPrefix, list) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = `${relPrefix}/${entry.name}`;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'assets') {
        collectSourceFiles(full, rel, list);
      }
    } else if (entry.isFile()) {
      if (['_headers', '_redirects', 'indexnow-key.txt'].includes(entry.name)) {
        list.push({ rel, full });
      }
    }
  }
}

async function ghApi(endpoint, method = 'GET', body = null) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'Onyxman-Cloud-Deployer',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : null,
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`GitHub API ${method} ${endpoint} failed (${res.status}): ${errText}`);
  }
  if (res.status === 204) return {};
  return res.json();
}

async function main() {
  const files = collectSourceFiles(ROOT);
  console.log(`[CLOUD-PUSH] Collected ${files.length} source, config, workflow & 8K asset files.`);

  // 1. Initialize repo if empty
  try {
    await ghApi('/git/refs/heads/main', 'GET');
    console.log('[CLOUD-PUSH] Branch main already exists.');
  } catch {
    console.log('[CLOUD-PUSH] Initializing empty repository with README-CLOUD-DEPLOY.md...');
    const readmeContent = fs.readFileSync(path.join(ROOT, 'README-CLOUD-DEPLOY.md')).toString('base64');
    await ghApi('/contents/README-CLOUD-DEPLOY.md', 'PUT', {
      message: 'Initial commit: Onyxman.my Cloud Architecture',
      content: readmeContent,
      branch: 'main',
    });
  }

  // 2. Enable GitHub Pages with workflow build_type so GitHub Actions deploys live immediately
  try {
    await ghApi('/pages', 'POST', {
      build_type: 'workflow',
      source: {
        branch: 'main',
        path: '/',
      },
    });
    console.log('[CLOUD-PUSH] Enabled GitHub Pages (build_type: workflow)!');
  } catch (err) {
    try {
      await ghApi('/pages', 'PUT', {
        build_type: 'workflow',
      });
      console.log('[CLOUD-PUSH] Updated GitHub Pages to build_type: workflow!');
    } catch {
      console.log('[CLOUD-PUSH] GitHub Pages status check:', err.message);
    }
  }

  const refData = await ghApi('/git/refs/heads/main', 'GET');
  const baseCommitSha = refData.object.sha;
  const commitData = await ghApi(`/git/commits/${baseCommitSha}`, 'GET');
  const baseTreeSha = commitData.tree.sha;

  console.log(`[CLOUD-PUSH] Uploading ${files.length} blobs to GitHub...`);
  const treeItems = [];
  let count = 0;

  for (const f of files) {
    const b64 = fs.readFileSync(f.full).toString('base64');
    const blob = await ghApi('/git/blobs', 'POST', {
      content: b64,
      encoding: 'base64',
    });
    treeItems.push({
      path: f.rel,
      mode: '100644',
      type: 'blob',
      sha: blob.sha,
    });
    count++;
    if (count % 15 === 0 || count === files.length) {
      console.log(`  -> Uploaded ${count}/${files.length} blobs...`);
    }
  }

  console.log('[CLOUD-PUSH] Creating Git tree...');
  const newTree = await ghApi('/git/trees', 'POST', {
    base_tree: baseTreeSha,
    tree: treeItems,
  });

  console.log('[CLOUD-PUSH] Creating production commit...');
  const newCommit = await ghApi('/git/commits', 'POST', {
    message: 'Launch Onyxman.my 8K Luxury Botanical Storefront (280 Bilingual Pages + 24/7 Cloud Workflows)',
    tree: newTree.sha,
    parents: [baseCommitSha],
  });

  console.log('[CLOUD-PUSH] Updating refs/heads/main...');
  await ghApi('/git/refs/heads/main', 'PATCH', {
    sha: newCommit.sha,
    force: true,
  });

  console.log(`[CLOUD-PUSH] SUCCESS! Commit ${newCommit.sha} pushed to https://github.com/${OWNER}/${REPO}`);
  console.log(`[CLOUD-PUSH] Live GitHub Pages URL: https://${OWNER}.github.io/${REPO}/`);
}

main().catch((err) => {
  console.error('[CLOUD-PUSH] ERROR:', err);
  process.exit(1);
});
