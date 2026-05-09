// Shared site shell: injects the header, nav and footer into any page that
// has <div data-shell="header"></div> and <div data-shell="footer"></div>.
//
// Loaded as a module from every page. No framework — just DOM.

const navLinks = [
  { href: '/',                label: 'This week' },
  { href: '/recipes/',        label: 'Recipes'   },
  { href: '/shopping-list/',  label: 'Shopping'  },
  { href: '/about/',          label: 'About'     }
];

function currentPath() {
  let p = window.location.pathname;
  if (!p.endsWith('/') && !p.endsWith('.html')) p += '/';
  return p;
}

function isActive(href) {
  const path = currentPath();
  if (href === '/') return path === '/' || path === '/index.html';
  return path === href || path.startsWith(href);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const c of children) node.appendChild(c);
  return node;
}

function renderHeader(mount) {
  const brand = el('a', { class: 'brand', href: '/' }, [
    el('span', { class: 'brand-mark', text: '🍳' }),
    el('span', { class: 'brand-name', text: 'CookThis' })
  ]);

  const nav = el('nav', { class: 'site-nav', 'aria-label': 'Primary' });
  for (const link of navLinks) {
    const a = el('a', { href: link.href, text: link.label });
    if (isActive(link.href)) a.setAttribute('aria-current', 'page');
    nav.appendChild(a);
  }

  const inner = el('div', { class: 'site-header-inner' }, [brand, nav]);
  mount.appendChild(el('header', { class: 'site-header' }, [inner]));
}

function renderFooter(mount) {
  const inner = el('div', { class: 'site-footer-inner' }, [
    el('p', { text: 'CookThis — a weekly menu for someone who lifts and won’t eat his vegetables.' }),
    el('p', { class: 'site-footer-meta', text: 'Static site, hosted on Cloudflare Pages.' })
  ]);
  mount.appendChild(el('footer', { class: 'site-footer' }, [inner]));
}

const headerMount = document.querySelector('[data-shell="header"]');
const footerMount = document.querySelector('[data-shell="footer"]');
if (headerMount) renderHeader(headerMount);
if (footerMount) renderFooter(footerMount);

// Re-export DOM helpers so page-specific scripts can use the same primitives
// without copy-pasting them.
export { el };
