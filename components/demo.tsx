import { CreativePricing } from "@/components/ui/creative-pricing"
import type { PricingTier } from "@/components/ui/creative-pricing"
import { Check, Pencil, Star, Sparkles } from "lucide-react";

const sampleTiers: PricingTier[] = [
    {
        name: "Basic",
        icon: <Pencil className="w-6 h-6" />,
        price: 299,
        description: "Perfekt für kleine Projekte",
        color: "amber",
        features: [
            "2 Stunden Flugzeit",
            "10 bearbeitete Fotos",
            "Grundlegende Nachbearbeitung",
            "Lieferung in 48 Stunden",
        ],
    },
    {
        name: "Professional",
        icon: <Star className="w-6 h-6" />,
        price: 799,
        description: "Für professionelle Anforderungen",
        color: "blue",
        features: [
            "6 Stunden Flugzeit",
            "50 bearbeitete Fotos",
            "4K Videoaufnahmen",
            "Erweiterte Nachbearbeitung",
            "Lieferung in 24 Stunden",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        icon: <Sparkles className="w-6 h-6" />,
        price: 1499,
        description: "Für große Unternehmen",
        color: "purple",
        features: [
            "Unbegrenzte Flugzeit",
            "Unbegrenzte Fotos",
            "8K Videoaufnahmen",
            "Premium Nachbearbeitung",
            "Express-Lieferung",
            "Kommerzielle Lizenz",
        ],
    },
];

function CreativePricingDemo() {
    return <CreativePricing tiers={sampleTiers} />
}

export { CreativePricingDemo }
