import { FC } from 'react'

type HeaderProps = { className?: string }
const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<>
			<div className={`flex justify-center py-7 text-sky-700 ${className}`}>
				<h1 className={`font-princess-sofia text-4xl`}> My Cooklook</h1>
			</div>
		</>
	)
}

export default Header
