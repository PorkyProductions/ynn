import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
	const { searchParams } = req.nextUrl;
	const key = searchParams.get("key") as string;
	const value = window.localStorage.getItem(key)
	const status = res.status
	return NextResponse.json({ value, status });
}
