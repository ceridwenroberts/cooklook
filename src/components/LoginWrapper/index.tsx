'use client'
import { FavoritesProvider, useUserContext } from '@/utils/contexts'
import Login from '../Login'
import { UserContextType } from '@/utils/types'
import Menu from '../Menu'
import Header from '../Header'

const LoginWrapper = ({ children }: { children: React.ReactNode }) => {
	const { user } = useUserContext() as UserContextType

	return (
		<>
			<div className='flex flex-col flex-grow font-outfit'>
				{!user ?
					<div className='flex flex-grow justify-center items-center w-full'>
						<Login />
					</div>
				:	<>
						<FavoritesProvider>
							<Header className='bg-white' />
							<Menu />
							<div className='flex flex-col flex-grow'>{children}</div>
						</FavoritesProvider>
					</>
				}
			</div>
		</>
	)
}

export default LoginWrapper
