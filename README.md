# BCyberAware Main Site

Main landing page for [bcyberaware.co.in](https://bcyberaware.co.in/).

This Cloudflare Worker replaces the old GoDaddy placeholder page with a lightweight BCyberAware brand hub linking to:

- BCyberAware threat intelligence: <https://advisory.bcyberaware.co.in/>
- Vikas Pandita portfolio: <https://vikaspanditaportfolio.bcyberaware.co.in/>
- SAR Automation
- ThreatForge
- CyberShots blog
- LinkedIn and YouTube

## Deploy

```powershell
npx wrangler deploy
```

## Automatic Deploys (GitHub → Cloudflare)

GitHub Actions is configured in `.github/workflows/deploy.yml`.

### One-time setup: add `CLOUDFLARE_API_TOKEN`

1. Open [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens).
2. Click **Create Token** → use template **Edit Cloudflare Workers** (do not use a read-only or DNS-only template).
3. Confirm these permissions are included:
   - **Account** → Workers Scripts → **Edit**
   - **Account** → Workers Routes → **Edit** (or Account Settings → Read, depending on template)
   - **Zone** → Workers Routes → **Edit** (needed for `bcyberaware.co.in` routes in `wrangler.jsonc`)
   - **User** → User Details → **Read** (Wrangler account lookup)
4. Under **Zone Resources**, include zone **bcyberaware.co.in** (or All zones).
5. Create the token and copy it (shown only once).
6. In PowerShell, run:

```powershell
gh secret set CLOUDFLARE_API_TOKEN --repo vikaspandita12/bcyberaware-main-site
```

Paste the token when prompted. It is stored only in GitHub Secrets, never in the repo.

After that, every push to `main` deploys this Worker to Cloudflare automatically.

The Worker routes are configured in `wrangler.jsonc` for:

- `bcyberaware.co.in/*`
- `www.bcyberaware.co.in/*`
