'use client'
import React from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
const page = () => {
  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const handleActive = (index) => {
    setActive(index)
  }
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='grid grid-cols-4 grid-rows-1 justify-center items-center  h-vh w-full overflow-y-hidden'>
      <motion.div
        onClick={() => handleActive(1)}
        className={`space-y-10 justify-center flex flex-col p-20 h-screen ${active === 1 ? 'bg-orange-400' : 'bg-white'
          }`}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        animate={{
          backgroundColor: active === 1 ? '#fb923c' : '#ffffff'
        }}
        layout
      >

        <AnimatePresence mode="wait">
          {active === 1 && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <Image src="/img/orange.png" alt="Orange" width={150} height={100} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.span 
            className={`text-6xl font-bold ${active === 1 ? 'text-white' : 'text-[#F19300]'
            }`}
            animate={{
              color: active === 1 ? '#ffffff' : '#F19300'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            01
          </motion.span>
          <motion.div 
            className={`my-10 ${active === 1 ? 'text-white' : 'text-black'
            }`}
            animate={{
              color: active === 1 ? '#ffffff' : '#000000'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h1>Orange Juice</h1>
            <p>Delicious and refreshing</p>
          </motion.div>
          <ViewButton active={active}/>
        </motion.div>

      </motion.div>
      <motion.div
        onClick={() => handleActive(2)}
        className={`space-y-10 justify-center flex flex-col p-20 h-screen ${active === 2 ? 'bg-[#530D25]' : 'bg-white'
          }`}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        animate={{
          backgroundColor: active === 2 ? '#530D25' : '#ffffff'
        }}
        layout
      >

        <AnimatePresence mode="wait">
          {active === 2 && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <Image src="/img/berry.png" alt="Berry" width={150} height={100} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.span 
            className={`text-6xl font-bold ${active === 2 ? 'text-white' : 'text-[#530D25]'
            }`}
            animate={{
              color: active === 2 ? '#ffffff' : '#530D25'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            02
          </motion.span>
          <motion.div 
            className={`my-10 ${active === 2 ? 'text-white' : 'text-black'
            }`}
            animate={{
              color: active === 2 ? '#ffffff' : '#000000'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h1>Berry Juice</h1>
            <p>Delicious and refreshing</p>
          </motion.div>
          <ViewButton active={active}/>
        </motion.div>

      </motion.div>
      <motion.div
        onClick={() => handleActive(3)}
        className={`space-y-10 justify-center flex flex-col p-20 h-screen ${active === 3 ? 'bg-orange-400' : 'bg-white'
          }`}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        animate={{
          backgroundColor: active === 3 ? '#5F8613' : '#ffffff'
        }}
        layout
      >

        <AnimatePresence mode="wait">
          {active === 3 && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <Image src="/img/gruva.png" alt="gruva" width={150} height={100} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.span 
            className={`text-6xl font-bold ${active === 3 ? 'text-white' : 'text-[#5F8613]'
            }`}
            animate={{
              color: active === 3 ? '#ffffff' : '#5F8613'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            03
          </motion.span>
          <motion.div 
            className={`my-10 ${active === 3 ? 'text-white' : 'text-black'
            }`}
            animate={{
              color: active === 3 ? '#ffffff' : '#000000'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h1>Guava Juice</h1>
            <p>Delicious and refreshing</p>
          </motion.div>
          <ViewButton active={active}/>
        </motion.div>

      </motion.div>
      <motion.div
        onClick={() => handleActive(4)}
        className={`space-y-10 justify-center flex flex-col p-20 h-screen ${active === 4 ? 'bg-[#AD191B]' : 'bg-white'
          }`}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
        animate={{
          backgroundColor: active === 4 ? '#AD191B' : '#ffffff'
        }}
        layout
      >

        <AnimatePresence mode="wait">
          {active === 4 && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <Image src="/img/straberry.png" alt="sraberry" width={150} height={100} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          layout
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.span 
            className={`text-6xl font-bold ${active === 4 ? 'text-[#AD191B]' : 'text-white'
            }`}
            animate={{
              color: active === 4 ? '#ffffff' : '#AD191B'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            04
          </motion.span>
          <motion.div 
            className={`my-10 ${active === 4 ? 'text-white' : 'text-black'
            }`}
            animate={{
              color: active === 4 ? '#ffffff' : '#000000'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h1>Orange Juice</h1>
            <p>Delicious and refreshing</p>
          </motion.div>
          <ViewButton active={active}/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default page



const ViewButton = ({active}) => {
  return (
    <>
      <motion.button
        className={`flex items-center gap-2 border-2 w-fit border-black rounded-full px-4 py-2 ${active === 1 || active === 2 || active === 3 || active === 4 ? 'text-white border-white' : 'text-black border-black'
          }`}
        whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        View more <ArrowRightIcon className='w-4 h-4' />
      </motion.button>
    </>
  )
}