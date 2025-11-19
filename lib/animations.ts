import { gsap } from 'gsap'

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

