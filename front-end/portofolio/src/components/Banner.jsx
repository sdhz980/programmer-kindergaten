import arrow from '../assets/arrow.png'

const Banner = () => {
  return (
    <>  
        <div className="pl-[15vw] pr-[15vw] h-[100vh] bg-red-700">
          
          <div className="flex flex-wrap gap-8 justify-center pt-[40vh]">

              <div className="text-white font-Saeda">
                  <h1 className="text-[62px]">Hi!</h1>
                  <h1 className="text-[40px]">My Name is</h1>
              </div>

              <div className="font-Saeda mt-[70px] text-[60px]">
                <h2>Shadam Husain</h2>
              </div>

                <div className='basis-full w-0'></div>
                
                <div className='text-white font-Saeda text-[40px] mt-[-45px] tracking-[8.5px]'><h1>Im Full Stack Programmer</h1></div>

          </div>

              <div className="pl-[15vw] pr-[15vw] text-center mt-24">
                <h1>Scroll down for more</h1>
                <img src={arrow} alt="" className='h-[80px] w-[80px] ml-auto mr-auto mt-12'/>
              </div>


        </div>
    </>
  )
}

export default Banner