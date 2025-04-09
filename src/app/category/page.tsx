'use client'

import CategoryPreviewCard from '@/components/CategoryPreviewCard'
import { useFavoritesContext } from '@/utils/contexts'
import { FavoritesContextType } from '@/utils/types'

const Category = () => {
	const { categories } = useFavoritesContext() as FavoritesContextType
	return (
		<>
			<ul className='flex flex-wrap place-content-evenly self-center gap-[1vw] sm:gap-1 md:gap-5 sm:m-5 md:mx-4 md:mb-7 max-w-7xl text-sky-700'>
				{categories && categories.length > 0 ?
					categories.map((category) => (
						<CategoryPreviewCard
							key={category.idCategory}
							category={category}
						/>
					))
				:	<p>Loading categories...</p>}
			</ul>
		</>
	)
}

export default Category
