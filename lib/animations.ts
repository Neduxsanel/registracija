import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeInUp = (element: string | HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
    }
  )
}

export const staggerFadeInUp = (
  elements: string | HTMLElement[],
  staggerDelay = 0.15
) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: 'power3.out',
    }
  )
}

export const fadeIn = (element: string | HTMLElement, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power2.out',
    }
  )
}

export const setupScrollAnimation = (
  trigger: string | HTMLElement,
  target: string | HTMLElement,
  animation: (element: string | HTMLElement) => void
) => {
  const ctx = gsap.context(() => {
    const anim = animation(target)
    
    ScrollTrigger.create({
      trigger,
      start: 'top 80%',
      animation: anim,
      toggleActions: 'play none none none',
    })
  })

  return ctx
}

export const setupStaggerScrollAnimation = (
  trigger: string | HTMLElement,
  targets: string | HTMLElement[],
  staggerDelay = 0.15
) => {
  const ctx = gsap.context(() => {
    const anim = staggerFadeInUp(targets, staggerDelay)
    
    ScrollTrigger.create({
      trigger,
      start: 'top 80%',
      animation: anim,
      toggleActions: 'play none none none',
    })
  })

  return ctx
}

