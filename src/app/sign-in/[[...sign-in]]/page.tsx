import {SignedIn, UserButton} from '@clerk/nextjs'

export default function Page() {
	return (
		<SignedIn>
			<UserButton />
		</SignedIn>
	)
}
