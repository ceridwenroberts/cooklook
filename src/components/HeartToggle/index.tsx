import { useFavoritesContext } from '@/utils/contexts'
import { RecipeType, FavoritesContextType } from '@/utils/types'
import { twMerge } from 'tailwind-merge'

type HeartToggleProps = {
	item: RecipeType
	className?: string
}

const HeartToggle = ({ item, className }: HeartToggleProps) => {
	const { favRecipes, setFavRecipes } =
		useFavoritesContext() as FavoritesContextType

	const checkFav = (item: RecipeType): boolean => {
		return (favRecipes ?? []).some((fav) => fav.idMeal === item.idMeal)
	}

	const toggleFavorite = (item: RecipeType) => {
		const isFavorite = checkFav(item)
		const newFavorites =
			isFavorite ?
				favRecipes.filter((fav) => fav.idMeal !== item.idMeal)
			:	[...favRecipes, item]
		setFavRecipes(newFavorites)
	}
	
	return (
		<button
			onClick={() => toggleFavorite(item)}
			className={twMerge('flex w-100', className)}
			title='Toggle favorite recipe'
			type='submit'
		>
			<svg width='24' height='24' viewBox='0 0 24 24'>
				<path
					d='M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z'
					fill={checkFav(item) ? 'pink' : 'none'}
					stroke='currentColor'
				/>
			</svg>
		</button>
	)
}

export default HeartToggle
