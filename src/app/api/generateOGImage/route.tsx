import { NextRequest, NextResponse, ImageResponse } from "next/server";

export async function GET(request: NextRequest, _response: NextResponse) {
	const { searchParams } = request.nextUrl;
	const titleParam = searchParams.get("title");
	return new ImageResponse((
			<div
  style={{
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
    fontSize: 60,
    letterSpacing: -2,
    fontWeight: 700,
    textAlign: 'center',
  }}
  >
  <div
    style={{
      backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
      backgroundClip: 'text',
      color: 'transparent',
	  fontWeight: "bolder"
    }}
  >
    YNN
  </div>
  <div
    style={{
      backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
      backgroundClip: 'text',
      color: 'transparent',
	  fontWeight: "bold"
    }}
  >
    {titleParam}
  </div>
</div>
))
}