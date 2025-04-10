'use client'

import { use, useEffect, useState } from 'react'
import { RecipeType } from '@/utils/types'
import RecipePreviewCard from '@/components/RecipePreviewCard'

const CategoryPage = ({
	params,
}: {
	params: Promise<{ categoryName: string }>
}) => {
	const { categoryName } = use(params)
	const [recipes, setRecipes] = useState<RecipeType[] | null>(null)

	useEffect(() => {
		const fetchByCategory = async () => {
			try {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
				)
				const data = await response.json()
				const catRecipes = data.meals
				setRecipes(catRecipes)
			} catch (err) {
				console.log('Error:', err)
			}
		}
		fetchByCategory()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='self-center'>
			<h1 className='py-14 font-princess-sofia text-sky-900 text-6xl md:text-8xl text-center'>
				{categoryName}
			</h1>
			<div className='flex flex-wrap justify-center m-auto sm:mx-4 md:-mb-7 max-w-7xl align-center'>
				{recipes &&
					recipes.map((recipe) => (
						<RecipePreviewCard
							key={recipe.idMeal}
							recipe={recipe}
							recipes={recipes}
						/>
					))}
			</div>
		</div>
	)
}

export default CategoryPage
