// src/app/api/github/issues/route.ts
import { listIssues } from '@/lib/github/issueApi'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const issues = await listIssues()
    return NextResponse.json(issues)
  } catch (e: unknown) {
    if (e instanceof Error) {
      return NextResponse.json({ message: e.message }, { status: 500 })
    }
    return NextResponse.json({ message: 'Unknown error occurred' }, { status: 500 })
  }
}
