
const Hero = () => {
    return (
        // background image
      <div className="bg-[url('/hero1.jpg')] bg-no-repeat bg-cover bg-center h-[85vh] px-[200px]">
      
          <div className="flex flex-col text-white w-[50%] pt-[10%]">
  
              <span className="text-[42px] mt-3">
                Donate <span className="text-[#E94545]">blood</span>, Save <span className="text-[#E94545]">life</span>!
              </span>

              <h1 className="text-[52px] font-bold mt-3">
                Your <span className="text-[#E94545]">Blood</span> Can Bring <span className="text-[#E94545]">Smile</span> In Other Person Life.
              </h1>
  
              <div className="flex items-center mt-[20px]">
                      <button className="bg-red-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">Donate Now</button>
                      <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">CALL : (+91) 9119073653</button>
              </div>
  
          </div>
      </div>
    )
  }
  
  export default Hero