import Container from "@/components/common/Container"
import StatsCard from "@/components/cards/StatsCard"
import { stats } from '@/data/stats'
export default function StatsSection() {
    return (
        <section className="py-10">
            <Container>
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Our Impact in Solar Energy
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Delivering trusted solar solutions with measurable results across Himachal Pradesh.
                    </p>
                </div>
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <StatsCard
                            key={stat.id}
                            number={stat.number}
                            label={stat.number}
                        />
                    ))}
                </div>
            </Container>

        </section>
    )
}
