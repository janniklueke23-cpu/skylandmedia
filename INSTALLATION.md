# Skylands Media - Installation & Setup

## 🚀 Schnellstart

### 1. Abhängigkeiten installieren
```bash
npm install
```

### 2. Entwicklungsserver starten
```bash
npm run dev
```

### 3. Browser öffnen
Besuchen Sie [http://localhost:3000](http://localhost:3000)

---

## 📋 Voraussetzungen

- **Node.js** 18.0 oder höher
- **npm** oder **yarn** Paketmanager
- **Git** für Versionskontrolle

---

## 🛠️ Technologien & Frameworks

### Core Technologies
- **Next.js 14** - React Framework mit App Router
- **TypeScript** - Typsicherheit
- **Tailwind CSS** - Utility-First CSS Framework
- **shadcn/ui** - Moderne UI-Komponenten

### Dependencies
- **React 18** - UI Library
- **Lucide React** - Icon Library
- **Class Variance Authority** - Variant Management
- **Radix UI** - Low-Level UI Components

---

## 📁 Projektstruktur

```
windsurf-project/
├── app/                    # Next.js App Router
│   ├── globals.css         # Globale Styles
│   ├── layout.tsx          # Root Layout
│   └── page.tsx           # Hauptseite
├── components/            # React Komponenten
│   ├── ui/               # shadcn/ui Komponenten
│   │   ├── button.tsx
│   │   └── creative-pricing.tsx
│   ├── Navigation.tsx     # Navigation
│   ├── Portfolio.tsx      # Portfolio Sektion
│   ├── About.tsx          # Über uns Sektion
│   ├── ContactForm.tsx    # Kontaktformular
│   └── demo.tsx          # Pricing Demo
├── lib/                  # Utility Funktionen
│   └── utils.ts          # Helper Funktionen
├── public/               # Statische Dateien
│   ├── robots.txt         # SEO
│   └── site.webmanifest   # PWA Manifest
└── styles.css            # Legacy Styles (optional)
```

---

## 🎨 Features

### ✅ Implementierte Features

1. **Professionelle Navigation**
   - Sticky Header mit Blur-Effekt
   - Mobile Responsive Menu
   - Smooth Scrolling
   - Kontakt-Button

2. **Hero Section**
   - Premium Branding
   - Call-to-Action Buttons
   - Dekorative Elemente
   - Responsive Design

3. **Portfolio Sektion**
   - 6 Beispielprojekte
   - Kategorie-Filter
   - Modal für Projekt-Details
   - Hover-Effekte

4. **Über uns Sektion**
   - Team-Mitglieder
   - Unternehmens-Statistiken
   - Zertifizierungen
   - Unternehmensgeschichte

5. **Creative Pricing**
   - 3 Preisstufen
   - Handgeschriebene Typografie
   - Interaktive Hover-Effekte
   - Responsive Grid

6. **Kontaktformular**
   - Vollständige Validierung
   - Loading States
   - Success-Meldungen
   - Kontakt-Informationen

7. **SEO Optimierung**
   - Meta-Tags
   - Open Graph
   - Twitter Cards
   - Robots.txt
   - Sitemap-ready

---

## 🔧 Konfiguration

### Environment Variablen
Erstellen Sie `.env.local` für lokale Konfiguration:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=info@skylandsmedia.de
NEXT_PUBLIC_CONTACT_PHONE=+491234567890
```

### Tailwind CSS
Konfiguration in `tailwind.config.js`:
- Custom Farben
- Font Family
- Animationen
- Responsive Breakpoints

---

## 📱 Responsive Design

Die Website ist optimiert für:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

---

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

### Eigenen Server
```bash
npm run build
npm start
```

---

## 🎯 Nächste Schritte

### Für den Produktiveinsatz:

1. **Domain konfigurieren**
   - DNS-Einstellungen anpassen
   - SSL-Zertifikat einrichten

2. **Analytics einbinden**
   - Google Analytics
   - Hotjar oder ähnliches

3. **Performance optimieren**
   - Bilder komprimieren
   - CDN einrichten

4. **CMS anbinden** (optional)
   - Sanity.io
   - Strapi
   - Contentful

---

## 🐛 Troubleshooting

### Häufige Probleme

**TypeScript Fehler nach Installation:**
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

**Tailwind Styles nicht geladen:**
```bash
npm install tailwindcss-animate
```

**Build fehlschlägt:**
```bash
rm -rf .next
npm run build
```

---

## 📞 Support

Bei Fragen oder Problemen:
- **E-Mail**: info@skylandsmedia.de
- **Telefon**: +49 123 456 7890
- **Website**: https://skylandsmedia.de

---

## 📄 Lizenz

© 2024 Skylands Media. Alle Rechte vorbehalten.
