import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { fullName, email, company, message } = await request.json();
    const apiKey = process.env.KIT_API_KEY;

    const response = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Kit-Api-Key': apiKey || '',
      },
      body: JSON.stringify({
        email_address: email,
        first_name: fullName,
        fields: { company, message },
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Failed' }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}