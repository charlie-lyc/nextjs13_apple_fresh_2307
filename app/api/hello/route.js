import { NextResponse } from 'next/server'


export async function GET(req) {
    // return new Response('Hello World!')
    ////////////////////////////////////////////////////////
    return NextResponse.json({ message: 'Hello World!'})
    
}