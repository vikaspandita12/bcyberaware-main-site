const html = String.raw`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>BCyberAware — Vikas Pandita | Cybersecurity Leadership, AI Security &amp; Threat Intelligence</title>
  <meta name="description" content="BCyberAware by Vikas Pandita: enterprise cybersecurity leadership, AI security governance, live threat intelligence, security architecture review (STRIDE, PASTA, OWASP) and CISO advisory." />
  <meta name="author" content="Vikas Pandita" />
  <link rel="canonical" href="https://bcyberaware.co.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="BCyberAware — Vikas Pandita" />
  <meta property="og:description" content="Cybersecurity leadership, AI security governance, live threat intelligence and security architecture review." />
  <meta property="og:url" content="https://bcyberaware.co.in/" />
  <meta property="og:site_name" content="BCyberAware" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="BCyberAware — Vikas Pandita" />
  <meta name="twitter:description" content="Cybersecurity leadership, AI security, threat intelligence and security architecture." />
  <meta name="theme-color" content="#070b12" />
  <link rel="icon" href="/bcyberaware-icon.svg" type="image/svg+xml" />
  <link rel="shortcut icon" href="/bcyberaware-icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/bcyberaware-logo.svg" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vikas Pandita",
    "url": "https://bcyberaware.co.in/",
    "jobTitle": "Cybersecurity Leader",
    "knowsAbout": ["Cybersecurity", "AI Security", "Threat Intelligence", "Security Architecture", "Threat Modeling", "Zero Trust", "Cloud Security"],
    "sameAs": [
      "https://linkedin.com/in/vikas-p-895a5664/",
      "https://vikaspanditaportfolio.bcyberaware.co.in/",
      "https://bcyberawarebyvikaspandita.wordpress.com/",
      "https://youtube.com/@BCyberAwarebyvikaspandita"
    ]
  }
  </script>
  <style>
    :root {
      color-scheme: dark;
      --bg: #070b12;
      --surface: #0b1220;
      --surface-2: #0e1626;
      --line: rgba(125, 211, 252, 0.14);
      --line-strong: rgba(125, 211, 252, 0.3);
      --text: #e8eefb;
      --muted: #9fb0c9;
      --soft: #64748b;
      --accent: #38bdf8;
      --accent-2: #2dd4bf;
      --green: #4ade80;
      --amber: #fbbf24;
      --mono: ui-monospace, "SF Mono", "Cascadia Code", "JetBrains Mono", Menlo, Consolas, monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      background:
        radial-gradient(ellipse 60rem 28rem at 70% -8rem, rgba(56, 189, 248, 0.09), transparent),
        radial-gradient(ellipse 40rem 24rem at 8% 30rem, rgba(45, 212, 191, 0.05), transparent),
        var(--bg);
      color: var(--text);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(148, 163, 184, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.04) 1px, transparent 1px);
      background-size: 64px 64px;
      mask-image: radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .wrap {
      position: relative;
      z-index: 1;
      width: min(1140px, calc(100% - 40px));
      margin: 0 auto;
    }

    /* ── Nav ─────────────────────────────── */
    .topbar {
      border-bottom: 1px solid var(--line);
      background: rgba(7, 11, 18, 0.85);
      backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 14px 0;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 700;
      font-size: 15px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .brand-logo {
      width: 38px;
      height: 38px;
      border-radius: 9px;
      display: block;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 26px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .nav-link {
      color: var(--muted);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      transition: color 0.2s ease;
    }

    .nav-link:hover {
      color: var(--accent);
    }

    .status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(74, 222, 128, 0.25);
      color: var(--green);
      background: rgba(74, 222, 128, 0.07);
      border-radius: 999px;
      padding: 7px 14px;
      font-family: var(--mono);
      font-size: 11.5px;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .pulse {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--green);
      box-shadow: 0 0 10px var(--green);
      animation: pulse 2.4s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }

    /* ── Hero ────────────────────────────── */
    .hero {
      display: grid;
      grid-template-columns: 1.08fr 0.92fr;
      gap: 56px;
      align-items: center;
      padding: 84px 0 64px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--accent-2);
      font-family: var(--mono);
      font-size: 12.5px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 22px;
    }

    .eyebrow::before {
      content: "";
      width: 28px;
      height: 1px;
      background: var(--accent-2);
    }

    h1 {
      font-size: clamp(40px, 6.4vw, 72px);
      line-height: 1.04;
      letter-spacing: -0.035em;
      font-weight: 800;
      margin-bottom: 24px;
    }

    h1 .accent {
      color: var(--accent);
    }

    .lead {
      max-width: 640px;
      color: var(--muted);
      font-size: clamp(16px, 1.8vw, 18.5px);
      line-height: 1.75;
      margin-bottom: 30px;
    }

    .lead strong {
      color: var(--text);
      font-weight: 600;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 40px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 0 24px;
      border-radius: 10px;
      border: 1px solid var(--line-strong);
      background: transparent;
      color: var(--text);
      font-size: 15px;
      font-weight: 600;
      transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
      background: rgba(56, 189, 248, 0.07);
    }

    .btn.primary {
      border-color: transparent;
      color: #04121d;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      box-shadow: 0 8px 28px rgba(56, 189, 248, 0.25);
    }

    .btn.primary:hover {
      box-shadow: 0 12px 36px rgba(56, 189, 248, 0.35);
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0;
      border: 1px solid var(--line);
      border-radius: 14px;
      overflow: hidden;
      background: rgba(11, 18, 32, 0.6);
    }

    .metric {
      padding: 18px 20px;
      border-right: 1px solid var(--line);
    }

    .metric:last-child {
      border-right: 0;
    }

    .metric strong {
      display: block;
      color: var(--text);
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 2px;
    }

    .metric span {
      color: var(--soft);
      font-family: var(--mono);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    /* ── Console panel ───────────────────── */
    .console {
      border: 1px solid var(--line);
      border-radius: 16px;
      background: var(--surface);
      box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      font-family: var(--mono);
      font-size: 13.5px;
    }

    .console-head {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 13px 18px;
      border-bottom: 1px solid var(--line);
      background: var(--surface-2);
    }

    .dot {
      width: 11px;
      height: 11px;
      border-radius: 999px;
      background: #334155;
    }

    .dot:nth-child(1) { background: #f87171; }
    .dot:nth-child(2) { background: var(--amber); }
    .dot:nth-child(3) { background: var(--green); }

    .console-title {
      margin-left: 10px;
      color: var(--soft);
      font-size: 12px;
      letter-spacing: 0.04em;
    }

    .console-body {
      padding: 22px 22px 26px;
      display: grid;
      gap: 14px;
      line-height: 1.65;
    }

    .console-body .prompt {
      color: var(--accent-2);
    }

    .console-body .cmd {
      color: var(--text);
    }

    .console-body .out {
      color: var(--muted);
      padding-left: 2px;
    }

    .console-body .key {
      color: var(--accent);
    }

    .console-body .ok {
      color: var(--green);
    }

    .cursor {
      display: inline-block;
      width: 8px;
      height: 15px;
      vertical-align: -2px;
      background: var(--accent);
      animation: blink 1.1s step-end infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    /* ── Sections ────────────────────────── */
    .section {
      padding: 56px 0 8px;
    }

    .section-head {
      display: flex;
      align-items: baseline;
      gap: 18px;
      margin-bottom: 28px;
    }

    .section-head .num {
      color: var(--accent);
      font-family: var(--mono);
      font-size: 13px;
      font-weight: 600;
    }

    .section-head h2 {
      font-size: clamp(24px, 3.2vw, 32px);
      letter-spacing: -0.03em;
      font-weight: 800;
    }

    .section-head .rule {
      flex: 1;
      height: 1px;
      background: var(--line);
      align-self: center;
    }

    /* Expertise */
    .expertise {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
    }

    .exp {
      border: 1px solid var(--line);
      border-radius: 14px;
      background: rgba(11, 18, 32, 0.6);
      padding: 24px 22px;
      transition: border-color 0.2s ease, transform 0.2s ease;
    }

    .exp:hover {
      border-color: var(--line-strong);
      transform: translateY(-2px);
    }

    .exp .tag {
      display: inline-block;
      color: var(--accent-2);
      font-family: var(--mono);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      margin-bottom: 14px;
    }

    .exp strong {
      display: block;
      color: var(--text);
      font-size: 16.5px;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 8px;
    }

    .exp span {
      color: var(--muted);
      font-size: 13.5px;
      line-height: 1.6;
    }

    /* Platform cards */
    .cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }

    .card {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: var(--surface);
      padding: 26px 24px;
      transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: rgba(56, 189, 248, 0.45);
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4);
    }

    .card small {
      display: inline-flex;
      align-self: flex-start;
      color: var(--accent);
      border: 1px solid rgba(56, 189, 248, 0.25);
      background: rgba(56, 189, 248, 0.06);
      border-radius: 6px;
      padding: 4px 9px;
      font-family: var(--mono);
      font-size: 10.5px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .card h3 {
      font-size: 20px;
      letter-spacing: -0.02em;
      font-weight: 700;
      margin-bottom: 9px;
    }

    .card p {
      color: var(--muted);
      line-height: 1.65;
      font-size: 14px;
      margin-bottom: 20px;
      flex: 1;
    }

    .card .link {
      color: var(--accent-2);
      font-family: var(--mono);
      font-weight: 600;
      font-size: 13px;
    }

    .card:hover .link {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Statement */
    .statement {
      margin-top: 56px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background:
        radial-gradient(ellipse 36rem 16rem at 85% 0%, rgba(56, 189, 248, 0.1), transparent),
        var(--surface);
      padding: 44px 40px;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 32px;
      align-items: center;
    }

    .statement h2 {
      font-size: clamp(24px, 3.6vw, 38px);
      line-height: 1.12;
      letter-spacing: -0.03em;
      font-weight: 800;
      margin-bottom: 14px;
    }

    .statement p {
      color: var(--muted);
      line-height: 1.7;
      max-width: 640px;
      font-size: 15.5px;
    }

    .statement .btn {
      white-space: nowrap;
    }

    /* Footer */
    footer {
      margin-top: 72px;
      border-top: 1px solid var(--line);
      padding: 28px 0 36px;
      color: var(--soft);
      font-size: 13px;
    }

    .foot-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .foot-links {
      display: flex;
      gap: 22px;
      flex-wrap: wrap;
    }

    .foot-links a {
      color: var(--soft);
      transition: color 0.2s ease;
    }

    .foot-links a:hover {
      color: var(--accent);
    }

    .foot-note {
      margin-top: 14px;
      font-family: var(--mono);
      font-size: 11.5px;
      color: #475569;
    }

    /* ── Responsive ──────────────────────── */
    @media (max-width: 920px) {
      .hero {
        grid-template-columns: 1fr;
        gap: 40px;
        padding-top: 56px;
      }

      .expertise {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .metrics {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .metric:nth-child(2n) {
        border-right: 0;
      }

      .metric:nth-child(-n+2) {
        border-bottom: 1px solid var(--line);
      }

      .statement {
        grid-template-columns: 1fr;
        padding: 34px 28px;
      }
    }

    @media (max-width: 600px) {
      .nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .nav-actions {
        justify-content: flex-start;
        gap: 16px;
      }

      .expertise,
      .cards,
      .metrics {
        grid-template-columns: 1fr;
      }

      .metric {
        border-right: 0;
        border-bottom: 1px solid var(--line);
      }

      .metric:last-child {
        border-bottom: 0;
      }

      .btn {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="wrap">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="https://bcyberaware.co.in/" aria-label="BCyberAware home">
          <img class="brand-logo" src="/bcyberaware-logo.svg" alt="BCyberAware" width="38" height="38" />
          <span>BCyberAware</span>
        </a>
        <div class="nav-actions">
          <a class="nav-link" href="https://advisory.bcyberaware.co.in/">Threat Intel</a>
          <a class="nav-link" href="https://sar.bcyberaware.co.in/">SAR</a>
          <a class="nav-link" href="https://vikaspanditaportfolio.bcyberaware.co.in/">Portfolio</a>
          <a class="nav-link" href="https://bcyberawarebyvikaspandita.wordpress.com/">Blog</a>
          <span class="status" role="status"><span class="pulse" aria-hidden="true"></span> ALL SYSTEMS OPERATIONAL</span>
        </div>
      </nav>
    </div>
  </header>

  <main class="wrap">
    <section class="hero">
      <div>
        <div class="eyebrow">BCyberAware &middot; Vikas Pandita</div>
        <h1>Enterprise security,<br /><span class="accent">engineered with intelligence.</span></h1>
        <p class="lead">
          <strong>Cybersecurity leadership for the AI era.</strong> BCyberAware unifies live threat intelligence,
          security architecture review, GenAI security governance and CISO-level advisory — built and led by
          Vikas Pandita, with 14+ years securing enterprises across the globe.
        </p>
        <div class="actions">
          <a class="btn primary" href="https://advisory.bcyberaware.co.in/">Open Threat Intelligence</a>
          <a class="btn" href="https://vikaspanditaportfolio.bcyberaware.co.in/">View Portfolio</a>
          <a class="btn" href="https://linkedin.com/in/vikas-p-895a5664/">Connect on LinkedIn</a>
        </div>
        <div class="metrics" aria-label="Key credentials">
          <div class="metric"><strong>14+</strong><span>Years in Security</span></div>
          <div class="metric"><strong>26</strong><span>Live Intel Sources</span></div>
          <div class="metric"><strong>70+</strong><span>Countries Reached</span></div>
          <div class="metric"><strong>100K+</strong><span>Users Secured</span></div>
        </div>
      </div>

      <aside class="console" aria-label="BCyberAware capability overview">
        <div class="console-head">
          <span class="dot" aria-hidden="true"></span>
          <span class="dot" aria-hidden="true"></span>
          <span class="dot" aria-hidden="true"></span>
          <span class="console-title">vikas@bcyberaware: ~</span>
        </div>
        <div class="console-body">
          <div><span class="prompt">$</span> <span class="cmd">whoami --verbose</span></div>
          <div class="out">Cybersecurity Leader &middot; AI Security &middot; Security Architecture<br />CISO Advisory &middot; Threat Intelligence &middot; Zero Trust</div>
          <div><span class="prompt">$</span> <span class="cmd">bcyberaware status --services</span></div>
          <div class="out">
            <span class="key">threat-intel</span> &nbsp;<span class="ok">● live</span> &mdash; CISA, NVD, MSRC + 23 curated feeds<br />
            <span class="key">sar-engine</span> &nbsp;&nbsp;&nbsp;<span class="ok">● live</span> &mdash; STRIDE / PASTA / OWASP / DREAD<br />
            <span class="key">threatforge</span> &nbsp;&nbsp;<span class="ok">● live</span> &mdash; automated HLD &amp; LLD review<br />
            <span class="key">ai-security</span> &nbsp;&nbsp;<span class="ok">● live</span> &mdash; GenAI governance &amp; risk controls
          </div>
          <div><span class="prompt">$</span> <span class="cursor" aria-hidden="true"></span></div>
        </div>
      </aside>
    </section>

    <section class="section" aria-label="Core expertise">
      <div class="section-head">
        <span class="num">01</span>
        <h2>Core Expertise</h2>
        <span class="rule" aria-hidden="true"></span>
      </div>
      <div class="expertise">
        <div class="exp">
          <span class="tag">// LEADERSHIP</span>
          <strong>Executive Cyber Leadership</strong>
          <span>CISO-level strategy, security architecture direction, board-ready risk communication and prioritization.</span>
        </div>
        <div class="exp">
          <span class="tag">// INTELLIGENCE</span>
          <strong>Threat Intelligence</strong>
          <span>Advisory monitoring, exploit and vulnerability awareness, and actionable intelligence for fast decisions.</span>
        </div>
        <div class="exp">
          <span class="tag">// AI SECURITY</span>
          <strong>AI Security Governance</strong>
          <span>GenAI risk controls, enterprise AI platform governance and secure-by-design AI architecture.</span>
        </div>
        <div class="exp">
          <span class="tag">// ARCHITECTURE</span>
          <strong>Architecture Review</strong>
          <span>STRIDE, PASTA, DREAD and OWASP-driven threat modeling of HLD and LLD designs, mapped to compliance.</span>
        </div>
      </div>
    </section>

    <section class="section" aria-label="Platforms and links">
      <div class="section-head">
        <span class="num">02</span>
        <h2>Platforms &amp; Work</h2>
        <span class="rule" aria-hidden="true"></span>
      </div>
      <div class="cards">
        <a class="card" href="https://advisory.bcyberaware.co.in/">
          <small>Live Platform</small>
          <h3>Threat Intelligence</h3>
          <p>Live advisory dashboard aggregating CISA, NVD, MSRC and 26 curated public sources with exploit intelligence.</p>
          <span class="link">open advisory &rarr;</span>
        </a>
        <a class="card" href="https://sar.bcyberaware.co.in/">
          <small>Security Review</small>
          <h3>SAR Automation</h3>
          <p>Security architecture review platform for threat modeling, risk scoring and remediation reporting.</p>
          <span class="link">open sar &rarr;</span>
        </a>
        <a class="card" href="https://threatforge-bcyberaware.vikaspandita12.workers.dev/">
          <small>Product</small>
          <h3>ThreatForge</h3>
          <p>Automated HLD and LLD review for STRIDE, PASTA, compliance mapping and attack surface analysis.</p>
          <span class="link">open threatforge &rarr;</span>
        </a>
        <a class="card" href="https://vikaspanditaportfolio.bcyberaware.co.in/">
          <small>Founder</small>
          <h3>Vikas Pandita — Portfolio</h3>
          <p>Cybersecurity leadership profile: credentials, platforms, publications, speaking and contact.</p>
          <span class="link">open portfolio &rarr;</span>
        </a>
        <a class="card" href="https://bcyberawarebyvikaspandita.wordpress.com/">
          <small>Writing</small>
          <h3>CyberShots Blog</h3>
          <p>Enterprise security writing on Zero Trust, cloud security, AI governance and cyber strategy.</p>
          <span class="link">read blog &rarr;</span>
        </a>
        <a class="card" href="https://youtube.com/@BCyberAwarebyvikaspandita">
          <small>Channel</small>
          <h3>BCyberAware on YouTube</h3>
          <p>Practical cyber awareness and security education for professionals and cyber-aware teams.</p>
          <span class="link">watch channel &rarr;</span>
        </a>
      </div>
    </section>

    <section class="statement" aria-label="Work with Vikas">
      <div>
        <h2>Built for security leaders, architects and cyber-aware teams.</h2>
        <p>
          This domain is the entry point for everything BCyberAware: live threat intelligence, security
          architecture review, AI security leadership and Vikas Pandita's professional portfolio. Open to
          CISO, Deputy CISO, Head of Security Architecture and AI Security leadership conversations.
        </p>
      </div>
      <a class="btn primary" href="https://vikaspanditaportfolio.bcyberaware.co.in/">Work With Vikas</a>
    </section>

    <footer>
      <div class="foot-grid">
        <span>&copy; BCyberAware &middot; Vikas Pandita</span>
        <div class="foot-links">
          <a href="https://linkedin.com/in/vikas-p-895a5664/">LinkedIn</a>
          <a href="https://youtube.com/@BCyberAwarebyvikaspandita">YouTube</a>
          <a href="https://bcyberawarebyvikaspandita.wordpress.com/">Blog</a>
          <a href="/.well-known/security.txt">security.txt</a>
        </div>
      </div>
      <div class="foot-note">// zero client-side JavaScript &middot; hardened security headers &middot; served from the edge</div>
    </footer>
  </main>
</body>
</html>`;

const securityTxt = `Contact: https://linkedin.com/in/vikas-p-895a5664/
Contact: mailto:vikaspandita12@gmail.com
Expires: 2027-06-10T00:00:00.000Z
Preferred-Languages: en
Canonical: https://bcyberaware.co.in/.well-known/security.txt
Policy: https://bcyberaware.co.in/
`;

const securityHeaders = {
  "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
  "content-security-policy":
    "default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests",
  "x-frame-options": "DENY",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "cross-origin-opener-policy": "same-origin",
  "cross-origin-resource-policy": "same-origin",
};

export default {
  fetch(request) {
    const { pathname } = new URL(request.url);

    if (pathname === "/.well-known/security.txt" || pathname === "/security.txt") {
      return new Response(securityTxt, {
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=3600",
          ...securityHeaders,
        },
      });
    }

    if (pathname !== "/" && pathname !== "") {
      return Response.redirect("https://bcyberaware.co.in/", 301);
    }

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        ...securityHeaders,
      },
    });
  },
};
