# Custom Domain Setup

The custom domain is `suwarnapyakurel.com.np`.

## Repository Settings

In GitHub repository Settings -> Pages:

1. Set "Build and deployment" to "GitHub Actions".
2. Set the custom domain to `suwarnapyakurel.com.np`.
3. Enable "Enforce HTTPS" when available.

## DNS Records

Use either GitHub Pages A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Or use a CNAME record pointing to:

```text
suwarna-wave.github.io
```

DNS changes can take time to propagate.

## Local Check

```bash
corepack enable
pnpm install
pnpm build
pnpm dlx serve out
```

Then open the local URL printed by `serve`.
