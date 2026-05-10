import Link from "next/link";
import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 py-10 text-gray-300">
      <Container>

        <div className="grid gap-10 sm:grid-cols-2 text-center justify-center md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Kyper India
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Trusted solar energy solutions for homes and businesses across Himachal Pradesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-2 cursor-pointer flex flex-col gap-1 text-sm">
              <Link href="#home">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#projects">Projects</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>

            <div className="mt-2 cursor-pointer flex flex-col gap-1 text-sm">
              <p>Residential Solar</p>
              <p>Commercial Solar</p>
              <p>On-Grid Systems</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-2 flex flex-col gap-1 text-sm">
              <p>Himachal Pradesh, India</p>
              <p>+91 70185 55172</p>
              <p className="cursor-pointer">info@kyperindia.com</p>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kyper India. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}