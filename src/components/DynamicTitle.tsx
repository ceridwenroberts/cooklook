'use client'

import { useEffect } from 'react'
import { useUserContext } from '@/utils/contexts'
import { UserContextType, UserType } from '@/utils/types'

const DynamicTitle = () => {
	const { user } = useUserContext() as UserContextType
	function setTitle(user: UserType | null) {
		document.title = user ? `${user.name}'s CookLook` : 'CookLook - Login'
	}

	function setDescription(
		metaDescription: HTMLMetaElement,
		user: UserType | null
	) {
		metaDescription.setAttribute(
			'content',
			user ?
				`Great look! You cook, ${user.name}!`
			:	'A great look for any cook – Log in!'
		)
	}

	useEffect(() => {
		setTitle(user)
		let metaDescription = document.querySelector(
			'meta[name="description"]'
		) as HTMLMetaElement

		if (!metaDescription) {
			metaDescription = document.createElement('meta')
			metaDescription.name = 'description'
			document.head.appendChild(metaDescription)
		}

		setDescription(metaDescription, user)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		setTitle(user)
		const metaDescription = document.querySelector(
			'meta[name="description"]'
		) as HTMLMetaElement

		if (metaDescription) {
			setDescription(metaDescription, user)
		}
	}, [user])

	return null
}

export default DynamicTitle
