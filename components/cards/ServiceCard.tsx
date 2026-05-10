import React from 'react'


interface ServiceCardProps{
    title:string,
    description:string
}
export default function ServiceCard({title,description}:ServiceCardProps) {
  return (
    <div className='rounder-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md'>
        <h3 className='text-xl font-semibold text-gray-900'>
            {title}
        </h3>
      <p className='mt-4 text-sm leading-relaxed text-ray-600'>{description}</p>
    </div>
  )
}
