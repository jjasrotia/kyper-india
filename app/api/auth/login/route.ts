
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export async function POST(request: Request) {
  try {
    console.log("========== LOGIN START ==========");

    const body: LoginRequest = await request.json();

    console.log("Email:", body.email);
    console.log("Password received:", !!body.password);

    const { email, password, rememberMe } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check JWT secret
    const JWT_SECRET = process.env.JWT_SECRET;

    console.log("JWT_SECRET exists:", !!JWT_SECRET);

    if (!JWT_SECRET) {
      return NextResponse.json(
        { message: "JWT_SECRET is missing in .env.local" },
        { status: 500 }
      );
    }

    // Connect database
    console.log("Connecting MongoDB...");

    await connectDB();

    console.log("MongoDB connected");

    // Find user
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    console.log("User found:", !!user);

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    console.log("User email:", user.email);
    console.log("Password hash exists:", !!user.password);

    // Compare password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log("Password match:", passwordMatch);

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create JWT
    console.log("Creating JWT...");

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: rememberMe ? "30d" : "1d",
      }
    );

    console.log("JWT created");

    // Create response
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );

    // Set cookie
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: rememberMe
        ? 60 * 60 * 24 * 30
        : 60 * 60 * 24,
    });

    console.log("Cookie created");
    console.log("========== LOGIN SUCCESS ==========");

    return response;

  } catch (error: unknown) {

    console.error("========== LOGIN ERROR ==========");

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error("Stack:", error.stack);
    } else {
      console.error(error);
    }

    return NextResponse.json(
      {
        message: "Login failed",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}