import React from 'react'
import NewsForm from '../Components/NewsLetterForm/NewsForm'
import { useSelector } from 'react-redux'
import type { RootStateType } from '../Store'
import BlogCard from '../Components/BlogCard/BlogCard'

const Newsletter = () => {
  const RecentBlogs=useSelector((state:RootStateType)=>state.Blogs.TotalBlog)
  const RecentBlogsSlice=RecentBlogs.slice(0,3)
  return (
    <div>
        <NewsForm/>
        <div className="NewletterCard mt-[30px] md:mt-[50px]">
            <p className='px-[20px] md:px-[40px] lg:px-[90px] py-[20px] md:py-[30px] text-[20px] md:text-[24px] font-[700]'>Recent Blogs</p>
            <div className="RecentCardNewsLetter flex flex-col lg:flex-row justify-center items-stretch gap-y-[24px] lg:gap-x-[24px] mx-auto w-[90%] md:w-[88%]">
            {RecentBlogsSlice.map((item,index)=>{
              return(
                  <BlogCard
                    id={item.id}
                    image={item.image}
                    date={item.date}
                    title={item.title}
                    icone={item.icone}
                    desc={item.desc}
                    cate1={item.cate1}
                    cate2={item.cate2}
                    cate3={item.cate3}
                    className="one"
                  />
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Newsletter