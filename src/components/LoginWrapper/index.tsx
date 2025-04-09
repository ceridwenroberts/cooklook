'use client'
import { FavoritesProvider, useUserContext } from '@/utils/contexts'
import { UserContextType } from '@/utils/types'
import DynamicTitle from '../DynamicTitle'
import Header from '../Header'
import Login from '../Login'
import Menu from '../Menu'

const LoginWrapper = ({ children }: { children: React.ReactNode }) => {
	const { user } = useUserContext() as UserContextType

	return (
		<>
			<DynamicTitle />
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
