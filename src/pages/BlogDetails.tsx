import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { FilterByCategory, type ImageDetailType } from "../Slices"
import type { RootStateType } from "../Store"
import BlogCard from "../Components/BlogCard/BlogCard"
import NewsForm from "../Components/NewsLetterForm/NewsForm"

const BlogDetails = () => {
  const {id}=useParams()
  const RecentBlogsByCategory=useSelector((state:RootStateType)=>state.Blogs.RecentBlogsByCategory)
  const DetailsBlogsByCategoryFilter=useSelector((state:RootStateType)=>state.Blogs.DetailsBlogsByCategoryFilter)
  const RecentBlogsSlice=RecentBlogsByCategory.slice(0,9)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(FilterByCategory(id))

  },[id])
  
   const renderImageContent = (image: ImageDetailType, imgIndex: number) => {
    switch (imgIndex) {
      case 0:
        return (
          <div className="text-[#667085] dark:text-[#C0C5D0]">
            <p className="text-[13px] md:text-[14px] w-full lg:w-[70%]">{image.caption}</p>
            <p className="text-[15px] md:text-[16px] ml-0 lg:ml-[100px] mt-2 text-center font-[700] w-full lg:w-[55%] ">{image.subCaption}</p>
          </div>
        )
      case 1:
        return (
          <div className="text-[16px]  text-[#667085] dark:text-[#C0C5D0]  font-[400] ">
            <p >{image.caption}</p>
            <p className="text-gray-700 dark:text-[#C0C5D0] text-[20px] font-[700]">{image.subTitle}</p>
            <p >{image.subCaption_one}</p>
            <p >{image.subCaption_two}</p>
            <p >{image.subCaption_three}</p>
          </div>
        )
      case 2:
        return (
          <div className="dark:text-[#C0C5D0]">
            <h3 className="text-xl font-bold ">{image.Title}</h3>
            <p className="text-gray-700 dark:text-[#C0C5D0]">{image.subTitle}</p>
            <p className="text-gray-600 dark:text-[#C0C5D0]">{image.caption}</p>
          </div >
        )
      default:
        return (
          <div className="dark:text-[#C0C5D0]">
            <p className="text-gray-600 dark:text-[#C0C5D0]">{image.caption}</p>
            <h3 className="text-lg font-semibold dark:text-[#C0C5D0]">{image.Title}</h3>
            <p className="text-gray-500 dark:text-[#C0C5D0]">{image.subCaption}</p>
          </div >
        )
    }
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] md:w-[87%]  lg:gap-y-0 gap-x-[40px] mx-auto">

      <div className="grid lg:col-span-1 gap-y-[24px] md:gap-y-[32px] order-2 lg:order-1">
            {RecentBlogsSlice.map((item,index)=>{
              return(
                <div key={item.id}>
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
                </div>
              )
            })}
      </div>
      <div className="lg:col-span-3 order-1 lg:order-2">
    {DetailsBlogsByCategoryFilter.map((item: any, index: any) => {
    return (
      <div key={index} className="grid gap-y-[24px] md:gap-y-[32px]">
        <p className="text-[#6941C6] text-[13px] md:text-[14px] ">{item.date}</p>
        <h1 className="text-[24px] md:text-[32px] dark:text-[#ffffff] font-[700] w-full lg:w-[56%] ">{item.title}</h1>
        {item.imageDetails?.map((image:ImageDetailType, imgIndex:number) => {
          return (
            <div key={imgIndex}>
              <img className="w-full h-auto object-cover mb-[14px] md:mb-[20px] lg:w-auto lg:h-auto" src={image.image} alt="" />
              {renderImageContent(image, imgIndex)}
            </div>
          )
        })}
      </div>
    )
  })}
    <NewsForm/>
</div>
    </div>
  )
}

export default BlogDetails