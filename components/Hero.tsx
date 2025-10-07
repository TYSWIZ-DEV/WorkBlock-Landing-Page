'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const phoneRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])
  
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 })
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return
    
    const rect = phoneRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    
    mouseX.set(deltaX)
    mouseY.set(deltaY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section 
      className="min-h-screen hero-background relative overflow-hidden pt-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-6 text-balance leading-tight"
            >
              Make focus{' '}
              <span className="text-accent">simple.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-xl text-text-muted mb-8 max-w-lg mx-auto lg:mx-0 text-balance"
            >
              Tap start, block distractions, and build momentum.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-background px-8 py-4 rounded-xl font-semibold text-lg focus-ring hover:bg-accent/90 transition-colors duration-200"
              >
                Start your first win
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-text-muted/30 text-text-primary px-8 py-4 rounded-xl font-semibold text-lg focus-ring hover:bg-surface/50 transition-colors duration-200"
              >
                See how it works
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start text-sm text-text-muted space-x-2"
            >
              <span>Loved by focused students and solo builders</span>
              <span className="w-1 h-1 bg-text-muted rounded-full" />
              <span>No ads. Cancel anytime.</span>
            </motion.div>
          </div>

          {/* Right Column - Device Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Accent halo */}
              <div className="absolute inset-0 accent-halo scale-150 opacity-50" />
              
              {/* Phone mockup */}
              <motion.div
                ref={phoneRef}
                style={{
                  rotateX: springX,
                  rotateY: springY,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="phone-mockup relative w-64 h-[520px] rounded-[2.5rem] p-2 animate-float"
              >
                {/* Screen */}
                <div className="phone-screen w-full h-full rounded-[2rem] overflow-hidden relative">
                  {/* App screenshot placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Focus Session</h3>
                      <p className="text-sm opacity-80">25:00 remaining</p>
                    </div>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* App Store badges - Desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden lg:flex justify-center mt-12 space-x-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="focus-ring rounded-lg"
            aria-label="Download on the App Store"
          >
            <div className="w-32 h-10 bg-surface rounded-lg flex items-center justify-center border border-text-muted/20 hover:border-accent/50 transition-colors">
              <span className="text-xs text-text-muted">App Store</span>
            </div>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="focus-ring rounded-lg"
            aria-label="Download on TestFlight"
          >
            <div className="w-32 h-10 bg-surface rounded-lg flex items-center justify-center border border-text-muted/20 hover:border-accent/50 transition-colors">
              <span className="text-xs text-text-muted">TestFlight</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}


