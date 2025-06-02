import {NextRequest, NextResponse} from 'next/server'

const locales = ['en', 'ja']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	
	if (locales.some((locale) => pathname.startsWith(`/${locale}`)) || pathname.startsWith('/api')) {
		return NextResponse.next()
	}
	
	const locale = defaultLocale
	const url = request.nextUrl
	url.pathname = `/${locale}${pathname}`
	
	return NextResponse.redirect(url)
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico).*)'
	]
}
