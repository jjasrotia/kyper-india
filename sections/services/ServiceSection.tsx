import React from 'react'
import ServiceCard from '@/components/cards/ServiceCard'
import { services } from '@/data/services'
import Container from '@/components/common/Container'
export default function ServiceSection() {
    return (
        <section className='py-10'>
            <Container>
                <div className="text-center">
                    <h2 className='text-3xl md:text-5xl font-bold'>
                        Our Solar Services
                    </h2>
                    <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
                        Smart and sustainable solar solutions tailored for homes and businesses.
                    </p>
                </div>
                {/* Cards */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service)=>(
                        <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        />
                    ))}
                </div>
            </Container>

        </section>
    )
}
