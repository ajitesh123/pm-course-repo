import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const apiKey = process.env.TOUGH_TONGUE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Tough Tongue API key is not configured' },
        { status: 500 }
      );
    }

    // Validate request body
    if (!body.session_id) {
      return NextResponse.json(
        { error: 'session_id is required' },
        { status: 400 }
      );
    }

    // Call Tough Tongue API to analyze the session
    const response = await fetch('https://api.toughtongueai.com/api/public/sessions/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        session_id: body.session_id
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to analyze session', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error analyzing Tough Tongue session:', error);
    return NextResponse.json(
      { error: 'An error occurred while analyzing the session' },
      { status: 500 }
    );
  }
} 