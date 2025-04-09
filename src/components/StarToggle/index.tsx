import { useFavoritesContext } from '@/utils/contexts'
import { CategoryType, FavoritesContextType } from '@/utils/types'
import { twMerge } from 'tailwind-merge'

type StarToggleProps = {
	item: CategoryType
	className?: string
}

const StarToggle = ({ item, className }: StarToggleProps) => {
	const { favCategories, setFavCategories } =
		useFavoritesContext() as FavoritesContextType

	const checkFav = (item: CategoryType): boolean => {
		return (favCategories ?? []).some(
			(fav) => fav.strCategory === item.strCategory
		)
	}

	const toggleFavorite = (item: CategoryType) => {
		const isFavorite = checkFav(item)
		const newFavorites =
			isFavorite ?
				favCategories.filter((fav) => fav !== item)
			:	[...favCategories, item]
		setFavCategories(newFavorites)
	}

	return (
		<button
			onClick={() => toggleFavorite(item)}
			className={twMerge('w-100', className)}
			title='Toggle category to favorites'
			type='button'
		>
			<svg width='20' height='20' viewBox='0 0 20 20'>
				<path
					d='M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z'
					stroke='currentColor'
					fill={checkFav(item) ? 'pink' : 'none'}
					fillRule='evenodd'
					strokeLinejoin='round'
				></path>
			</svg>
		</button>
	)
}

export default StarToggle
