'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Card } from '@/components/ui/Card'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: '1',
    title: 'Kontakt i analiza',
    description: 'Prvi korak je kontaktiranje našeg tima i analiza vaših potreba.',
  },
  {
    number: '2',
    title: 'Priprema dokumentacije',
    description: 'Prikupljamo i pripremamo svu potrebnu dokumentaciju prema važećim propisima.',
  },
  {
    number: '3',
    title: 'Podnošenje i praćenje',
    description: 'Podnosimo prijavu nadležnim institucijama i pratimo proces do rješenja.',
  },
  {
    number: '4',
    title: 'Odobrenje i podrška',
    description: 'Po dobijanju rješenja pružamo podršku za plasman proizvoda na tržište.',
  },
]

export const Process = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validSteps = stepsRef.current.filter((step): step is HTMLDivElement => step !== null)
      if (validSteps.length > 0) {
        gsap.fromTo(
          validSteps,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
          Naš proces
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-accent mx-auto mb-16"></div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-pink via-teal-blue to-primary-pink-accent"></div>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) {
                    stepsRef.current[index] = el
                  }
                }}
                className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-pink to-primary-pink-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Step content */}
                <Card hover className="flex-1 lg:ml-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

