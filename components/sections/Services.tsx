'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Registracija lijekova',
    description:
      'Priprema i podnošenje registracijske dokumentacije, koordinacija sa ALMBiH, praćenje procesa od podnošenja do izdavanja dozvole; post-registracijske aktivnosti.',
  },
  {
    title: 'Registracija medicinskih sredstava',
    description:
      'Klasifikacija proizvoda, prijava i upis u registar medicinskih sredstava pri ALMBiH.',
  },
  {
    title: 'Registracija dodataka prehrani',
    description:
      'Priprema dokumentacije za prijavu nadležnim zavodima za javno zdravstvo i Ministarstvu zdravlja FBiH i RS.',
  },
  {
    title: 'Registracija kozmetike',
    description:
      'Izrada PIF dosjea, notifikacija, usklađivanje s Pravilnicima u BiH.',
  },
  {
    title: 'Registracija biocida',
    description:
      'Kategorizacija, izrada tehničke dokumentacije, prijava Federalnoj upravi za inspekcijske poslove i entitetskim organima.',
  },
]

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
          Naše usluge
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-accent mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              hover
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                {service.description}
              </p>
              <Button
                href="#contact"
                variant="outline"
                className="mt-auto w-full"
              >
                Kontaktirajte nas
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

