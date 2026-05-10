"use client";
import Link from "next/link";

import React, { useState } from "react";
import { Key, Menu, X } from "lucide-react";
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
            <nav className="h-16 flex items-center justify-between p-6 lg:px-8 ">

                {/* Logo */}
                <Link href="/" className="pl-4 flex ">
                    <h2 className="text-2xl font-bold text-green-700">
                        Kyper India
                    </h2>

                    {/* <img
                        alt=""
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                    /> */}
                </Link>


                {/* Center Links desktop */}
                <div className="hidden md:flex items-center gap-10 text-base lg:text-lg font-medium ">
                    {navLinks.map((links) => (
                        <Link
                            key={links.href}
                            href={links.href}
                            className="hover:text-green-700 transition">
                            {links.label}
                        </Link>
                    ))}

                </div>

                {/* Right Button desktop whatsapp */}
                <div className=" flex ">
                    <a
                        href="https://wa.me/917018555172"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex bg-green-700 hover:bg-green-800  
                        text-white rounded-md px-3.5 py-2.5 text-sm font-semibold text-white
                         shadow-xs 
                       "
                    >
                        WhatsApp
                    </a>
                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

            </nav>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-5 font-medium shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-green-700 transition">

                            {link.label}
                        </Link>

                    ))}


                    <a
                        href="https://wa.me/917018555172"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer bg-green-700 text-white rounded-lg px-5 py-3 text-center font-semibold "
                    >
                        WhatsApp
                    </a>
                </div>
            )}
        </header>
    );
}