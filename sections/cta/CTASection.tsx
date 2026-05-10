import Container from "@/components/common/Container";

export default function CTASection() {
  return (
    <section className="py-20">
      <Container>

        <div className="rounded-3xl bg-green-700 px-6 py-16 text-center text-white md:px-12">
          
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Switch to Solar?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-100">
            Start saving on electricity bills with reliable solar solutions for your home or business.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <a
              href="https://wa.me/917018555172"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-gray-100"
            >
              Contact on WhatsApp
            </a>

            <button className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-700">
              Get Free Consultation
            </button>

          </div>

        </div>

      </Container>
    </section>
  );
}