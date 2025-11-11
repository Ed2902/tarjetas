import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CardList({ cards }) {
  return (
    <div className='p-4 grid grid-cols-1 gap-6 max-w-md mx-auto'>
      {cards.map((c, i) => (
        <motion.div
          key={c.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.28 }}
        >
          <Link to={`/cards/${c.slug}`} className='block'>
            <div className='rounded-[var(--gw-radius)] shadow-gw bg-white overflow-hidden'>
              <div className='h-28 bg-gw-brand-90'></div>
              <div className='p-4'>
                <h3 className='text-lg font-semibold'>{c.person.name}</h3>
                <p className='text-sm text-slate-600'>
                  {c.person.title} · {c.person.company}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
