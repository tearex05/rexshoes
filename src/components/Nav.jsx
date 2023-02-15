import {useState} from 'react'
import {CgShoppingCart} from 'react-icons/cg'
import {AiFillPhone, AiFillQuestionCircle, AiFillHome}  from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'


function Nav() {
	const [style, setStyle] = useState('-translate-x-full')
	return (
		<>
		<HiMenuAlt3 className="sm:hidden fixed z-20 top-0 right-0 text-custom2 m-4 text-xl cursor-pointer" size="2em" onClick={() => style === '-translate-x-full' ? setStyle('-translate-x-0') : setStyle('-translate-x-full')} />
		<div className={`sm:hidden fixed z-20 w-2/3 h-screen flex flex-col items-center justify-around text-3xl font-bold italic bg-custom2 shadow-x3 ${style} transition-x2`}>
			<p className="cursor-pointer hover:text-4xl transition-x">Buy Shoes</p>
			<p className="cursor-pointer hover:text-4xl transition-x">Contact Us</p>
			<p className="cursor-pointer hover:text-4xl transition-x">Ask Question</p>
		</div>
		<div className="custom-nav z-20 flex text-custom2 text-4xl w-screen p-4 items-center justify-between">
			<a href="#home" className="w-1/6 hover:text-pink-400 transition-x cursor-pointer">
				<AiFillHome />
			</a>
			<section className="flex w-1/2 items-center justify-around">
				<CgShoppingCart className="hover:text-pink-400 transition-x cursor-pointer" />
				<AiFillPhone className="hover:text-pink-400 transition-x cursor-pointer" />
				<AiFillQuestionCircle className="hover:text-pink-400 transition-x cursor-pointer" />
			</section>
		</div>
		</>
	)
}

export default Nav