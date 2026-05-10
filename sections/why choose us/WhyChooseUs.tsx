import React from 'react'
import Container from '@/components/common/Container'
import { whyChooseUs } from '@/data/whyChooseUs'
import FeatureCard from '@/components/cards/FeatureCard'
export default function WhyChooseUs() {
    return (
        <section className='bg-gray-50 py-10'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-5xl font-bold'>Why Choose Us</h2>
                    <p className='mx-auto mt-4 max-w-2xl text-gray-600'>
                        We provide trusted and efficient solar energy solutions tailored to your needs.
                    </p>
                </div>
                <div className='mt-14 grid gap-6 sm-grid-cols-2 lg:grid-cols-3'>
                    {whyChooseUs.map((feature) => (
                        <FeatureCard key={feature.id}
                            title={feature.title}
                            description={feature.description} />
                    ))}
                </div>
            </Container>

        </section>
    )
}
