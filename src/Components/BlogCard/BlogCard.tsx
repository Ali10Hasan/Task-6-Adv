import { useNavigate } from "react-router-dom"
import type { BlogType } from "../../Slices"

const BlogCard = ({id,image,date,title,icone,desc,cate1,cate2,cate3,className}:BlogType&{className:string}) => {
  const navigation=useNavigate()
  return (
    <div className={`flex flex-col  gap-y-[16px] md:gap-y-[20px] w-full ${className=="Two"?"lg:flex-row ":className=="Three"?"lg:flex-row":""}`} >
        <div className="image cursor-pointer w-full" onClick={()=>navigation(`blog-details/${id}`)}>
            <img className={` rounded-[8px] lg:rounded-none ${className=="Three"?"lg:w-[600px]":""}`} src={image} alt="" />
        </div>
        <div className={`Details flex flex-col  gap-y-[8px] md:gap-y-[10px] lg:gap-y-[13px] ${className=="Two"?"lg:w-[508px] lg:h-[188px]":className=="Three"?"lg:w-[90%] ":"lg:w-[90%]"}`}>
            <p className="text-[13px] md:text-[14px] font-[600] text-[#6941C6]">{date}</p>
            <div className="flex justify-between items-center gap-x-[10px]">
            <h2 className={`${className=="Two"?"text-[16px] md:text-[18px]":"text-[20px] md:text-[24px] w-[90%] "} font-[600] text-[#1A1A1A] dark:text-[#ffffff]`}>{title}</h2>
            <img className={`w-[13px] h-[13px] shrink-0`}  src={icone} alt="" />
            </div>
            <p className="text-[14px] md:text-base text-[#667085] dark:text-[#ffffff93]">{desc}</p>
            <div className="btn flex flex-wrap gap-x-[10px] md:gap-x-[16px] gap-y-[8px]">
                <button className="rounded-[16px] bg-[#F9F5FF] dark:bg-[#e5d3fd] text-[#6941C6] px-[10px] py-[2px] text-[13px] md:text-base">{cate1}</button>
                <button className="rounded-[16px] bg-[#EEF4FF] dark:bg-[#cfe0fe] text-[#3538CD] px-[10px] py-[2px] text-[13px] md:text-base">{cate2}</button>
                {className==="one" && cate3 ?
                 (<button className="rounded-[16px] bg-[#FDF2FA] dark:bg-[#fcd5f2] text-[#C11574]  px-[10px] py-[2px] text-[13px] md:text-base">{cate3}</button>
                 ):""}
            </div>
        </div>
    </div>
  )
}

export default BlogCard