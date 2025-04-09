import { RecipeType } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import HeartToggle from '../HeartToggle'

type RecipePreviewCardProps = {
	key: string
	recipe: RecipeType
	recipes: RecipeType[]
}

const RecipePreviewCard = ({ recipe, recipes }: RecipePreviewCardProps) => {
	return (
		<div //frame
			key={recipe.idMeal}
			className={` ${
				recipes && recipes.length === 1 && 'flex-grow'
			} w-1/2 max-w-[250px] md:max-w-full md:w-1/3 lg:w-1/4 pb-6 px-2 md:px-4 flex justify-center sm:space-around overflow-hidden`}
		>
			<div //card
				className='flex flex-col bg-white box-shadow-lg border border-b-[7px] border-black rounded-lg w-[280px] h-full overflow-hidden hover:cursor-pointer'
			>
				<Link href={`/recipe/${recipe.idMeal}`}>
					<div //img frame
						className='relative grid bg-image aspect-square overflow-hidden'
					>
						{recipe.strMealThumb ?
							<Image
								src={`${recipe.strMealThumb}`}
								width={350}
								height={350}
								alt={recipe.strMeal}
							/>
						:	<p>No image available</p>}
						<Image
							src={'/doily_edged_strip-cropped.svg'}
							alt={'Doily border'}
							width={2687.462}
							height={50}
							className='-bottom-1 absolute outline-none outline-solid max-w-1200 rotate-180'
						/>
					</div>
				</Link>
				<div //info-wrapper
					className='inline-flex place-content-between px-2 pt-2 pb-3 h-100'
				>
					<Link href={`/recipe/${recipe.idMeal}`}>
						<h2 className='pl-1 text-sm md:text-base lg:text-base text-ellipsis'>
							{recipe.strMeal}
						</h2>
					</Link>
					<HeartToggle item={recipe} />
				</div>
			</div>
		</div>
	)
}

export default RecipePreviewCard
