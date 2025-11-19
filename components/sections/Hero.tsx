'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/Button'
import PixelBlast from '@/components/ui/PixelBlast'

export const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline fade + slide up
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
      )

      // Subheadline stagger in
      if (subheadlineRef.current) {
        const words = subheadlineRef.current.textContent?.split(' ') || []
        subheadlineRef.current.innerHTML = words
          .map((word) => `<span class="inline-block">${word}</span>`)
          .join(' ')

        gsap.fromTo(
          subheadlineRef.current.querySelectorAll('span'),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out',
            delay: 0.8,
          }
        )
      }

      // Buttons fade-in
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.4 }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* PixelBlast background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#f0386e"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.3}
          enableRipples={false}
          liquid={false}
          speed={0.4}
          edgeFade={0}
          transparent
          antialias={false}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-6 py-20 text-center">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Agencija za registracije i
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-pink to-primary-pink-accent">
            regulatorne usluge
          </span>
        </h1>

        <p
          ref={subheadlineRef}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Regulatorne usluge i registracija proizvoda – Vaš pouzdan partner za tržište BiH
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#contact" variant="primary">
            Kontaktirajte nas
          </Button>
          <Button href="#services" variant="outline">
            Naše usluge
          </Button>
        </div>
      </div>
    </section>
  )
}

