'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        shapeRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              O nama
            </h2>
            <p className="text-lg md:text-xl font-semibold text-primary-pink mb-6">
              Vaš pouzdan partner za regulatorne usluge
            </p>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mi smo tim farmaceutskih stručnjaka specijaliziran za regulatorne poslove i registraciju proizvoda. Naša misija je jasna: olakšati vam proces registracije i plasmana proizvoda na tržište BiH.
              </p>
              <p>
                Svaki klijent je drugačiji — zato nudimo individualna rješenja, prilagođena vama.
              </p>
              <p>
                Radimo brzo, transparentno i u skladu s najnovijim propisima.
              </p>
              <p>
                Bilo da ste startup ili globalna firma, BiH tržište počinje s nama.
              </p>
            </div>
          </div>

          <div ref={shapeRef} className="relative h-full min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/20 via-teal-blue/20 to-primary-pink/10 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-blue/20 via-primary-pink/20 to-teal-blue/10 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-gradient-to-br from-primary-pink/30 to-teal-blue/30 rounded-3xl w-full h-full flex items-center justify-center p-8">
              <div className="text-center text-white/80">
                <div className="text-6xl font-bold mb-4">10+</div>
                <div className="text-xl">Godina iskustva</div>
                <div className="text-xl mt-8">Regulatornih usluga</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

