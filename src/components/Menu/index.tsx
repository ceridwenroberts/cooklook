import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { useFavoritesContext, useUserContext } from '@/utils/contexts'
import { FavoritesContextType, UserContextType } from '@/utils/types'
import { useEffect, useRef, useState } from 'react'
import StarToggle from '../StarToggle'
import { useParams, usePathname } from 'next/navigation'

const Menu = () => {
	const { user, setUser } = useUserContext() as UserContextType
	const { categories, setCategories } =
		useFavoritesContext() as FavoritesContextType
	const pathname = usePathname()
	const [open, setOpen] = useState<boolean>(false)
	const params = useParams()
	const categoryName = params.categoryName
	const menuRef = useRef<HTMLDivElement>(null)
	const [navLink, setNavLink] = useState<boolean>(false)

	const currentQuery = (href: string) => (pathname === href ? 'font-bold' : '')

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch(
					'https://www.themealdb.com/api/json/v1/1/categories.php'
				)

				const data = await response.json()

				setCategories(data.categories)
			} catch (err) {
				console.log('Error:', err)
			}
		}

		fetchCategories()
	}, [])

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent | TouchEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node))
				setOpen(false)
			setNavLink(false)
		}
		if (open) {
			document.addEventListener('mousedown', handleClickOutside)
			document.addEventListener('touchstart', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [open])


	return (
		<>
			<div className='bg-white outline outline-white font-outfit-b text-sky-700'>
				<nav className='flex justify-center items-center gap-5 text-xs lg:text-sm'>
					<Link href='/' className={`${currentQuery('/')} hover:text-blue-400`}>
						Home
					</Link>
					<Link
						href='/cooklook'
						className={`${currentQuery(
							'/cooklook'
						)} hover:text-blue-400 font-princess-sofia text-base lg:text-lg`}
					>
						{
							<>
								<span>{user?.name}&apos;s</span> {`Cooklook`}
							</>
						}
					</Link>

					{/*Category dropdown*/}
					<div
						ref={menuRef}
						className='z-50 relative hover:[text-shadow:_none]'
						onClick={() => open && setNavLink(true)}
					>
						<div
							onMouseEnter={() => setOpen(true)}
							onTouchStart={() => setOpen(true)}
							onMouseLeave={() => setOpen(false)}
							className='group relative flex flex-col w-fit h-fit'
						>
							<Link
								href='/category'
								className={`${currentQuery('/category')} hover:text-pink-400 ${
									open && 'text-pink-400'
								}`}
							>
								Category
							</Link>

							{open && categories && (
								<div className='top-full -left-2 absolute flex flex-col bg-white shadow-md w-fit h-fit text-pink-400'>
									{categories.map((category) => (
										<div
											className={twMerge(
												`inline-flex justify-between hover:bg-pink-400 hover:text-white hover:[text-shadow:_0_2px_4px_rgb( #e96b80_/_0.1)]`,
												category.strCategory === categoryName && 'bg-pink-100'
											)}
											key={category.idCategory}
										>
											<Link
												href={`/category/${category.strCategory} `}
												className='p-3 pr-5 w-full'
												onClick={() => setOpen(false)}
											>
												{category.strCategory}
											</Link>
											<StarToggle item={category} className='mr-5' />
										</div>
									))}
								</div>
							)}
						</div>
					</div>
					<Link
						href='/'
						onClick={() => {
							if (confirm('Are you sure you want to log out?')) {
								setUser(null)
							}
						}}
						className='pl-3 border-sky-400 border-l text-basis text-sky-700 hover:text-pink-400'
					>
						Sign Out
					</Link>
				</nav>
			</div>
			<Image
				src={'/doily_edged_strip-cropped.svg'}
				alt={'Doily border'}
				width={2687.462}
				height={50}
				className='outline-none max-w-1200'
			/>
		</>
	)
}

export default Menu
