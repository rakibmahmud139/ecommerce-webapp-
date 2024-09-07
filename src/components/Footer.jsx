import React from 'react'
import { TbBrandFacebook } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";




export const Footer = () => {
    return (
        <div className='bg-[#0E0E0E] w-[1440px] h-[590px] pt-[80px] pl-[120px] pr-[120px] '>
            <div className='flex items-center gap-64'>
                <div className='flex items-center gap-[6px]'>
                    <h1 className='font-lucida font-[400] text-[24px] leading-[27px] text-[#000000] w-[38px] h-[38px] rounded-[42px]  pr-2 pl-2 pt-2 bg-[#1E99F5]'>F</h1>
                    <h1 className='font-barlow font-[700] text-[20px] leading-[24.2px] text-[#FFFFFF] mb-1'>Furni<span className='font-barlow font-[700] text-[20px] leading-[24.2px] text-[#4977EE]'>Flex</span></h1>
                </div>
                <div className='flex gap-12'>
                    <div>
                        <h1 className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#FFFFFF] mb-[28px]'>About Us</h1>
                        <div> <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Master Plan</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Jobs</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Invest</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Pressroom</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Blog</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Contact</p></div>
                    </div>
                    <div >
                        <h1 className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#FFFFFF] mb-[28px]'>Explore EEVE</h1>
                        <div> <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Unlock My Robot Power</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Starlight</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Robot Platform</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>EEVE Roadmap</p>
                        </div>
                    </div>
                    <div >
                        <h1 className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#FFFFFF] mb-[28px]'>Community & Support</h1>
                        <div> <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Willow X Community</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Developer & Maker Access</p>
                            <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] mb-[14px]'>Special Cases</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-t-[1px] border-[#252948] mt-20'>
                <div className='ml-[2px] flex justify-between items-center mt-10'>
                    <div className=' flex'>
                        <TbBrandFacebook className='w-[20px] h-[20px]' />
                        <FaInstagram className='w-[20px] h-[20px] mx-3' />
                        <FaXTwitter className='w-[20px] h-[20px]' />
                        <SlSocialLinkedin className='w-[20px] h-[20px] ml-3' />
                    </div>
                    <div className='flex gap-4'>
                        <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] '>March22 Recap</p>
                        <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] '>Privacy Policy</p>
                        <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] '>General Terms</p>
                        <p className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#81859F] '>Contact</p>
                    </div>
                    <p>United States (English)</p>
                </div>
            </div>
        </div>
    )
}
