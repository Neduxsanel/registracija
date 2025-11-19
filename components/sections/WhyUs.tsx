'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Card } from '@/components/ui/Card'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const highlights = [
  'Višegodišnje iskustvo u oblasti regulative',
  'Poznavanje lokalnog tržišta i zakonodavnog okvira',
  'Profesionalan pristup i transparentna komunikacija',
  'Fleksibilnost u saradnji i konkurentne cijene',
]

export const WhyUs = () => {
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
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
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
          Zašto mi?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-accent mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              hover
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-pink-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{highlight}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

