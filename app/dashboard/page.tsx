"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            href="/dashboard"
            className="text-xl font-bold text-yellow-400"
          >
            Solar CRM
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3">

            <Link
              href="/dashboard"
              className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Dashboard
            </Link>

            <Link
              href="/quotations"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              Quotations
            </Link>

            <Link
              href="/quotations/new"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
            >
              + New Quotation
            </Link>

            <button
              onClick={() => router.push("/login")}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
            >
              Logout
            </button>

          </nav>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-1 text-slate-400">
            Welcome back to Solar CRM
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Customers */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Customers
            </p>

            <p className="mt-3 text-3xl font-bold">
              25
            </p>

            <p className="mt-2 text-xs text-green-400">
              +5 this month
            </p>
          </div>

          {/* Leads */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Leads
            </p>

            <p className="mt-3 text-3xl font-bold">
              12
            </p>

            <p className="mt-2 text-xs text-blue-400">
              4 new leads
            </p>
          </div>

          {/* Quotations */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Quotations
            </p>

            <p className="mt-3 text-3xl font-bold">
              8
            </p>

            <p className="mt-2 text-xs text-yellow-400">
              3 pending
            </p>
          </div>

          {/* Projects */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Projects
            </p>

            <p className="mt-3 text-3xl font-bold">
              5
            </p>

            <p className="mt-2 text-xs text-purple-400">
              2 in progress
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-8">

          <h2 className="text-xl font-semibold">
            Quick Actions
          </h2>

          <div className="mt-4 grid gap-5 md:grid-cols-3">

            {/* New Quotation */}
            <Link
              href="/quotations/new"
              className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-yellow-500 hover:bg-slate-800"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-semibold group-hover:text-yellow-400">
                    Create Quotation
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Create a new solar quotation for a customer.
                  </p>
                </div>

                <span className="text-3xl">
                  +
                </span>

              </div>
            </Link>

            {/* Quotations */}
            <Link
              href="/quotations"
              className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-yellow-500 hover:bg-slate-800"
            >
              <h3 className="text-lg font-semibold group-hover:text-yellow-400">
                View Quotations
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                View, edit and manage your saved quotations.
              </p>
            </Link>

            {/* Customers - future */}
            <div className="cursor-not-allowed rounded-xl border border-slate-800 bg-slate-900 p-6 opacity-60">
              <h3 className="text-lg font-semibold">
                Customers
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Customer management will be available soon.
              </p>
            </div>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900">

          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

            <h2 className="font-semibold">
              Recent Quotations
            </h2>

            <Link
              href="/quotations"
              className="text-sm text-yellow-400 hover:text-yellow-300"
            >
              View All →
            </Link>

          </div>

          <div className="divide-y divide-slate-800">

            <div className="flex items-center justify-between px-6 py-4">

              <div>
                <p className="font-medium">
                  Raj Kumar
                </p>

                <p className="text-sm text-slate-500">
                  QTN-0001 · 5 KW Solar System
                </p>
              </div>

              <span className="text-sm text-green-400">
                ₹2,55,000
              </span>

            </div>

            <div className="flex items-center justify-between px-6 py-4">

              <div>
                <p className="font-medium">
                  Amit Sharma
                </p>

                <p className="text-sm text-slate-500">
                  QTN-0002 · 7 KW Solar System
                </p>
              </div>

              <span className="text-sm text-yellow-400">
                Draft
              </span>

            </div>

            <div className="flex items-center justify-between px-6 py-4">

              <div>
                <p className="font-medium">
                  Sunil Kumar
                </p>

                <p className="text-sm text-slate-500">
                  QTN-0003 · 3 KW Solar System
                </p>
              </div>

              <span className="text-sm text-green-400">
                ₹1,85,000
              </span>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}