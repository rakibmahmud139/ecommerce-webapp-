import React from 'react'
import { BsBucket } from "react-icons/bs";


const Navbar = () => {
    return (
        <div className="navbar pt-[40px] pl-[120px] pb-[40px] pr-[120px] border-b-[1px] border-[#F1F1F1]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Home</a></li>
                        <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Products</a></li>
                        <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Categories</a></li>
                        <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Custom</a></li>
                        <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Blog</a></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-[6px]'>
                    <h1 className='font-lucida text-center font-[400] text-[24px] leading-[27px] text-[#000000] w-[38px] h-[38px] rounded-[42px]  pr-2 pl-2 pt-2 bg-[#1E99F5]'>F</h1>
                    <h1 className='font-barlow font-[700] text-[20px] leading-[24.2px] text-[#000000] mb-1'>Furni<span className='font-barlow font-[700] text-[20px] leading-[24.2px] text-[#4977EE]'>Flex</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Home</a></li>
                    <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Products</a></li>
                    <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Categories</a></li>
                    <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Custom</a></li>
                    <li><a className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#202020]'>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='mr-[64px]'> <BsBucket className='w-[33px] h-[34px]' /></div>
                <div className="avatar">
                    <div className=" w-[40px] h-[40px] rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar