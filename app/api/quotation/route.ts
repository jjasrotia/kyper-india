import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Quotation from "@/models/Quotation";

// GET all quotations
export async function GET() {
  try {
    await connectDB();

    const quotations = await Quotation.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      {
        success: true,
        quotations,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET QUOTATIONS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch quotations",
      },
      { status: 500 }
    );
  }
}

// CREATE quotation
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      customerName,
      mobile,
      email,
      address,
      systemCapacity,
      panel,
      panelQuantity,
      inverter,
      structure,
      installation,
      panelCost,
      inverterCost,
      structureCost,
      installationCost,
      discount,
      totalAmount,
      paymentTerms,
      notes,
      status,
    } = body;

    if (!customerName || !mobile) {
      return NextResponse.json(
        {
          success: false,
          message: "Customer name and mobile are required",
        },
        { status: 400 }
      );
    }

    await connectDB();

    // Generate quotation number
    const count = await Quotation.countDocuments();

    const quotationNumber = `QTN-${String(count + 1).padStart(
      4,
      "0"
    )}`;

    const quotation = await Quotation.create({
      quotationNumber,

      customerName,
      mobile,
      email,
      address,

      systemCapacity,
      panel,
      panelQuantity,
      inverter,
      structure,
      installation,

      panelCost,
      inverterCost,
      structureCost,
      installationCost,

      discount,
      totalAmount,

      paymentTerms,
      notes,

      status: status || "draft",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Quotation created successfully",
        quotation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE QUOTATION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create quotation",
      },
      { status: 500 }
    );
  }
}