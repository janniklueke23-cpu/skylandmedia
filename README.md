# Skylands Media - Premium Drohnenfotografie

Eine moderne React/Next.js Website für Skylands Media, eine Premium Drohnenfotografie Agentur in Würzburg.

## Projektstruktur

Dieses Projekt verwendet die shadcn/ui Komponentenbibliothek mit folgenden Technologien:

- **Next.js 14** - React Framework mit App Router
- **TypeScript** - Typsicherheit
- **Tailwind CSS** - Utility-First CSS Framework
- **shadcn/ui** - Moderne UI-Komponenten
- **Lucide React** - Icon-Bibliothek

## Installation

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Entwicklungsserver starten:
```bash
npm run dev
```

3. Browser öffnen: [http://localhost:3000](http://localhost:3000)

## Komponenten

### Creative Pricing Komponente

Die Hauptkomponente befindet sich in `/components/ui/creative-pricing.tsx` und bietet:

- **Kreative Handgeschriebene Typografie** mit leichten Rotationen
- **Interaktive Hover-Effekte** mit Schatten und Transformationen
- **Responsive Design** für alle Bildschirmgrößen
- **Drei Preisstufen** mit unterschiedlichen Features
- **Beliebte Markierung** für empfohlene Pläne

### Preisstufen

1. **Basic (€299/Monat)** - Perfekt für kleine Projekte
2. **Professional (€799/Monat)** - Für professionelle Anforderungen
3. **Enterprise (€1.499/Monat)** - Für große Unternehmen

## Anpassung

### Farben und Styling

Die Komponente verwendet Tailwind CSS Klassen. Farben können in `tailwind.config.js` angepasst werden.

### Preisdaten

Die Preisdaten sind in `/components/demo.tsx` definiert und können leicht angepasst werden:

```typescript
const sampleTiers: PricingTier[] = [
  {
    name: "Ihr Plan",
    price: 999,
    description: "Beschreibung",
    features: ["Feature 1", "Feature 2"],
    popular: true,
    color: "blue"
  }
];
```

## Build

Für die Produktion:

```bash
npm run build
npm start
```

## Lizenz

© 2024 Skylands Media. Alle Rechte vorbehalten.
