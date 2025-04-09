'use client'

import { SetStateAction, useEffect, useRef, useState } from 'react'
import { registeredUsers } from '@/utils/users'
import { UserContextType, type UserType } from '@/utils/types'
import { useUserContext } from '@/utils/contexts'

const Login = () => {
	const [userInput, setUserInput] = useState<string | null>(null)
	const { setUser } = useUserContext() as UserContextType
	const inputRef = useRef<HTMLInputElement>(null)
	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])

	const handleChange = (e: {
		target: { value: SetStateAction<string | null> }
	}) => {
		setUserInput(e.target.value)
	}

	const handleSubmit = () => {
		const loggedInUser: UserType[] = registeredUsers.filter(
			(user: UserType) => user.name === userInput
		)
		if (loggedInUser.length) {
			console.log(loggedInUser[0])
			setUser(loggedInUser[0])
		}
	}

	return (
		<div className='content-center grid h-full'>
			<div className='grid bg-[url(/doily-square-vec.svg)] bg-contain bg-no-repeat m-auto p-4 w-full aspect-square'>
				<div className='flex flex-col self-center drop-shadow-xl p-14 rounded-md aspect-ratio text-sky-700'>
					<h1 className={`font-princess-sofia text-4xl text-center py-3`}>
						{' '}
						CookLook
					</h1>
					<label htmlFor='user-input' className='py-1 text-s'>
						Username
					</label>
					<input
						ref={inputRef}
						id='user-input'
						onChange={handleChange}
						onKeyDown={(e) => {
							if (e.key === 'Enter') handleSubmit()
						}}
						className='px-2 py-1 border-2 border-pink-300 focus:border-[#ff97d3]rounded-md focus:outline-[none] focus:outline-none text-neutral-950 placeholder:text-grey-900'
					/>
					<button
						onClick={handleSubmit}
						className='bg-sky-600 m-5 p-2 rounded-md text-white'
					>
						Log in
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
