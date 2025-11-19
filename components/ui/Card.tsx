import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = false }, ref) => {
    const baseStyles = 'bg-white rounded-xl p-6 shadow-sm border border-gray-100'
    const hoverStyles = hover ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary-pink/20' : ''
    
    return (
      <div ref={ref} className={`${baseStyles} ${hoverStyles} ${className}`}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

