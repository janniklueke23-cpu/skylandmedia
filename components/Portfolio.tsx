'use client'

import { useState } from 'react'
import { Eye, Play, Calendar, MapPin, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
  videoUrl?: string
  date: string
  location: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Moderne Bürogebäude Würzburg",
    category: "Architekturfotografie",
    description: "Atemberaubende Luftaufnahmen des neuen Bürokomplexes im Herzen von Würzburg. 8K-Auflösung mit goldenem Licht.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    date: "März 2024",
    location: "Würzburg",
    featured: true
  },
  {
    id: 2,
    title: "Luxus Hotel Komplex",
    category: "Immobilienfotografie",
    description: "Komplette Dokumentation eines 5-Sterne Hotels mit Pool- und Gartenanlagen aus der Vogelperspektive.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    videoUrl: "#",
    date: "Februar 2024",
    location: "Frankfurt",
    featured: true
  },
  {
    id: 3,
    title: "Industrieanlage Bayer",
    category: "Industriephotografie",
    description: "Professionelle Dokumentation der Produktionsanlagen für Unternehmenspräsentation und Sicherheitszertifizierung.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    date: "Januar 2024",
    location: "Leverkusen",
    featured: false
  },
  {
    id: 4,
    title: "Weingut Rheingau",
    category: "Landschaftsfotografie",
    description: "Herbstliche Weinstock-Reihen mit dem Rhein im Hintergrund. Perfekt für Marketingmaterial.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    date: "Oktober 2023",
    location: "Rheingau",
    featured: false
  },
  {
    id: 5,
    title: "Einkaufszentrum Main-Taunus",
    category: "Architekturfotografie",
    description: "Moderne Architektur mit einzigartigen Lichtverhältnissen während der goldenen Stunde.",
    imageUrl: "https://images.unsplash.com/photo-1547496502-affa60d7e4b4?w=800&h=600&fit=crop",
    date: "September 2023",
    location: "Bad Homburg",
    featured: false
  },
  {
    id: 6,
    title: "Windpark Nordsee",
    category: "Energiephotografie",
    description: "Impressionäre Aufnahmen von Windrädern bei Sonnenaufgang für Nachhaltigkeitsberichte.",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    videoUrl: "#",
    date: "August 2023",
    location: "Nordsee",
    featured: false
  }
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['Alle', 'Architekturfotografie', 'Immobilienfotografie', 'Industriephotografie', 'Landschaftsfotografie', 'Energiephotografie']
  
  const filteredProjects = selectedCategory === 'Alle' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Arbeiten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere beeindruckenden Luftaufnahmen und Videoproduktionen für führende Unternehmen in ganz Deutschland
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Ausgewählte Projekte</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="relative group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                      <p className="text-gray-200 mb-4">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {project.videoUrl && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-blue-600 text-white p-3 rounded-full">
                        <Play className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bereit für Ihr Projekt?
          </h3>
          <p className="text-gray-600 mb-8">
            Lassen Sie uns über Ihre Ideen sprechen und ein unvergessliches Projekt realisieren.
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Projekt besprechen
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                className="w-full h-auto rounded-t-lg"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <span className="text-sm text-blue-600 font-medium">{selectedProject.category}</span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8">
                <span className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{selectedProject.date}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedProject.location}</span>
                </span>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Ähnliches Projekt anfragen
                </Button>
                <Button variant="outline">
                  Weitere Projekte
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
