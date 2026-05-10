import Container from "@/components/common/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <Container>

        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Trusted by homeowners and businesses across Himachal Pradesh.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              review={testimonial.review}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}