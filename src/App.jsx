import React from 'react'
import Bg from './assets/bg.png'
import Nav from './components/Nav'
import Pic2 from './assets/pic2.jpg'
import Pic3 from './assets/pic3.jpg'
import Pic4 from './assets/pic4.jpg'
import Pic5 from './assets/pic5.jpg'
import Pic6 from './assets/pic6.jpg'
import Pic7 from './assets/pic7.jpg'
import Pic8 from './assets/pic8.jpg'


function App() {
  return (
    <>
    <Nav />
    <div id="home" className="w-screen h-screen flex items-center justify-center text-center relative lg:flex-row-reverse">
      <div loading="lazy" style={{backgroundImage: `url(${Bg})`}} className="img lg:w-1/2 w-screen h-screen absolute lg:relative z-1"></div>
      <h1 className="absolute z-2 font-bold sm:text-9xl text-7xl text-white shadow-x lg:w-1/2 lg:relative px-3 h-screen flex flex-col items-center justify-center text-center lg:bg-custom1">Protect Your 2nd <span className="text-red-500 italic pr-3 inline-block">Heart</span></h1>
    </div>
    <div className="w-screen min-h-screen flex items-center justify-center pt-40 bg-custom1">
     <div loading="lazy" style={{backgroundImage: `url(${Pic4})`}} className="w-full h-screen img flex items-center justify-center text-center">
     <h1 className="sm:text-8xl text-5xl font-bold shadow-x2 text-white px-10 italic">Lots Of Shoes With Different <span className="text-black">Models</span> & <span className="text-black">Colors</span></h1>
     </div>
    </div>
    <div className="w-screen min-h-screen flex flex-col items-center justify-center pt-40 bg-custom1 text-center">
      <h1 className="text-black font-bold text-4xl my-10 shadow-x3">Best Shoes Of The Year</h1>
      <div className="w-screen min-h-screen bg-custom1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 px-10">
      <div loading="lazy" style={{backgroundImage: `url(${Pic5})`}} className="img w-full h-full rounded-2xl relative main">
      <div className="text-white shadow-x font-bold text-2xl w-full h-full flex flex-col items-center justify-around absolute bottom-0 p-5 bg-opacity-40 bg-black opacity-0 rounded-2xl on-hover transition-x">
        <p>White Nike</p>
        <p>$100</p>
      </div>
      </div>
      <div loading="lazy" style={{backgroundImage: `url(${Pic2})`}} className="img w-full h-full rounded-2xl relative main">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black  rounded-2xl opacity-0 on-hover transition-x w-full h-full flex flex-col">
        <p>Dark Nike</p>
        <p>$120</p>
      </div>
      </div>
      <div loading="lazy" style={{backgroundImage: `url(${Pic3})`}} className="img w-full h-full rounded-2xl main relative">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black opacity-0 rounded-2xl on-hover transition-x w-full h-full flex flex-col">
        <p>Red Nike</p>
        <p>$90</p>
      </div>
      </div>
      <div loading="lazy" style={{backgroundImage: `url(${Pic6})`}} className="img w-full h-full rounded-2xl relative main">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black opacity-0 rounded-2xl on-hover transition-x w-full h-full flex flex-col">
        <p>Black Nike</p>
        <p>$100</p>
      </div>
      </div>
      <div loading="lazy" style={{backgroundImage: `url(${Pic7})`}} className="img w-full h-full rounded-2xl relative main">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black opacity-0 rounded-2xl on-hover transition-x w-full h-full flex flex-col">
        <p>Gray Nike</p>
        <p>$100</p>
      </div>
      </div>
      <div loading="lazy" style={{backgroundImage: `url(${Pic8})`}} className="img w-full h-full rounded-2xl relative main">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black opacity-0 rounded-2xl on-hover transition-x w-full h-full flex flex-col">
        <p>Colorful Nike</p>
        <p>$100</p>
      </div>
      </div>
      </div>
    </div>
    <div className="w-screen bg-custom1 text-5xl lg:text-7xl text-center flex items-center justify-center font-bold pb-36 pt-60">
      <h1 className="italic pl-3 pr-9 py-6 rounded-3xl w-2/3 text-white border-4 border-black">Use Code <span className="text-emerald-500 font-bold text-6xl lg:text-8xl">Rx16ew</span> To Get A <span className="text-red-600 font-bold text-6xl lg:text-8xl">50%</span> Off</h1>
    </div>
    <div className="w-screen pt-48 bg-custom1 flex flex-col items-center justify-center text-center pb-12 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold px-5">
      <h1>Your Feet Will Thank You</h1>
      <p className="font-normal text-2xl bg-custom2 p-3 mt-5 shadow-b cursor-pointer">Buy Right Now</p>
    </div>
    <footer className="text-center bg-custom1 font-bold pt-20 pb-2">Created By Tearex</footer>
    </>
  )
}

export default App