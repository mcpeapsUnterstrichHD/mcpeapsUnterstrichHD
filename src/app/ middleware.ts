import { type NextRequest, NextResponse } from 'next/server';
import { example_flag } from './flags';

// Note that we're running this middleware for / only, but
// you could extend it to further pages you're experimenting on

export async function middleware(request: NextRequest) {
  // precompute returns a string encoding each flag's returned value
  const example_flag_local = example_flag();

  console.log(example_flag_local);

  return NextResponse.rewrite(request.url);
}
