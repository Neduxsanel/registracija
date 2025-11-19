'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const serviceOptions = [
  { value: '', label: 'Odaberite uslugu' },
  { value: 'lijekovi', label: 'Registracija lijekova' },
  { value: 'medicinska-sredstva', label: 'Registracija medicinskih sredstava' },
  { value: 'dodaci-prehrani', label: 'Registracija dodataka prehrani' },
  { value: 'kozmetika', label: 'Registracija kozmetike' },
  { value: 'biocidi', label: 'Registracija biocida' },
]

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    phone: '',
    address: '',
    company: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        infoRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Ime je obavezno'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Prezime je obavezno'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email je obavezan'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nevažeći email format'
    }
    if (!formData.service) {
      newErrors.service = 'Molimo odaberite uslugu'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      alert('Hvala vam! Vaš upit je poslan. Kontaktiraćemo vas uskoro.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        phone: '',
        address: '',
        company: '',
        message: '',
      })
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
          Kontaktirajte nas
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-pink to-primary-pink-accent mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Ime"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  required
                />
                <Input
                  label="Prezime"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  required
                />
              </div>

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <Select
                label="Usluga"
                name="service"
                value={formData.service}
                onChange={handleChange}
                options={serviceOptions}
                error={errors.service}
                required
              />

              <Input
                label="Broj telefona"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />

              <Input
                label="Adresa"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

              <Input
                label="Naziv kompanije"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />

              <Textarea
                label="Poruka"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />

              <Button type="submit" variant="primary" className="w-full">
                Pošalji upit
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef}>
            <Card className="h-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Kontakt informacije
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:regulatoryaffairsbih@gmail.com"
                    className="text-gray-700 hover:text-primary-pink transition-colors"
                  >
                    regulatoryaffairsbih@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Telefon
                  </h4>
                  <a
                    href="tel:+38762205950"
                    className="text-gray-700 hover:text-primary-pink transition-colors"
                  >
                    +387 62 205 950
                  </a>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Adresa
                  </h4>
                  <p className="text-gray-700">
                    Halilovići 10, 71000 Sarajevo
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed">
                  Naš tim je spreman da odgovori na vaša pitanja i pomogne vam sa svim aspektima regulatornih usluga.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

