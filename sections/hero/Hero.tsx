export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-20 flex items-center justify-center px-4">
      <div className="text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight max-w-5xl">
          Power Your Future with Solar Energy
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Reliable rooftop solar solutions for homes and businesses across Himachal Pradesh.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="cursor-pointer bg-green-700 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium">
            Get Free Consultation
          </button>

          <button className="cursor-pointer border border-black px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium">
            View Projects
          </button>
        </div>

      </div>
    </section>
  );
}