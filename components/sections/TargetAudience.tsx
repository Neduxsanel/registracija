'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Card } from '@/components/ui/Card'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const audiences = [
  {
    title: 'Proizvođači i distributeri',
    description:
      'Lijekovi, medicinska sredstva, kozmetika, dodaci prehrani i biocidi – registrujte svoje proizvode brzo i sigurno.',
  },
  {
    title: 'MSP bez regulatornog tima',
    description:
      'Nudimo kompletno rješenje za firme koje nemaju vlastiti tim – štedite vrijeme i izbjegnite greške u prijavama.',
  },
  {
    title: 'Internacionalne kompanije',
    description:
      'Pouzdan lokalni partner za plasman vaših proizvoda na tržište BiH kroz licenciranog zastupnika.',
  },
]

export const TargetAudience = () => {
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
          Kome su namijenjene naše usluge?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-accent mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              hover
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

