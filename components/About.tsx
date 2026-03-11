'use client'

import { Award, Users, Camera, MapPin, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollTo } from '@/hooks/useScrollTo'

const teamMembers = [
  {
    name: "Maximilian Schmidt",
    role: "CEO & Hauptpilot",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Über 10 Jahre Erfahrung in professioneller Drohnenfotografie und zertifizierter Luftfahrzeugpilot."
  },
  {
    name: "Sarah Weber",
    role: "Kreative Leitung",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=400&h=400&fit=crop&crop=face",
    description: "Expertin für visuelle Storytelling und Post-Produktion mit Fokus auf Markenidentität."
  },
  {
    name: "Thomas Müller",
    role: "Technischer Leiter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "Spezialist für Drohnentechnik, Wartung und innovative Flugmanöver."
  },
  {
    name: "Lisa Wagner",
    role: "Kundenbetreuung",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    description: "Hauptansprechpartner für unsere Kunden mit Fokus auf Projektkoordination."
  }
]

const stats = [
  { value: "500+", label: "Abgeschlossene Projekte" },
  { value: "50+", label: "Fortune 500 Kunden" },
  { value: "8K", label: "Maximale Auflösung" },
  { value: "24h", label: "Schnelle Lieferung" }
]

const certifications = [
  { name: "EASA Drohnenpilot Lizenz", icon: <Award className="w-6 h-6" /> },
  { name: "Versicherungsschutz bis 10M€", icon: <CheckCircle className="w-6 h-6" /> },
  { name: "DSGVO Konformität", icon: <CheckCircle className="w-6 h-6" /> },
  { name: "ISO 9001 Zertifiziert", icon: <Award className="w-6 h-6" /> }
]

export default function About() {
  const { scrollToContact } = useScrollTo()
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Über Skylands Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind ein Team von leidenschaftlichen Fotografen und Technikern, die sich darauf spezialisiert haben, 
            die Welt aus einzigartigen Perspektiven zu zeigen.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unsere Geschichte</h3>
            <p className="text-gray-600 mb-4">
              Skylands Media wurde 2018 von einer Gruppe von Luftfahrt-Enthusiasten und Fotografen gegründet. 
              Was als kleines Projekt begann, entwickelte sich schnell zu einem führenden Anbieter für professionelle 
              Drohnenfotografie in Deutschland.
            </p>
            <p className="text-gray-600 mb-4">
              Heute arbeiten wir mit einigen der größten Unternehmen weltweit zusammen und liefern atemberaubende 
              Luftaufnahmen, die Marken und Projekte unvergesslich machen.
            </p>
            <p className="text-gray-600">
              Unsere Mission ist es, die Grenzen der visuellen Kommunikation zu erweitern und unseren Kunden 
              völlig neue Perspektiven auf ihre Welt zu ermöglichen.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&h=400&fit=crop"
              alt="Team bei der Arbeit"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <Camera className="w-8 h-8 mb-2" />
              <p className="font-semibold">Professionelle Ausrüstung</p>
              <p className="text-sm">State-of-the-art Drohnen</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Unsere Zertifizierungen & Qualitätsstandards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 text-center">
                <div className="text-blue-600">
                  {cert.icon}
                </div>
                <span className="text-gray-700 font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Treffen Sie unser Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Warum Kunden uns wählen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Camera className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Premium Qualität</h4>
              <p className="text-blue-100">
                8K Auflösung und professionelle Nachbearbeitung für brillante Ergebnisse
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Erfahrung</h4>
              <p className="text-blue-100">
                Über 500 erfolgreiche Projekte für führende Unternehmen weltweit
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold mb-2">Flexibilität</h4>
              <p className="text-blue-100">
                Wir arbeiten deutschlandweit und international nach Vereinbarung
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bereit mit uns zusammenzuarbeiten?
          </h3>
          <p className="text-gray-600 mb-8">
            Lassen Sie uns über Ihr nächstes Projekt sprechen und unvergessliche Bilder erstellen.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Projekt besprechen
          </Button>
        </div>
      </div>
    </section>
  )
}
