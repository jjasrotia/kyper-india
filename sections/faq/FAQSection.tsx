import Container from "@/components/common/Container";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>

        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Answers to common questions about solar energy systems.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}