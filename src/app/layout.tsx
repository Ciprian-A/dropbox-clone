import {ClerkProvider} from '@clerk/nextjs'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from './components/Header'
import {ThemeProvider} from './components/ThemeProvider'
import './globals.css'
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Dropbox clone',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange>
						<Header />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
