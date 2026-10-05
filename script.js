/* ==========================================================================
   Project CORE — site interactions
   - EN/DE language switching (localStorage, browser detection)
   - sticky header, mobile navigation, scroll reveal
   - click-to-play YouTube facades (privacy-friendly, no cookies before play)
   - lightbox for screenshots and posters
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Translations                                                        */
  /* ------------------------------------------------------------------ */
  var I18N = {
    en: {
      'meta.title': 'Project CORE — Sci-fi Action Adventure by Gernot Lepschy',
      'meta.description': 'Project CORE is an independently developed sci-fi action adventure set in 2053. Pilot futuristic aircraft, fight the mysterious Enemys and uncover the truth behind C.O.R.E. Released March 10, 2023 for Windows PC, available on the Microsoft Store and itch.io.',

      'a11y.skip': 'Skip to content',

      'nav.trailers': 'Trailers',
      'nav.features': 'Features',
      'nav.story': 'Story',
      'nav.gallery': 'Gallery',
      'nav.get': 'Get the game',
      'nav.posters': 'Posters',
      'nav.about': 'About',

      'hero.kicker': 'Sci-fi Action Adventure · Windows PC',
      'hero.tagline': 'You are humanity\u2019s last hope. Pilot a futuristic aircraft, face the mysterious \u201cEnemys\u201d and uncover the truth behind the incident that almost destroyed the world.',
      'hero.ctaTrailer': 'Watch the trailer',
      'hero.ctaStore': 'Microsoft Store',
      'hero.ctaItch': 'itch.io',
      'hero.demoLink': 'Play the free browser demo on Unity Play',
      'hero.chip2': 'Windows PC',
      'hero.chipRelease': 'Released March 10, 2023',
      'hero.chip3': 'Unity + Blender',
      'hero.chip4': 'Action · Adventure · RPG',

      'trailers.kicker': 'Watch',
      'trailers.title': 'Trailers & Film',
      'trailers.lead': 'The Version 2.0 trailer, the Type X expansion trailer and the cinematic short film.',
      'trailers.v1title': 'Version 2.0 Trailer',
      'trailers.v1desc': 'The official trailer of the Version 2.0 update.',
      'trailers.v1alt': 'Project CORE: Version 2.0 Trailer',
      'trailers.v2title': 'Type X: Expansion Trailer',
      'trailers.v2desc': 'A look at the Type X expansion, included with the itch.io edition.',
      'trailers.v2alt': 'Project CORE: Type X — Expansion Trailer',
      'trailers.v3title': 'Another Mission: Short Film',
      'trailers.v3desc': 'A cinematic short film set in the world of Project CORE.',
      'trailers.v3alt': 'Project CORE: Another Mission — Short Film',
      'trailers.note': 'Videos are streamed from YouTube. Clicking a preview loads the player.',
      'trailers.playPrefix': 'Play',

      'features.kicker': 'Gameplay',
      'features.title': 'Features',
      'features.lead': 'An independently developed passion project, built by one developer and designed to feel like a full sci-fi adventure.',
      'features.f1title': 'Fast-paced 3D combat',
      'features.f1desc': 'Fight through missions with responsive action combat — on foot and in the air.',
      'features.f2title': 'Pilot futuristic aircraft',
      'features.f2desc': 'Take the stick of advanced aircraft and defend Earth from the mysterious Enemys.',
      'features.f3title': 'A story worth uncovering',
      'features.f3desc': 'Dig into a mysterious incident from 20 years ago that nearly ended humanity.',
      'features.f4title': 'Explore a world under threat',
      'features.f4desc': 'Missions take you to Mega-Cities, the ocean, abandoned military bases and into orbit.',
      'features.f5title': 'Multiple endings',
      'features.f5desc': 'Your journey through the C.O.R.E. story can end in more than one way.',
      'features.f6title': 'Complete edition content',
      'features.f6desc': 'The itch.io edition bundles the Type X expansion, with extra story and levels at no additional cost.',

      'story.kicker': 'The year is 2053',
      'story.title': 'Humanity\u2019s last hope',
      'story.p1': 'Twenty years ago, an incident brought humanity to the brink of destruction. Today, the truth is still buried, and the mysterious Enemys are back.',
      'story.p2': 'As a pilot for the shady organization C.O.R.E., you are the world\u2019s last line of defense. Fly against impossible odds, uncover what really happened two decades ago, and do everything you can to prevent another catastrophe.',
      'story.p3': 'No place and no time is safe: from neon Mega-Cities to the open ocean, abandoned military bases and beyond the atmosphere.',
      'story.missionTitle': 'Your mission',
      'story.m1': 'Defend Earth from the Enemys',
      'story.m2': 'Uncover the incident of 20 years ago',
      'story.m3': 'Survive combat on land, at sea, in the air and in space',
      'story.alt': 'Project CORE — the crew in a red-lit hangar',
      'story.status1': 'Year',
      'story.status2': 'Organization',

      'gallery.kicker': 'Screenshots',
      'gallery.title': 'From the game',
      'gallery.lead': 'Direct captures from Project CORE. Click an image to view it full-size.',
      'gallery.alt1': 'Dialogue scene with a crew member at a vending machine',
      'gallery.alt2': 'Conversation in a dark interior at night',
      'gallery.alt3': 'Red-lit corridor aboard a C.O.R.E. base',
      'gallery.alt4': 'The crew in a lounge with a live performance',
      'gallery.alt5': 'Night-vision combat during a space mission',
      'gallery.alt6': 'Aircraft flight over a neon mega-city at night',
      'gallery.alt7': 'Flight over snowy mountains with the HUD active',

      'get.kicker': 'Available now',
      'get.title': 'Get the game',
      'get.lead': 'Project CORE was released for Windows PC on March 10, 2023. Try the free demo right in your browser.',
      'get.msDesc': 'Project CORE for Windows PC.',
      'get.msBtn': 'Open Microsoft Store',
      'get.itchTag': 'Includes Type X expansion',
      'get.itchDesc': 'Includes the Type X expansion with additional story and levels.',
      'get.itchBtn': 'Open itch.io',
      'get.demoTitle': 'Free demo',
      'get.demoDesc': 'A short online demo, playable right in your browser. The full game offers more content, better graphics and a cinematic story mode.',
      'get.demoBtn': 'Play on Unity Play',

      'posters.kicker': 'Artwork',
      'posters.title': 'Promotional posters',
      'posters.lead': 'Official key visuals from the Microsoft Store and the game\u2019s releases. Click to enlarge.',
      'posters.alt1': 'Project CORE key visual with the Microsoft Store release date',
      'posters.alt2': 'The crew standing together in a red-lit hall',
      'posters.alt3': 'Promotional poster with the C.O.R.E. crew at a lounge',
      'posters.alt4': 'Promotional poster with the crew in a field at night',
      'posters.alt5': 'Promotional poster with the crew on a hill under the stars',
      'posters.alt6': 'Microsoft Store poster with QR code and age rating',

      'about.kicker': 'The developer',
      'about.title': 'About Gernot Lepschy',
      'about.p1': 'Project CORE is an independently developed passion project by Gernot Lepschy, a programmer, level designer and writer. Built with Unity and Blender, it aims to bring a unique and fresh experience to both experienced gamers and newcomers.',
      'about.p2': 'From level design and programming to story and visuals, Project CORE is crafted by one developer under the G.L. Studios name.',
      'about.portfolioBtn': 'Visit my portfolio',
      'about.ytBtn': 'YouTube channel',
      'about.alt': 'Project CORE — key art',

      'contact.kicker': 'Contact',
      'contact.title': 'Get in touch',
      'contact.lead': 'Questions about Project CORE, feedback or press inquiries? Reach out any time.',
      'contact.portfolio': 'Portfolio',

      'footer.copy': '\u00a9 {year} Gernot Lepschy · G.L. Studios. All rights reserved.',
      'footer.note': 'Made with Unity & Blender. Screenshots and artwork \u00a9 Gernot Lepschy.',
      'footer.demo': 'Free demo'
    },

    de: {
      'meta.title': 'Project CORE — Sci-fi-Action-Abenteuer von Gernot Lepschy',
      'meta.description': 'Project CORE ist ein unabhängig entwickeltes Sci-fi-Action-Abenteuer aus dem Jahr 2053. Steuere futuristische Flugzeuge, stelle dich den mysteriösen Enemys und lüfte das Geheimnis hinter C.O.R.E. Erschienen am 10. März 2023 für Windows-PC, erhältlich im Microsoft Store und auf itch.io.',

      'a11y.skip': 'Zum Inhalt springen',

      'nav.trailers': 'Trailer',
      'nav.features': 'Features',
      'nav.story': 'Story',
      'nav.gallery': 'Galerie',
      'nav.get': 'Kaufen',
      'nav.posters': 'Poster',
      'nav.about': 'Über',

      'hero.kicker': 'Sci-fi-Action-Abenteuer · Windows-PC',
      'hero.tagline': 'Du bist die letzte Hoffnung der Menschheit. Steuere futuristische Flugzeuge, stelle dich den mysteriösen \u201eEnemys\u201c und lüfte das Geheimnis hinter dem Vorfall, der die Welt beinahe zerstört hätte.',
      'hero.ctaTrailer': 'Trailer ansehen',
      'hero.ctaStore': 'Microsoft Store',
      'hero.ctaItch': 'itch.io',
      'hero.demoLink': 'Kostenlose Browser-Demo auf Unity Play spielen',
      'hero.chip2': 'Windows-PC',
      'hero.chipRelease': 'Erschienen am 10. März 2023',
      'hero.chip3': 'Unity + Blender',
      'hero.chip4': 'Action · Abenteuer · RPG',

      'trailers.kicker': 'Ansehen',
      'trailers.title': 'Trailer & Film',
      'trailers.lead': 'Der Version-2.0-Trailer, der Trailer zur Type-X-Expansion und der cineastische Kurzfilm.',
      'trailers.v1title': 'Version-2.0-Trailer',
      'trailers.v1desc': 'Der offizielle Trailer zum Version-2.0-Update.',
      'trailers.v1alt': 'Project CORE: Version-2.0-Trailer',
      'trailers.v2title': 'Type X: Expansion-Trailer',
      'trailers.v2desc': 'Ein Blick auf die Type-X-Expansion, enthalten in der itch.io-Version.',
      'trailers.v2alt': 'Project CORE: Type X — Expansion-Trailer',
      'trailers.v3title': 'Another Mission: Kurzfilm',
      'trailers.v3desc': 'Ein cineastischer Kurzfilm aus der Welt von Project CORE.',
      'trailers.v3alt': 'Project CORE: Another Mission — Kurzfilm',
      'trailers.note': 'Die Videos werden von YouTube gestreamt. Ein Klick auf die Vorschau lädt den Player.',
      'trailers.playPrefix': 'Abspielen',

      'features.kicker': 'Gameplay',
      'features.title': 'Features',
      'features.lead': 'Ein unabhängig entwickeltes Passion-Projekt, gebaut von einem Entwickler und inszeniert wie ein großes Sci-fi-Abenteuer.',
      'features.f1title': 'Rasantes 3D-Kampfsystem',
      'features.f1desc': 'Kämpfe dich in flotten Action-Gefechten durch die Missionen — zu Fuß und in der Luft.',
      'features.f2title': 'Futuristische Flugzeuge steuern',
      'features.f2desc': 'Übernimm das Steuer hochentwickelter Maschinen und verteidige die Erde gegen die mysteriösen Enemys.',
      'features.f3title': 'Eine Geschichte, die sich lohnt',
      'features.f3desc': 'Finde heraus, was es mit dem Vorfall vor 20 Jahren auf sich hat, der die Menschheit fast vernichtet hätte.',
      'features.f4title': 'Eine Welt in Gefahr',
      'features.f4desc': 'Deine Missionen führen dich in Mega-Cities, aufs offene Meer, in verlassene Militärbasen und bis in den Orbit.',
      'features.f5title': 'Mehrere Enden',
      'features.f5desc': 'Die Geschichte rund um C.O.R.E. kann auf mehr als eine Weise enden.',
      'features.f6title': 'Komplette Inhalte',
      'features.f6desc': 'Die itch.io-Version enthält die Type-X-Expansion, mit zusätzlicher Story und neuen Leveln ohne Aufpreis.',

      'story.kicker': 'Das Jahr 2053',
      'story.title': 'Die letzte Hoffnung der Menschheit',
      'story.p1': 'Vor zwanzig Jahren brachte ein Vorfall die Menschheit an den Rand der Auslöschung. Noch heute ist die Wahrheit verschüttet, und die mysteriösen Enemys sind zurück.',
      'story.p2': 'Als Pilot der zwielichtigen Organisation C.O.R.E. bist du die letzte Verteidigungslinie der Welt. Kämpfe gegen alle Widerstände, finde heraus, was damals wirklich geschah, und verhindere eine zweite Katastrophe.',
      'story.p3': 'Kein Ort und keine Zeit ist sicher: von den Neon-Mega-Cities über das offene Meer und verlassene Militärbasen bis hinaus über die Atmosphäre.',
      'story.missionTitle': 'Deine Mission',
      'story.m1': 'Verteidige die Erde gegen die Enemys',
      'story.m2': 'Lüfte den Vorfall vor 20 Jahren',
      'story.m3': 'Überlebe Kämpfe zu Land, zu Wasser, in der Luft und im All',
      'story.alt': 'Project CORE — die Crew in einem rot beleuchteten Hangar',
      'story.status1': 'Jahr',
      'story.status2': 'Organisation',

      'gallery.kicker': 'Screenshots',
      'gallery.title': 'Aus dem Spiel',
      'gallery.lead': 'Direkte Aufnahmen aus Project CORE. Klicke auf ein Bild, um es groß anzusehen.',
      'gallery.alt1': 'Dialogszene mit einem Crewmitglied am Automaten',
      'gallery.alt2': 'Unterhaltung in einem dunklen Innenraum bei Nacht',
      'gallery.alt3': 'Rot beleuchteter Korridor in einer C.O.R.E.-Basis',
      'gallery.alt4': 'Die Crew in einer Lounge mit Live-Auftritt',
      'gallery.alt5': 'Nachtsicht-Kampf während einer Weltraummission',
      'gallery.alt6': 'Flug über eine Neon-Mega-City bei Nacht',
      'gallery.alt7': 'Flug über verschneite Berge mit aktivem HUD',

      'get.kicker': 'Jetzt erhältlich',
      'get.title': 'Hol dir das Spiel',
      'get.lead': 'Project CORE ist am 10. März 2023 für Windows-PC erschienen. Teste auch die kostenlose Demo direkt im Browser.',
      'get.msDesc': 'Project CORE für Windows-PC.',
      'get.msBtn': 'Microsoft Store öffnen',
      'get.itchTag': 'Enthält Type-X-Expansion',
      'get.itchDesc': 'Enthält die Type-X-Expansion mit zusätzlicher Story und neuen Leveln.',
      'get.itchBtn': 'itch.io öffnen',
      'get.demoTitle': 'Gratis-Demo',
      'get.demoDesc': 'Eine kurze Online-Demo, direkt im Browser spielbar. Die Vollversion bietet mehr Inhalte, bessere Grafik und einen cineastischen Story-Modus.',
      'get.demoBtn': 'Auf Unity Play spielen',

      'posters.kicker': 'Artwork',
      'posters.title': 'Promo-Poster',
      'posters.lead': 'Offizielle Key-Visuals aus dem Microsoft Store und den Releases. Klicke zum Vergrößern.',
      'posters.alt1': 'Project-CORE-Key-Visual mit dem Microsoft-Store-Release-Datum',
      'posters.alt2': 'Die Crew gemeinsam in einer rot beleuchteten Halle',
      'posters.alt3': 'Promo-Poster: die C.O.R.E.-Crew in einer Lounge',
      'posters.alt4': 'Promo-Poster: die Crew nachts auf einem Feld',
      'posters.alt5': 'Promo-Poster: die Crew auf einem Hügel unter Sternen',
      'posters.alt6': 'Microsoft-Store-Poster mit QR-Code und Altersfreigabe',

      'about.kicker': 'Der Entwickler',
      'about.title': 'Über Gernot Lepschy',
      'about.p1': 'Project CORE ist ein unabhängig entwickeltes Passion-Projekt vom Programmierer, Level-Designer und Autor Gernot Lepschy. Entwickelt mit Unity und Blender, soll es erfahrenen Spielern und Neueinsteigern gleichermaßen ein frisches Erlebnis bieten.',
      'about.p2': 'Von Level-Design und Programmierung bis hin zu Story und Grafik: Project CORE entsteht aus einer Hand, unter dem Namen G.L. Studios.',
      'about.portfolioBtn': 'Zu meinem Portfolio',
      'about.ytBtn': 'YouTube-Kanal',
      'about.alt': 'Project CORE — Key Art',

      'contact.kicker': 'Kontakt',
      'contact.title': 'Melde dich',
      'contact.lead': 'Fragen zu Project CORE, Feedback oder Presseanfragen? Schreib einfach.',
      'contact.portfolio': 'Portfolio',

      'footer.copy': '\u00a9 {year} Gernot Lepschy · G.L. Studios. Alle Rechte vorbehalten.',
      'footer.note': 'Entwickelt mit Unity & Blender. Screenshots und Artwork \u00a9 Gernot Lepschy.',
      'footer.demo': 'Gratis-Demo'
    }
  };

  var DEFAULT_LANG = 'en';
  var STORAGE_KEY = 'projectcore.lang';

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function storeLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function detectLang() {
    var stored = getStoredLang();
    if (stored && I18N[stored]) return stored;
    var nav = (navigator.language || '').toLowerCase();
    return nav.indexOf('de') === 0 ? 'de' : DEFAULT_LANG;
  }

  function translate(dict, key) {
    var value = dict[key] != null ? dict[key] : I18N.en[key];
    if (value == null) return null;
    return String(value).replace('{year}', String(new Date().getFullYear()));
  }

  function applyLanguage(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;

    var title = translate(dict, 'meta.title');
    if (title) document.title = title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      var desc = translate(dict, 'meta.description');
      if (desc) metaDesc.setAttribute('content', desc);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var text = translate(dict, el.getAttribute('data-i18n'));
      if (text != null) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var html = translate(dict, el.getAttribute('data-i18n-html'));
      if (html != null) el.innerHTML = html;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        var attr = parts[0] && parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (!attr || !key) return;
        var value = translate(dict, key);
        if (value != null) el.setAttribute(attr, value);
      });
    });

    // Play-button labels for the video facades
    var playPrefix = translate(dict, 'trailers.playPrefix') || 'Play';
    document.querySelectorAll('.video-facade').forEach(function (facade) {
      var titleAttr = facade.getAttribute('data-title') || '';
      facade.setAttribute('aria-label', playPrefix + ': ' + titleAttr);
    });

    // Also translate the lightbox close/prev/next buttons
    var lb = document.getElementById('lightbox');
    if (lb) {
      var labels = {
        'lightbox-close': { en: 'Close', de: 'Schließen' },
        'lightbox-prev': { en: 'Previous image', de: 'Vorheriges Bild' },
        'lightbox-next': { en: 'Next image', de: 'Nächstes Bild' }
      };
      Object.keys(labels).forEach(function (cls) {
        var btn = lb.querySelector('.' + cls);
        if (btn) btn.setAttribute('aria-label', labels[cls][lang] || labels[cls].en);
      });
    }

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    storeLang(lang);
  }

  /* ------------------------------------------------------------------ */
  /* Header, navigation, back-to-top                                     */
  /* ------------------------------------------------------------------ */
  var header = document.getElementById('site-header');
  var navToggle = document.getElementById('nav-toggle');
  var backToTop = document.getElementById('back-to-top');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 30);
    if (backToTop) backToTop.classList.toggle('show', y > 640);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function closeNav() {
    if (document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  document.querySelectorAll('.site-nav a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal + active nav highlighting                             */
  /* ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });

    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a'));
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(function (section) {
      navObserver.observe(section);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ------------------------------------------------------------------ */
  /* YouTube click-to-play facades                                       */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll('.video-facade').forEach(function (facade) {
    function play() {
      if (facade.getAttribute('data-loaded') === '1') return;
      var id = facade.getAttribute('data-video');
      if (!id) return;
      facade.setAttribute('data-loaded', '1');
      facade.classList.add('playing');
      facade.removeAttribute('role');
      facade.removeAttribute('tabindex');

      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0');
      iframe.setAttribute('title', facade.getAttribute('data-title') || 'YouTube video');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');

      facade.textContent = '';
      facade.appendChild(iframe);
    }

    facade.addEventListener('click', play);
    facade.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        play();
      }
    });
  });

  /* ------------------------------------------------------------------ */
  /* Lightbox                                                            */
  /* ------------------------------------------------------------------ */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('figcaption');
    var lbClose = lightbox.querySelector('.lightbox-close');
    var lbPrev = lightbox.querySelector('.lightbox-prev');
    var lbNext = lightbox.querySelector('.lightbox-next');
    var items = [];
    var currentIndex = 0;
    var lastFocused = null;

    function collectItems() {
      items = Array.prototype.slice.call(document.querySelectorAll('.lightbox-item'));
    }

    function currentImage(item) {
      return item ? item.querySelector('img') : null;
    }

    function show(index) {
      if (!items.length) return;
      currentIndex = (index + items.length) % items.length;
      var item = items[currentIndex];
      var img = currentImage(item);
      if (!img) return;
      lbImg.setAttribute('src', img.currentSrc || img.src);
      lbImg.setAttribute('alt', img.alt || '');
      lbCaption.textContent = img.alt || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    }

    collectItems();

    document.addEventListener('click', function (event) {
      var item = event.target.closest ? event.target.closest('.lightbox-item') : null;
      if (!item) return;
      lastFocused = document.activeElement;
      collectItems();
      show(items.indexOf(item));
    });

    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', function () { show(currentIndex - 1); });
    lbNext.addEventListener('click', function () { show(currentIndex + 1); });

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) close();
    });

    document.addEventListener('keydown', function (event) {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowLeft') show(currentIndex - 1);
      else if (event.key === 'ArrowRight') show(currentIndex + 1);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Language switching + init                                           */
  /* ------------------------------------------------------------------ */
  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeNav();
  });

  applyLanguage(detectLang());
})();
