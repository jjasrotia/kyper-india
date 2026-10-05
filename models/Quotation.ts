import mongoose, { Schema, models } from "mongoose";

const QuotationSchema = new Schema(
  {
    quotationNumber: {
      type: String,
      required: true,
      unique: true,
    },

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
    },

    address: {
      type: String,
      default: "",
    },

    systemCapacity: {
      type: String,
      default: "",
    },

    panel: {
      type: String,
      default: "",
    },

    panelQuantity: {
      type: Number,
      default: 0,
    },

    inverter: {
      type: String,
      default: "",
    },

    structure: {
      type: String,
      default: "",
    },

    installation: {
      type: String,
      default: "",
    },

    panelCost: {
      type: Number,
      default: 0,
    },

    inverterCost: {
      type: Number,
      default: 0,
    },

    structureCost: {
      type: Number,
      default: 0,
    },

    installationCost: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      default: 0,
    },

    paymentTerms: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["draft", "sent", "accepted", "rejected"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

const Quotation =
  models.Quotation ||
  mongoose.model("Quotation", QuotationSchema);

export default Quotation;