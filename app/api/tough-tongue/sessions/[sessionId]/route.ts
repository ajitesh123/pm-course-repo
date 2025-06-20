import { NextResponse } from 'next/server';

type Context = {
  params: Promise<{ sessionId: string }>;
};

export async function GET(
  req: Request,
  { params: paramsPromise }: Context
) {
  try {
    const params = await paramsPromise; 
    const { sessionId } = params;
    const apiKey = process.env.TOUGH_TONGUE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Tough Tongue API key is not configured' },
        { status: 500 }
      );
    }

    // Call Tough Tongue API to get session details
    const response = await fetch(`https://api.toughtongueai.com/api/public/sessions/${sessionId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to retrieve session details', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error retrieving Tough Tongue session details:', error);
    return NextResponse.json(
      { error: 'An error occurred while retrieving session details' },
      { status: 500 }
    );
  }
} 