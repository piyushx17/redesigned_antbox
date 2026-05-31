(function () {
  /* ── CURSOR ── */
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
  (function animRing() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  /* ── NAV / FOOTER ── */
  const navHost = document.getElementById('nav');
  const footerHost = document.getElementById('footer');
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  const isDashboard = path.includes('/dashboards/');

  function navLink(href, label) {
    const active = file === href ? 'active' : '';
    return `<a class="nav-link ${active}" href="${isDashboard ? `../${href}` : href}">${label}</a>`;
  }

  const svgIcons = {
    home: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
    about: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>`,
    careers: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    platform: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  };

  if (navHost) {
    navHost.innerHTML = `
      <header class="site-nav">
        <div class="site-nav-inner">
          <a class="logo" href="${isDashboard ? '../index.html' : 'index.html'}">
            <span class="logo-mark"></span>
            <span>ANTBOX</span>
          </a>
          <nav class="nav-links">
            ${navLink('index.html', 'Home')}
            ${navLink('about.html', 'About')}
            ${navLink('careers.html', 'Careers')}
            ${navLink('platform.html', 'Platform')}
          </nav>
          <div class="nav-actions">
            <a class="btn btn-ghost" href="${isDashboard ? '../login.html' : 'login.html'}">Login</a>
            <a class="btn btn-brand" href="${isDashboard ? '../signup.html' : 'signup.html'}">Get Started</a>
          </div>
          <button class="hamburger" type="button" aria-label="Toggle Menu"><span></span></button>
        </div>
      </header>
      <div class="mobile-menu" id="mobileMenu">
        ${navLink('index.html', 'Home')}
        ${navLink('about.html', 'About')}
        ${navLink('careers.html', 'Careers')}
        ${navLink('platform.html', 'Platform')}
        <a class="btn btn-ghost" href="${isDashboard ? '../login.html' : 'login.html'}">Login</a>
        <a class="btn btn-brand" href="${isDashboard ? '../signup.html' : 'signup.html'}">Get Started</a>
      </div>
    `;
  }

  if (footerHost && !isDashboard) {
    footerHost.innerHTML = `
      <section class="talentos-strip reveal">
        <div class="talentos-inner">
          <p class="section-label">TalentOS</p>
          <h2 style="font-size:clamp(30px,4.6vw,56px)">Built for modern <em>talent teams</em></h2>
          <div class="pill-row">
            <span class="pill">ATS</span><span class="pill">Mock Interview</span><span class="pill">Readiness Score</span>
            <span class="pill">Sprint Management</span><span class="pill">Analytics</span>
          </div>
          <div class="dark-stats">
            <div class="dark-stat"><strong>150+</strong><p>Campus Partners</p></div>
            <div class="dark-stat"><strong>85%</strong><p>Offer Conversion</p></div>
            <div class="dark-stat"><strong>12k+</strong><p>Student Profiles</p></div>
            <div class="dark-stat"><strong>42%</strong><p>Hiring Time Saved</p></div>
          </div>
          <div style="margin-top:22px"><a class="btn btn-brand" href="contact.html">Request Demo</a></div>
        </div>
      </section>
      <footer class="site-footer">
        <div class="footer-grid">
          <div>
            <a class="logo" href="index.html"><span class="logo-mark"></span><span>ANTBOX</span></a>
            <p style="margin-top:14px;max-width:28ch;font-size:13px">Future-proof talent infrastructure from campus to corporate.</p>
            <div class="socials">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X">x</a>
              <a href="#" aria-label="Instagram">ig</a>
            </div>
          </div>
          <div>
            <h4>Navigate</h4>
            <div class="footer-links">
              <a href="index.html">Home</a><a href="about.html">About</a><a href="careers.html">Careers</a><a href="platform.html">Platform</a>
            </div>
          </div>
          <div>
            <h4>Legal</h4>
            <div class="footer-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
          </div>
          <div>
            <h4>Social</h4>
            <div class="footer-links"><a href="#">LinkedIn</a><a href="#">X</a><a href="#">YouTube</a></div>
          </div>
        </div>
        <div class="copyright">© ${new Date().getFullYear()} AntBox. All rights reserved.</div>
      </footer>
    `;
  }

  /* ── HAMBURGER ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () { mobileMenu.classList.toggle('open'); });
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      const target = id && document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* ── REVEAL ON SCROLL ── */
  const reveals = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left');
  if (reveals.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('in'); });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ── FAQ ── */
  document.querySelectorAll('.faq-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const body = btn.nextElementSibling;
      const parent = btn.closest('.faq-item');
      const open = body.style.maxHeight;
      document.querySelectorAll('.faq-content').forEach(f => f.style.maxHeight = null);
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
      if (!open) { body.style.maxHeight = body.scrollHeight + 'px'; parent.classList.add('open'); }
    });
  });

  /* ── SIDE LINKS ── */
  document.querySelectorAll('.dash-link, .side-link').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelectorAll('.side-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  /* ── PAGE ENTER ── */
  window.addEventListener('load', function () {
    document.body.classList.add('page-enter');
    requestAnimationFrame(function () { document.body.classList.remove('page-enter'); });
  });

  /* ── PARTICLES (hero only) ── */
  const heroParticles = document.querySelector('.hero-particles');
  if (heroParticles) {
    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div');
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 12 + 8;
      const delay = Math.random() * 8;
      p.style.cssText = `position:absolute;left:${x}%;top:${y}%;width:${size}px;height:${size}px;background:var(--amber);border-radius:50%;opacity:${Math.random() * 0.4 + 0.1};animation:particleFloat ${duration}s ${delay}s ease-in-out infinite`;
      heroParticles.appendChild(p);
    }
    const style = document.createElement('style');
    style.textContent = `@keyframes particleFloat{0%,100%{transform:translateY(0) scale(1);opacity:0.2}33%{transform:translateY(-30px) scale(1.1);opacity:0.5}66%{transform:translateY(20px) scale(0.9);opacity:0.15}}`;
    document.head.appendChild(style);
  }

  /* ── NUMBER COUNTER ANIMATION ── */
  document.querySelectorAll('[data-count]').forEach(function(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const io2 = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let start = 0; const duration = 1500;
          const step = timestamp => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (target < 10 ? (eased * target).toFixed(1) : Math.floor(eased * target)) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io2.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    io2.observe(el);
  });
})();