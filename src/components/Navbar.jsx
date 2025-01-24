import React from 'react'
import logo from "../assets/hero.png"
import { NavLink } from 'react-router-dom'
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

const Navbar = () => {

    const { setTheme } = useTheme()

    return (
        <nav className='z-50 sticky top-0'>
            <div className='flex items-center justify-between border-b border-gray-500/20   px-12 py-2.5 backdrop-blur '>
                {/* Logo */}
                <div className='flex items-center '>
                    <img src={logo} alt="logo" className='w-16' />
                    <h1 className='text-2xl font-bold '>GFGSC-GCET</h1>
                </div>

                {/* combined */}
                <div className='md:flex gap-5 items-center hidden'>
                    {/* Links */}
                    <div>
                        <ul className='flex gap-2.5 dark:text-gray-200 text-gray-950 font-medium'>
                            <li><NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `transition-all duration-200  hover:text-dgreen ${isActive ? 'text-dgreen' : ''}`
                                }
                            >
                                Home
                            </NavLink></li>
                            <li><NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `transition-all duration-200  hover:text-dgreen ${isActive ? 'text-dgreen' : ''}`
                                }
                            >
                                About
                            </NavLink></li>
                            <li><NavLink
                                to="/team"
                                className={({ isActive }) =>
                                    `transition-all duration-200  hover:text-dgreen ${isActive ? 'text-dgreen' : ''}`
                                }
                            >
                                Team
                            </NavLink></li>
                            <li><NavLink
                                to="/events"
                                className={({ isActive }) =>
                                    `transition-all duration-200  hover:text-dgreen ${isActive ? 'text-dgreen' : ''}`
                                }
                            >
                                Events
                            </NavLink></li>
                            <li><NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    `transition-all duration-200 hover:text-dgreen  ${isActive ? 'text-dgreen' : ''}`
                                }
                            >
                                Blogs
                            </NavLink></li>
                        </ul>
                    </div>

                    {/* Sign in button */}
                    <div>
                        <button className='bg-dgreen  text-white font-medium px-5 py-2 rounded-md hover:bg-dgreen/90 dark:hover:bg-dgreen/80 transition-all duration-300'>Sign in</button>
                    </div>

                    {/* Theme toggeler */}
                    <div className=''>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar