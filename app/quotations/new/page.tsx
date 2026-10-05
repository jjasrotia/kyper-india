"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface QuotationForm {
  customerName: string;
  mobile: string;
  email: string;
  address: string;

  systemCapacity: string;
  panel: string;
  panelQuantity: number;
  inverter: string;
  structure: string;
  installation: string;

  panelCost: number;
  inverterCost: number;
  structureCost: number;
  installationCost: number;

  discount: number;

  paymentTerms: string;
  notes: string;
}

export default function NewQuotationPage() {
  const router = useRouter();

  const [form, setForm] = useState<QuotationForm>({
    customerName: "",
    mobile: "",
    email: "",
    address: "",

    systemCapacity: "5 KW",
    panel: "550W Mono PERC",
    panelQuantity: 10,
    inverter: "5 KW On-Grid",
    structure: "GI Structure",
    installation: "Included",

    panelCost: 0,
    inverterCost: 0,
    structureCost: 0,
    installationCost: 0,

    discount: 0,

    paymentTerms: "50% Advance, 50% on Installation",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    field: keyof QuotationForm,
    value: string | number
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const totalAmount =
    Number(form.panelCost) +
    Number(form.inverterCost) +
    Number(form.structureCost) +
    Number(form.installationCost) -
    Number(form.discount);

  const saveQuotation = async () => {
    if (!form.customerName || !form.mobile) {
      setMessage("Customer name and mobile are required.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/quotations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          totalAmount,
          status: "draft",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to save quotation");
        return;
      }

      setMessage("Quotation saved successfully!");

      console.log("Saved quotation:", data.quotation);

      // Later we can redirect to quotation details/edit page
      setTimeout(() => {
        router.push("/quotations");
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold">
            Solar CRM
          </h1>

          <button
            onClick={() => router.push("/dashboard")}
            className="rounded-md bg-slate-700 px-4 py-2 text-sm hover:bg-slate-600"
          >
            Back to Dashboard
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">

        <h2 className="text-2xl font-bold">
          Create Quotation
        </h2>

        <p className="mt-1 text-slate-400">
          Enter customer and solar system details
        </p>

        {/* Customer */}
        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h3 className="text-lg font-semibold">
            Customer Details
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            <Input
              label="Customer Name"
              value={form.customerName}
              onChange={(value) =>
                handleChange("customerName", value)
              }
              placeholder="Raj Kumar"
            />

            <Input
              label="Mobile"
              value={form.mobile}
              onChange={(value) =>
                handleChange("mobile", value)
              }
              placeholder="9876543210"
            />

            <Input
              label="Email"
              value={form.email}
              onChange={(value) =>
                handleChange("email", value)
              }
              placeholder="customer@example.com"
            />

            <Input
              label="Address"
              value={form.address}
              onChange={(value) =>
                handleChange("address", value)
              }
              placeholder="Shimla, Himachal Pradesh"
            />

          </div>

        </section>

        {/* Solar System */}
        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h3 className="text-lg font-semibold">
            Solar System
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            <Select
              label="System Capacity"
              value={form.systemCapacity}
              options={[
                "3 KW",
                "5 KW",
                "7 KW",
                "10 KW",
              ]}
              onChange={(value) =>
                handleChange("systemCapacity", value)
              }
            />

            <Select
              label="Solar Panel"
              value={form.panel}
              options={[
                "500W Mono PERC",
                "550W Mono PERC",
                "580W TOPCon",
              ]}
              onChange={(value) =>
                handleChange("panel", value)
              }
            />

            <NumberInput
              label="Panel Quantity"
              value={form.panelQuantity}
              onChange={(value) =>
                handleChange("panelQuantity", value)
              }
            />

            <Select
              label="Inverter"
              value={form.inverter}
              options={[
                "3 KW On-Grid",
                "5 KW On-Grid",
                "7 KW On-Grid",
                "10 KW On-Grid",
              ]}
              onChange={(value) =>
                handleChange("inverter", value)
              }
            />

            <Select
              label="Structure"
              value={form.structure}
              options={[
                "GI Structure",
                "Heavy GI Structure",
                "Aluminium Structure",
              ]}
              onChange={(value) =>
                handleChange("structure", value)
              }
            />

            <Select
              label="Installation"
              value={form.installation}
              options={[
                "Included",
                "Not Included",
              ]}
              onChange={(value) =>
                handleChange("installation", value)
              }
            />

          </div>

        </section>

        {/* Pricing */}
        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h3 className="text-lg font-semibold">
            Pricing
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">

            <NumberInput
              label="Panel Cost"
              value={form.panelCost}
              onChange={(value) =>
                handleChange("panelCost", value)
              }
            />

            <NumberInput
              label="Inverter Cost"
              value={form.inverterCost}
              onChange={(value) =>
                handleChange("inverterCost", value)
              }
            />

            <NumberInput
              label="Structure Cost"
              value={form.structureCost}
              onChange={(value) =>
                handleChange("structureCost", value)
              }
            />

            <NumberInput
              label="Installation Cost"
              value={form.installationCost}
              onChange={(value) =>
                handleChange("installationCost", value)
              }
            />

            <NumberInput
              label="Discount"
              value={form.discount}
              onChange={(value) =>
                handleChange("discount", value)
              }
            />

          </div>

          <div className="mt-6 rounded-lg bg-slate-800 p-5">

            <p className="text-sm text-slate-400">
              Total Amount
            </p>

            <p className="mt-1 text-3xl font-bold text-yellow-400">
              ₹{totalAmount.toLocaleString("en-IN")}
            </p>

          </div>

        </section>

        {/* Payment */}
        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">

          <h3 className="text-lg font-semibold">
            Payment & Notes
          </h3>

          <div className="mt-5">

            <Select
              label="Payment Terms"
              value={form.paymentTerms}
              options={[
                "50% Advance, 50% on Installation",
                "30% Advance, 70% on Installation",
                "100% Advance",
              ]}
              onChange={(value) =>
                handleChange("paymentTerms", value)
              }
            />

            <div className="mt-5">

              <label className="text-sm text-slate-400">
                Notes
              </label>

              <textarea
                value={form.notes}
                onChange={(e) =>
                  handleChange("notes", e.target.value)
                }
                rows={4}
                placeholder="Additional quotation notes..."
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-yellow-500"
              />

            </div>

          </div>

        </section>

        {/* Message */}
        {message && (
          <div className="mt-5 rounded-lg bg-slate-800 p-4 text-sm">
            {message}
          </div>
        )}

        {/* Save */}
        <div className="mt-6 flex justify-end">

          <button
            onClick={saveQuotation}
            disabled={loading}
            className="rounded-lg bg-yellow-500 px-8 py-3 font-semibold text-slate-950 hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Quotation"}
          </button>

        </div>

      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

function Input({
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="text-sm text-slate-400">
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-yellow-500"
      />
    </div>
  );
}

interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

function Select({
  label,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <div>
      <label className="text-sm text-slate-400">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function NumberInput({
  label,
  value,
  onChange,
}: NumberInputProps) {
  return (
    <div>
      <label className="text-sm text-slate-400">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-yellow-500"
      />
    </div>
  );
}