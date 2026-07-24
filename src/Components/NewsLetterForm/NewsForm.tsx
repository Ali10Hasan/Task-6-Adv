
const NewsForm = () => {
  return (
    <div className="flex flex-col gap-y-[20px] md:gap-y-[30px] mt-[24px] md:mt-[32px] px-[20px] md:px-[40px]">
        <div className="head flex flex-col items-center">
        <p className="text-[#6941C6] font-[600] ">Newlatters</p>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-[600] text-[#1A1A1A] dark:text-[#FFFFFF] text-center">Stories and interviews</h1>
        <p className="text-[16px] md:text-[20px] text-[#667085] text-center w-full md:w-[80%] lg:w-[710px] dark:text-[#C0C5D0]">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
        </div>
        <div className="Forms flex flex-col sm:flex-row justify-center items-center sm:items-start gap-[10px]">
          <div className="inputs flex flex-col w-full sm:w-auto">
          <input type="text" placeholder="Enter your email" className="w-full sm:w-[280px] lg:w-[360px] h-[35px] border border-[#D0D5DD] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#7F56D9] dark:bg-white px-[10px]"/>
          <p className="text-[#C0C5D0] text-[13px] md:text-base">We care about your data in our privacy policy</p>
          </div>
          <div className="btn w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#7F56D9] text-white py-[5px] px-[20px] rounded-[4px] hover:bg-[#6941C6]">Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default NewsForm