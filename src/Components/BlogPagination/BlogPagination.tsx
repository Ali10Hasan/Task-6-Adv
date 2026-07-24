import { useCallback, useEffect, useState } from "react"
import BlogCard from "../BlogCard/BlogCard"
import { useDispatch, useSelector } from "react-redux"
import type { RootStateType } from "../../Store"
import { FilterByPagination } from "../../Slices"

const getItemsPerPage = () => {
  if (window.innerWidth <= 500) return 1
  return 6
}

const BlogPagination = () => {

  const {BlogCardArray,TotalBlogs} = useSelector((state: RootStateType) => ({
        BlogCardArray: state.Blogs.FilterByPaginationBlogs,
        TotalBlogs:state.Blogs.TotalBlog
    })
  )
  const dispatch = useDispatch()

  
  const [activePage, setActivePage] = useState(1)
   const getPageNumbers = (totalPages: number): (number | string)[] => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        if (activePage <= 3) {
            return [1, 2, 3, "...", totalPages];
        }
        if (activePage >= totalPages - 2) {
            return [1, "...", totalPages - 2, totalPages - 1, totalPages];
        }
        return [1, "...", activePage - 1, activePage, activePage + 1, "...", totalPages];
    };
  const pages: (number | string)[] = getPageNumbers(Math.ceil(TotalBlogs.length / getItemsPerPage()));
  const numericPages = pages.filter((item): item is number => typeof item === "number")
  const lastPage = numericPages[numericPages.length - 1]

  const applyPagination = useCallback(
    (newPage: number) => {
      const currentItemsPerPage = getItemsPerPage()
      setActivePage(newPage)
      dispatch(
        FilterByPagination({
          page: newPage,
          itemsPerPage: currentItemsPerPage,
        })
      )
    },
    [dispatch]
  )

  useEffect(() => {
    applyPagination(1)

    const handleSize = () => {
      applyPagination(1)
      
    }
    
    window.addEventListener("resize", handleSize)

    return () => window.removeEventListener("resize", handleSize)
  }, [applyPagination])

  return (
    <div className="px-[20px] md:px-[40px] lg:px-[140px]">
      <div className="head-section font-[600] text-[20px] md:text-[24px]">
        All blog posts
      </div>

      <div className="grid mt-[20px] md:mt-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]">
        {BlogCardArray.map((item, index) => (
          <div key={item.id} className="col-span-1">
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

      <div className="flex items-center justify-between mt-[40px] md:mt-[60px] border-t border-t-gray-200 pt-[20px] gap-[10px]">
        <button
          className="flex items-center gap-2 text-[13px] md:text-[14px] font-[500] text-gray-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          disabled={activePage === 1}
          onClick={() => applyPagination(activePage - 1)}
        >
          <img src="/left.png" alt="previous" className="w-[15px] h-[15px]" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto">
          {pages.map((item, index) => {
            if (item === "...") {
              return (
                <span
                  key={index}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-600 shrink-0"
                >
                  ...
                </span>
              )
            }

            return (
              <button
                key={index}
                onClick={() => applyPagination(item as number)}
                className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-[8px] text-[13px] md:text-[14px] font-[500] ${
                  item === activePage
                    ? "bg-[#F9F5FF] text-[#7F56D9]"
                    : "text-gray-600"
                }`}
              >
                {item}
              </button>
            )
          })}
        </div>

        <button
          className="flex items-center gap-2 text-[13px] md:text-[14px] font-[500] text-gray-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          disabled={activePage === lastPage}
          onClick={() => applyPagination(activePage + 1)}
        >
          <span className="hidden sm:inline">Next</span>
          <img src="/right.png" alt="next" className="w-[15px] h-[15px]" />
        </button>
      </div>
    </div>
  )
}

export default BlogPagination