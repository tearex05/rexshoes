import {useEffect, useState} from 'react'
import {CgShoppingCart} from 'react-icons/cg'
import {AiFillPhone, AiFillQuestionCircle, AiFillHome}  from 'react-icons/ai'


function Nav() {
	const [color, setColor] = useState('')
	return (
		<div className="fixed z-20 flex text-custom2 text-4xl w-screen p-4 items-center justify-between">
			<a href="#home" className="w-1/6 hover:text-pink-400 transition-x cursor-pointer">
				<AiFillHome />
			</a>
			<section className="flex w-1/2 items-center justify-around">
				<CgShoppingCart className="hover:text-pink-400 transition-x cursor-pointer" />
				<AiFillPhone className="hover:text-pink-400 transition-x cursor-pointer" />
				<AiFillQuestionCircle className="hover:text-pink-400 transition-x cursor-pointer" />
			</section>
		</div>
	)
}

export default Nav