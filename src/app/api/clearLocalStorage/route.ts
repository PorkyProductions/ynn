import { NextRequest, NextResponse } from "next/server";

export function DELETE(_req: NextRequest, res: NextResponse) {
	window.localStorage.clear()
	const status = res.status
	return NextResponse.json({ status });
}
