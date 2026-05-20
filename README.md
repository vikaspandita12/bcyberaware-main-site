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

The Worker routes are configured in `wrangler.jsonc` for:

- `bcyberaware.co.in/*`
- `www.bcyberaware.co.in/*`
