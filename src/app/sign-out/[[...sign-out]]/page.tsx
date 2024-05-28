import {SignedOut, SignInButton} from '@clerk/nextjs'

export default function Page() {
	return (
		<SignedOut>
			<SignInButton>
				<button> Sign in</button>
			</SignInButton>
		</SignedOut>
	)
}
