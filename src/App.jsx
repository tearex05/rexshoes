import React from 'react'
import Bg from './assets/bg.png'
import Nav from './components/Nav'
import Pic5 from './assets/pic5.jpg'
import Pic2 from './assets/pic2.jpg'
import Pic3 from './assets/pic3.jpg'
import Pic4 from './assets/pic4.jpg'


function App() {
  return (
    <>
    <Nav />
    <div id="home" className="w-screen h-screen flex items-center justify-center text-center relative lg:flex-row-reverse">
      <div style={{backgroundImage: `url(${Bg})`}} className="img lg:w-1/2 w-screen h-screen absolute lg:relative z-1"></div>
      <h1 className="absolute z-2 font-bold sm:text-9xl text-7xl text-white shadow-x lg:w-1/2 lg:relative px-3 h-screen flex flex-col items-center justify-center text-center lg:bg-custom1">Protect Your 2nd <span className="text-red-500 italic pr-3 inline-block">Heart</span></h1>
    </div>
    <div className="w-screen min-h-screen flex items-center justify-center pt-40 bg-custom1">
     <div style={{backgroundImage: `url(${Pic4})`}} className="w-10/12 h-screen img rounded-3xl flex items-center justify-center text-center">
     <h1 className="sm:text-8xl text-5xl font-bold shadow-x2 text-white px-10 italic">Lots Of Shoes With Different <span className="text-black">Models</span> & <span className="text-black">Colors</span></h1>
     </div>
    </div>
    <div className="w-screen min-h-screen flex flex-col items-center justify-center pt-40 bg-custom1">
      <h1 className="text-black font-bold text-4xl my-10 shadow-x3">Best Shoes Of The Year</h1>
      <div className="w-screen min-h-screen bg-custom1 grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 px-10">
      <div style={{backgroundImage: `url(${Pic5})`}} className="img w-full h-full rounded-2xl relative main">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black opacity-0 rounded-b-2xl on-hover transition-x">
        <p>White Nike</p>
        <p>$100</p>
      </div>
      </div>
      <div style={{backgroundImage: `url(${Pic2})`}} className="img w-full h-full rounded-2xl relative main">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black  rounded-b-2xl opacity-0 on-hover transition-x">
        <p>Gray Nike</p>
        <p>$120</p>
      </div>
      </div>
      <div style={{backgroundImage: `url(${Pic3})`}} className="img w-full h-full rounded-2xl main relative">
      <div className="text-white shadow-x font-bold text-2xl w-full flex items-center justify-around absolute bottom-0 py-5 bg-opacity-40 bg-black opacity-0 rounded-b-2xl on-hover transition-x">
        <p>Red Nike</p>
        <p>$90</p>
      </div>
      </div>
      </div>
    </div>
    <div className="w-screen pt-48 bg-custom1 flex flex-col items-center justify-center text-center pb-12 text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">
      <h1>Your Feet Will Thank You</h1>
      <a className="font-normal text-2xl bg-custom2 p-3 mt-5 shadow-b">Buy Right Now</a>
    </div>
    <footer className="text-center bg-custom1 font-bold pt-20 pb-2">Created By Tearex</footer>
    </>
  )
}

export default App