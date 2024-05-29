import {ArrowRight} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div>
				<div className='p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5'>
					<h1 className='text-5-xl font-bold'>
						Welcome to Dropbox clone.
						<br />
						Storing everything for you and your business needs. All in one
						place.
					</h1>
					<p className='pb-20'>
						Enhance your personal storage with Dropbox, offering a simple and
						efficient way to upload, organize, and access files from anywhere.
						Securely store important documents and media, and esperience the
						convenience of asy file management and sharing in one centralized
						solution.
					</p>
					<Link
						href='/dashboard'
						className='flex cursor-pointer bg-blue-500 p-5 w-fit'>
						Try it for free!
						<ArrowRight className='ml-10' />
					</Link>
				</div>
			</div>
			<p className='text-center font-bold text-xl pt-5'>Disclamer</p>
			<p className='text-center font-light p-2'>
				This website is made for informational and educational purposes only.
				Copyright disclamer under section 107 of the Copyright Act 1976,
				allowance is made for {'fair use'} of this website for educational
				purposes.
			</p>
		</main>
	)
}
