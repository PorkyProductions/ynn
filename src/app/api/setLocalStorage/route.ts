import { NextRequest, NextResponse } from "next/server";

export function PUT(req: NextRequest, res: NextResponse) {
	const { searchParams } = req.nextUrl;
	const key = searchParams.get("key") as string;
	const value = searchParams.get("value") as string;
	window.localStorage.setItem(key, value);
	const status = res.status
	return NextResponse.json({ status });
}
