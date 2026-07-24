import { createSlice } from "@reduxjs/toolkit";
import { DetailsBlogsByCategory, RecentBlogs, TotalBlog } from "../Data";
export interface BlogType{
      id:number,
      image:string,
      date:string,
      title:string,
      icone:string,
      desc:string,
      cate1:string,
      cate2:string,
      cate3?:string
}
export interface ImageDetailType {
  image: string;
  caption?: string;
  subCaption?: string;
  subTitle?: string;
  subCaption_one?: string;
  subCaption_two?: string;
  subCaption_three?: string;
  Title?: string;
}

interface DetailBlogType {
  date: string;
  title: string;
  imageDetails: ImageDetailType[];
}
interface initialStateType{
    TotalBlog:Array<BlogType>,
    RecentBlogs:Array<BlogType & {colSpan:string,rowSpan:string,className:string,extraClass?:string}>,
    FilterByPaginationBlogs:Array<BlogType>,
    RecentBlogsByCategory:Array<BlogType>,
    DetailsBlogsByCategory:Array<DetailBlogType>,
    DetailsBlogsByCategoryFilter:Array<DetailBlogType>,
    isDarkMode:boolean
}
const initialState:initialStateType={
  TotalBlog:TotalBlog.TotalBlog,
  RecentBlogs: RecentBlogs.RecentBlogs,
  FilterByPaginationBlogs:[],
  RecentBlogsByCategory:[],
  DetailsBlogsByCategory:DetailsBlogsByCategory.DetailsBlogsByCategory,
  DetailsBlogsByCategoryFilter:[],
  isDarkMode:false,
}

const Blogs=createSlice({
    name:"Blogs",
    initialState,
    reducers:{
        FilterByPagination:(state,action)=>{
            const startIndex = (action.payload.page - 1) * action.payload.itemsPerPage;
            const endIndex = startIndex + action.payload.itemsPerPage;
            state.FilterByPaginationBlogs = state.TotalBlog.slice(startIndex, endIndex);
        },
        ToggleDarkMode:(state)=>{
          state.isDarkMode=!state.isDarkMode
        },
        FilterByCategory: (state, action) => {
        const targetId = Number(action.payload);
        const allBlogs = [...state.TotalBlog, ...state.RecentBlogs];

   
        const targetCategories = allBlogs.reduce((acc: string[], blog) => {
        if (blog.id === targetId) {
            const categories = [blog.cate1, blog.cate2, blog.cate3,blog.title].filter(Boolean) as string[];
            return [...acc, ...categories];
        }
        return acc;
    }, []);
    
    state.RecentBlogsByCategory = allBlogs.filter((blog) => {
        return (
            targetCategories.includes(blog.cate1) ||
            targetCategories.includes(blog.cate2) ||
            (blog.cate3 ? targetCategories.includes(blog.cate3) : false)
        );
    });
    state.DetailsBlogsByCategoryFilter=state.DetailsBlogsByCategory.filter((blog:any)=>{
          return(
            targetCategories.includes(blog.title)
          )
    })
    console.log("Filtered Blogs by Category:", state.DetailsBlogsByCategoryFilter);
}
    }
})

export default Blogs.reducer
export const {FilterByPagination,ToggleDarkMode,FilterByCategory}=Blogs.actions