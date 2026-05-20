const html = String.raw`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>BCyberAware | Cybersecurity, AI Security & Threat Intelligence</title>
  <meta name="description" content="BCyberAware by Vikas Pandita: cybersecurity leadership, AI security, threat intelligence, security architecture review and enterprise cyber strategy." />
  <meta property="og:title" content="BCyberAware" />
  <meta property="og:description" content="Cybersecurity, AI Security, Threat Intelligence and Security Architecture." />
  <meta property="og:url" content="https://bcyberaware.co.in/" />
  <meta name="theme-color" content="#06111f" />
  <style>
    :root {
      color-scheme: dark;
      --bg: #06111f;
      --panel: rgba(10, 24, 43, 0.78);
      --panel-strong: rgba(12, 31, 55, 0.94);
      --line: rgba(95, 180, 255, 0.18);
      --text: #f5f8ff;
      --muted: #aab8cf;
      --soft: #708199;
      --blue: #55b9ff;
      --cyan: #5ff3e4;
      --gold: #f2c45c;
      --green: #5dffb3;
      --shadow: rgba(0, 0, 0, 0.35);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at 15% 20%, rgba(85, 185, 255, 0.2), transparent 32rem),
        radial-gradient(circle at 86% 18%, rgba(95, 243, 228, 0.13), transparent 28rem),
        radial-gradient(circle at 55% 88%, rgba(242, 196, 92, 0.11), transparent 24rem),
        linear-gradient(145deg, #04101d 0%, #08182b 45%, #02060d 100%);
      color: var(--text);
      overflow-x: hidden;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 76px 76px;
      mask-image: radial-gradient(circle at 50% 20%, black, transparent 75%);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .wrap {
      position: relative;
      z-index: 1;
      width: min(1160px, calc(100% - 32px));
      margin: 0 auto;
      padding: 32px 0;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 64px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 15px;
    }

    .mark {
      width: 44px;
      height: 44px;
      display: grid;
      place-items: center;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: linear-gradient(145deg, rgba(85, 185, 255, 0.2), rgba(95, 243, 228, 0.08));
      box-shadow: 0 0 32px rgba(85, 185, 255, 0.15);
    }

    .mark span {
      color: var(--cyan);
      font-weight: 900;
      letter-spacing: -0.05em;
    }

    .status {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      border: 1px solid rgba(93, 255, 179, 0.2);
      color: var(--green);
      background: rgba(93, 255, 179, 0.08);
      border-radius: 999px;
      padding: 10px 14px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .pulse {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: var(--green);
      box-shadow: 0 0 16px var(--green);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 40px;
      align-items: center;
      margin-bottom: 36px;
    }

    .eyebrow {
      color: var(--cyan);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    h1 {
      max-width: 780px;
      font-size: clamp(48px, 8vw, 94px);
      line-height: 0.95;
      letter-spacing: -0.07em;
      margin-bottom: 24px;
    }

    h1 span {
      display: block;
      color: transparent;
      background: linear-gradient(90deg, var(--blue), var(--cyan), var(--gold));
      -webkit-background-clip: text;
      background-clip: text;
    }

    .lead {
      max-width: 680px;
      color: var(--muted);
      font-size: clamp(17px, 2vw, 21px);
      line-height: 1.7;
      margin-bottom: 30px;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 34px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;
      padding: 0 20px;
      border-radius: 14px;
      border: 1px solid var(--line);
      background: rgba(255, 255, 255, 0.045);
      color: var(--text);
      font-weight: 800;
      box-shadow: 0 14px 38px var(--shadow);
      transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      border-color: rgba(95, 243, 228, 0.55);
      background: rgba(95, 243, 228, 0.08);
    }

    .btn.primary {
      border: 0;
      color: #03101b;
      background: linear-gradient(135deg, var(--cyan), var(--blue));
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
    }

    .metric {
      border: 1px solid var(--line);
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.045);
      padding: 18px;
    }

    .metric strong {
      display: block;
      color: var(--text);
      font-size: 24px;
      margin-bottom: 4px;
    }

    .metric span {
      color: var(--soft);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .panel {
      border: 1px solid var(--line);
      border-radius: 30px;
      background: linear-gradient(145deg, var(--panel-strong), rgba(255, 255, 255, 0.035));
      box-shadow: 0 30px 80px var(--shadow);
      overflow: hidden;
    }

    .panel-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 18px 20px;
      border-bottom: 1px solid var(--line);
      color: var(--muted);
      font-size: 13px;
    }

    .feed {
      padding: 18px;
      display: grid;
      gap: 12px;
    }

    .feed-card {
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 18px;
      background: rgba(0, 0, 0, 0.16);
    }

    .feed-card b {
      display: block;
      margin-bottom: 8px;
      color: var(--text);
    }

    .feed-card p {
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }

    .section-title {
      margin: 44px 0 18px;
      color: var(--muted);
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }

    .card {
      min-height: 184px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: var(--panel);
      padding: 24px;
      box-shadow: 0 20px 56px rgba(0, 0, 0, 0.18);
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .card:hover {
      transform: translateY(-3px);
      border-color: rgba(85, 185, 255, 0.45);
    }

    .card small {
      display: block;
      color: var(--cyan);
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }

    .card h2 {
      font-size: 22px;
      letter-spacing: -0.03em;
      margin-bottom: 10px;
    }

    .card p {
      color: var(--muted);
      line-height: 1.6;
      font-size: 14px;
      margin-bottom: 18px;
    }

    .card .link {
      color: var(--gold);
      font-weight: 800;
      font-size: 14px;
    }

    footer {
      margin-top: 42px;
      padding: 24px 0 8px;
      color: var(--soft);
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      border-top: 1px solid var(--line);
    }

    @media (max-width: 900px) {
      .nav,
      footer {
        align-items: flex-start;
        flex-direction: column;
      }

      .hero {
        grid-template-columns: 1fr;
      }

      .metrics,
      .cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 600px) {
      .wrap {
        width: min(100% - 24px, 1160px);
        padding-top: 20px;
      }

      .nav {
        margin-bottom: 44px;
      }

      .metrics,
      .cards {
        grid-template-columns: 1fr;
      }

      .btn {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <main class="wrap">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="https://bcyberaware.co.in/" aria-label="BCyberAware home">
        <span class="mark"><span>BC</span></span>
        <span>BCyberAware</span>
      </a>
      <span class="status"><span class="pulse"></span> Main Hub Live</span>
    </nav>

    <section class="hero">
      <div>
        <div class="eyebrow">By Vikas Pandita</div>
        <h1>Cybersecurity. <span>AI Security.</span> Threat Intelligence.</h1>
        <p class="lead">
          BCyberAware is the central hub for enterprise cybersecurity leadership, live threat intelligence,
          security architecture review, GenAI security governance and practical cyber awareness.
        </p>
        <div class="actions">
          <a class="btn primary" href="https://advisory.bcyberaware.co.in/">Open Threat Intelligence</a>
          <a class="btn" href="https://vikaspanditaportfolio.bcyberaware.co.in/">Vikas Pandita Portfolio</a>
          <a class="btn" href="https://youtube.com/@BCyberAwarebyvikaspandita">YouTube Channel</a>
        </div>
        <div class="metrics" aria-label="Key credentials">
          <div class="metric"><strong>26</strong><span>Live Sources</span></div>
          <div class="metric"><strong>14+</strong><span>Years</span></div>
          <div class="metric"><strong>70+</strong><span>Countries</span></div>
          <div class="metric"><strong>100K+</strong><span>Users Secured</span></div>
        </div>
      </div>

      <aside class="panel" aria-label="BCyberAware platform preview">
        <div class="panel-head">
          <span>BCyberAware Command Center</span>
          <span>Threat Intel · SAR · AI Security</span>
        </div>
        <div class="feed">
          <div class="feed-card">
            <b>Live Threat Intelligence</b>
            <p>Track advisories, exploits, CISA, NVD, MSRC and security news from curated public sources.</p>
          </div>
          <div class="feed-card">
            <b>Security Architecture Review</b>
            <p>Review HLD and LLD designs using STRIDE, PASTA, OWASP, DREAD and compliance-oriented checks.</p>
          </div>
          <div class="feed-card">
            <b>Cyber Leadership Portfolio</b>
            <p>Connect with Vikas Pandita for CISO, Deputy CISO, Head of Security Architecture and AI Security leadership roles.</p>
          </div>
        </div>
      </aside>
    </section>

    <div class="section-title">Explore BCyberAware</div>
    <section class="cards" aria-label="BCyberAware links">
      <a class="card" href="https://advisory.bcyberaware.co.in/">
        <small>Live Platform</small>
        <h2>Threat Intelligence</h2>
        <p>Open the live BCyberAware advisory dashboard with security feeds and exploit intelligence.</p>
        <span class="link">Open advisory -></span>
      </a>
      <a class="card" href="https://sar-automation.vikaspandita12.workers.dev/">
        <small>Security Review</small>
        <h2>SAR Automation</h2>
        <p>Security architecture review platform for threat modeling, risk scoring and remediation reports.</p>
        <span class="link">Open SAR -></span>
      </a>
      <a class="card" href="https://threatforge-bcyberaware.vikaspandita12.workers.dev/">
        <small>Product</small>
        <h2>ThreatForge</h2>
        <p>Automated HLD and LLD review experience for STRIDE, PASTA, compliance and attack surface analysis.</p>
        <span class="link">Open ThreatForge -></span>
      </a>
      <a class="card" href="https://vikaspanditaportfolio.bcyberaware.co.in/">
        <small>Founder</small>
        <h2>Vikas Pandita Portfolio</h2>
        <p>Cybersecurity leadership profile, credentials, platforms, publications and contact links.</p>
        <span class="link">Open portfolio -></span>
      </a>
      <a class="card" href="https://bcyberawarebyvikaspandita.wordpress.com/">
        <small>Blog</small>
        <h2>CyberShots</h2>
        <p>Enterprise cybersecurity writing across Zero Trust, cloud security, AI governance and cyber strategy.</p>
        <span class="link">Read blog -></span>
      </a>
      <a class="card" href="https://linkedin.com/in/vikas-p-895a5664/">
        <small>Connect</small>
        <h2>LinkedIn</h2>
        <p>Connect for cybersecurity leadership, consulting, speaking and enterprise security architecture work.</p>
        <span class="link">Connect -></span>
      </a>
    </section>

    <footer>
      <span>BCyberAware by Vikas Pandita</span>
      <span>Cybersecurity · AI Security · Threat Intelligence · Security Architecture</span>
    </footer>
  </main>
</body>
</html>`;

export default {
  fetch() {
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin",
      },
    });
  },
};
