// src/app/api/github/create/route.ts
import { createIssue } from '@/lib/github/issueApi'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { title, body } = await req.json()

  try {
    const result = await createIssue(title, body)
    return NextResponse.json(result)
  } catch (e: unknown) {
    if (e instanceof Error) {
      return NextResponse.json({ message: e.message }, { status: 500 })
    }
    return NextResponse.json({ message: 'Unknown error occurred' }, { status: 500 })
  }
}
