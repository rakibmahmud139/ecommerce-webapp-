import React from 'react'
import chairImg from '../assets/chair.svg'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import LogoDetails from '../components/LogoDetails';



export const SignUp = () => {
    return (
        <div className='flex justify-end'>
            <div className='bg-[#FAFAFA] border-[1px] border-[#F5F5F5] w-[500px] h-[618px] mb-[203px] mt-[203px] ml-[126px] mr-[126px] pt-[24px] pr-[24px] pb-[16px] pl-[24px] rounded-[8px]'>
                <div className='text-center'>
                    <h1 className='font-barlow font-[600] text-[24px] leading-[28.8px] text-[#000000] mb-2'>Welcome To</h1>
                    <h1 className='font-barlow font-[700] text-[40px] leading-[48px] text-[#000000] mb-1'>Furni<span className='font-barlow font-[700] text-[40px] leading-[48px] text-[#4977EE]'>Flex</span></h1>
                    <p className='font-barlow font-[500] text-[16px] leading-[19.2px] text-[#707070] mb-4'>Signup for purchase your desire products</p>
                </div>
                <div className='flex gap-[14px]'>
                    <input type="text" placeholder="First Name (Optional)" className="input font-barlow font-[400px] text-[14px] leading-[21px]  text-[#000000] w-[219px] h-[52px] rounded bg-[#FFFFFF] border-[1px] border-[#DEDEDE]" />
                    <input type="text" placeholder="Last Name (Optional)" className="input font-barlow font-[400px] text-[14px] leading-[21px]  text-[#000000] w-[219px] h-[52px] rounded bg-[#FFFFFF] border-[1px] border-[#DEDEDE]" />
                </div>
                <div className='mb-4'>
                    <input type="email" placeholder="Email Address" className="input font-barlow font-[400px] text-[14px] leading-[21px] text-[#000000] w-[452px] h-[52px] rounded bg-[#FFFFFF] border-[1px] border-[#DEDEDE] mt-[14px]" />
                    <input type="password" placeholder="Password" className="input font-barlow font-[400px] text-[14px] leading-[21px] text-[#000000] w-[452px] h-[52px] rounded bg-[#FFFFFF] border-[1px] border-[#DEDEDE] mt-[14px]" />
                    <div className='flex justify-items-center gap-1'>
                        <input type="checkbox" className="checkbox w-[11px] h-[11px] rounded-[2px] border-[1px] border-[#000000] mt-[14px]" />
                        <p className='font-barlow font-[500] text-[14px] leading-[16.8px] text-[#000000] mt-[11px]'>I agree to the <span className='border-b-[1px] border-[#000000]'>Terms & Policy</span></p>
                    </div>
                </div>
                <button className="w-[452px] h-[56px] rounded-[6px] bg-[#000000] font-barlow font-[600] text-[17px] leading-[17px] text-center text-[#FFFFFF] ">Signup</button>

                <div className="divider font-barlow font-[500] text-[12px] leading-[14.4px] text-center text-[#000000]">or</div>
                <div className='flex gap-[16px]'>
                    <button className="flex items-center justify-center space-x-2 pt-[14px] pr-[20px] pb-[14px] pl-[20px] w-[218px] h-[52px] rounded-[6px] border-[1px] border-[#D9D9D9] font-barlow font-[500] text-[12px] leading-[14.4px] text-[#000000] "><FcGoogle className='w-[20px] h-[20px]' /><span>Sign in with Google</span></button>
                    <button className="flex items-center justify-center space-x-2 pt-[14px] pr-[20px] pb-[14px] pl-[20px] w-[218px] h-[52px] rounded-[6px] border-[1px] border-[#D9D9D9] font-barlow font-[500] text-[12px] leading-[14.4px] text-[#000000] "><FaApple className='w-[20px] h-[20px]' /><span>Sign in with Apple</span></button>
                </div>
                <p className='font-barlow font-[500] text-[14px] leading-[16.8px] text-[#000000] pt-[24px] text-center'>Have an account?  <span className='text-[#0F3DDE]'>Sign In</span></p>
            </div>
            <div>
                <img className='w-[688px] h-[1024px]' src={chairImg} alt="" />
                <LogoDetails />
            </div>
        </div>
    )
}
