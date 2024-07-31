import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('session');
  const role = request.cookies.get('role');

  if (currentUser && request.nextUrl.pathname.startsWith('/login')) {
    if (role?.value === 'student') {
      return Response.redirect(new URL('/student/classbook', request.url));
    } else if (role?.value === 'teacher') {
      return Response.redirect(new URL('/teacher/classbook', request.url));
    }
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
