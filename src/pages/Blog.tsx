import Hero from '../Components/Hero/Hero'
import BlogCard from '../Components/BlogCard/BlogCard'
import BlogPagination from '../Components/BlogPagination/BlogPagination'
import { useSelector } from 'react-redux'
import type { RootStateType } from '../Store'
import { Outlet } from 'react-router-dom'

const Blog = () => {
  const blogs = useSelector((state: RootStateType) => state.Blogs.RecentBlogs)

  return (
    <div className="Blog ">
      <Hero />
      <div className="head-section mt-[24px] md:mt-[30px] px-[20px] md:px-[40px] lg:px-[140px] font-[600] text-[20px] md:text-[24px]">
        Recent blog posts
      </div>
      {/* Desktop bento grid — untouched, exactly as it was on large screens */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-4  px-[140px]">
        {blogs.map((item, index) => (
          <div
            key={item.id}
            className={`${item.colSpan} ${item.rowSpan} ${item.extraClass || ''}`}
          >
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
              className={item.className}
            />
          </div>
        ))}
      </div>

      {/* Mobile/tablet stacked layout */}
      <div className="grid lg:hidden grid-cols-1 mt-[20px] md:mt-[24px] px-[20px] md:px-[40px] gap-y-[24px] md:gap-y-[28px]">
        {blogs.map((item) => (
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
        ))}
      </div>
      <BlogPagination />
      
    </div>
  )
}

export default Blog