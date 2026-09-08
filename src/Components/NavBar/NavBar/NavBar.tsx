import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import type { RootStateType } from "../../../Store";
import { ToggleDarkMode } from "../../../Slices";

interface NavElement {
    path: string,
    content: string
}

interface NavBarProps {
    logo: string;
    NavElement: {
        list: NavElement[];
        modeIcon: string[];
    };
}

const NavBar = ({ logo, NavElement }: NavBarProps) => {
    const isDarkMode = useSelector((state: RootStateType) => state.Blogs.isDarkMode)
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleChangeMode = () => {
        dispatch(ToggleDarkMode())
    }

    return (
        <div className="NavBar relative w-full h-auto lg:h-[60px] px-[20px] py-[16px] md:px-[40px] md:py-[24px] lg:px-[100px] lg:py-[55px] flex justify-between items-center">
            <div className="logo font-[700]">
                <h2 className="dark:text-[#ffffff]">{logo}</h2>
            </div>

            <button
                type="button"
                className="lg:hidden flex items-center justify-center w-[28px] h-[28px] cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                {isMenuOpen ? (
                    isDarkMode?<img src="/The-Blog/Exist.png"  alt="" />:<img src="/The-Blog/Exist1.png"  alt="" />
                   
                ) : (
                    <img className="w-[22px] h-[22px] dark:invert" src="/The-Blog/menu%20(1).png" alt="menu" />
                )}
            </button>

            <div className={`navElement ${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col items-center justify-center lg:flex-row gap-[20px] lg:gap-[15px] absolute lg:static top-full left-0 w-full lg:w-auto bg-white dark:bg-[#090D1F] px-[20px] py-[20px] lg:p-0  lg:items-center shadow-md lg:shadow-none z-50`}>
                {NavElement.list.map((item, index) => {
                    return (

                        <div key={index} className="navItem group relative " onClick={() => setIsMenuOpen(false)}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "dark:text-[#ffffffff]" : "dark:text-[#ffffff93] "
                                }
                            >
                                {item.content}
                            </NavLink>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-400 w-0 bg-[#6941C6] group-hover:w-full dark:bg-[#ffffff]"></span>
                        </div>
                    )
                })}
                <div className="Mode w-[90px] h-[27px] p-3 cursor-pointer bg-black dark:bg-[#ffffff] flex rounded-[29px] items-center justify-center gap-[10px] mt-[10px] lg:mt-0">
                    <img className="w-[24px] h-[24px] dark:invert" onClick={() => { isDarkMode ? handleChangeMode() : null }} src={NavElement.modeIcon[0]} alt="mode" />
                    <img className="w-[24px] h-[24px] dark:invert" onClick={() => { !isDarkMode ? handleChangeMode() : null }} src={NavElement.modeIcon[1]} alt="mode" />
                </div>
            </div>
        </div>
    )
}

export default NavBar
