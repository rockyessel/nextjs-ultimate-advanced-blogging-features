import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body = await request.json();
  const { email, password } = body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    // return NextResponse.json({ user: data });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
