import GitHubIcon from '../icons/GitHubIcon'

const Footer = () => {
	return (
		<div className='flex flex-col items-center py-14 font-outfit font-sx text-sky-900 text-sm'>
			<div className='flex items-center gap-2'>
				<p className=''>
					{'\u00A9'} {new Date().getFullYear()} Ceridwen Roberts
				</p>
				<a
					href='https://github.com/ceridwenroberts/cooklook.git'
					target='_blank'
					rel='noopener noreferrer'
				>
					<GitHubIcon className='w-[1.5em] h-[1.5em]' />
				</a>
			</div>
			<p>All rights reserved.</p>
			<p>Created with</p>
			<p className='pt-2'>
				<a
					href='https://www.themealdb.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='font-princess-sofia font-bold text-lg'
				>
					The MealDb
				</a>
			</p>
			<a href='https://github.com/ceridwenroberts/cooklook.git'></a>
		</div>
	)
}

export default Footer
