import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <> 

<nav className="fixed w-full z-50 top-0 start-0 bg-transparent flex flex-row self-start gap-8 mt-6 ml-7">
  <img src={logo} alt="" className='w-14 h-14 invert'/>

  <div className='ml-auto mr-12'>

      <a href="#" className="py-4 px-2 text-white font-semibold font-Saeda text-[20px] active:text-red-500">Home</a>
      <a href="#" className="py-4 px-2 text-white font-semibold font-Saeda text-[20px] active:text-red-500">About</a>
      <a href="#" className="py-4 px-2 text-white font-semibold font-Saeda text-[20px] active:text-red-500">Skill</a>
      <a href="#" className="py-4 px-2 text-white font-semibold font-Saeda text-[20px] active:text-red-500 ">History</a>
     <button className="bg-red-500 rounded-[30px] w-[115px] h-[50px] font-medium">Get Started</button>

  </div>

</nav>

    </>
  )
}

export default Navbar