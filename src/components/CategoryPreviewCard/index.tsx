type PreviewCardProps = {
	key: string
	category: CategoryType
}

import { CategoryType } from '@/utils/types'
import Link from 'next/link'
import StarToggle from '../StarToggle'
import { useState } from 'react'

const CategoryPreviewCard = ({ category }: PreviewCardProps) => {
	const [showPopup, setShowPopup] = useState<boolean>(false)
	return (
		<>
			<div
				key={category.idCategory}
				className='relative flex justify-around bg-[url(/doily-square-vec.svg)] bg-contain bg-no-repeat p-4 px-2 md:px-4 w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/6 aspect-square shrink-0 align-center'
			>
				<Link href={`/category/${category.strCategory}`} className='flex'>
					<div className='flex flex-col justify-center w-full'>
						<div
							className='justify-self-end self-end m-0'
							onClick={(e) => e.preventDefault()}
						>
							<StarToggle item={category} />
						</div>

						<h2
							className={`font-princess-sofia text-lg sm:text-2xl text-center self-center justify-around mr-3 mb-[0.rem] sm:mb-[0.3rem]`}
						>
							{category.strCategory}
						</h2>
						<div className='flex justify-center sm:justify-end sm:mr-1 ml-3 sm:ml-0 w-full rl-3 t-1'>
							<button
								onClick={(e) => {
									e.preventDefault()
									setShowPopup(true)
								}}
								className='flex justify-center items-center border border-pink-500 rounded-full w-4 sm:w-6 h-4 sm:h-6 font-princess-sofia text-pink-500 text-xs sm:text-base leading-[0]'
							>
								i
							</button>
						</div>
					</div>
				</Link>
			</div>
			{showPopup && (
				<div
					className='z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'
					onClick={() => setShowPopup(false)}
				>
					<div
						className='relative bg-white shadow-xl mx-4 p-4 rounded-xl max-w-sm text-sm sm:text-base'
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className='top-1 right-2 absolute text-gray-500 hover:text-pink-500 text-xl'
							onClick={() => setShowPopup(false)}
						>
							×
						</button>
						<p className='py-3 font-princess-sofia text-xl sm:text-2xl text-center'>
							{category.strCategory}
						</p>
						<p>{category.strCategoryDescription}</p>
					</div>
				</div>
			)}
		</>
	)
}

export default CategoryPreviewCard
