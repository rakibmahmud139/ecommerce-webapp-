import img1 from '../assets/img1.svg'
import { BsBucket } from "react-icons/bs";


export const Card = () => {
    return (
        <div className="w-[277px] h-[484px] border-[1px] border-[#F1F1F1] p-[16px] rounded-[16px]">
            <img src={img1} alt="" className='w-[245px] h-[236px] rounded-[8px]' />
            <h1 className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#343434] mt-[32px]'>Recliner Chair Wood</h1>
            <p className='font-barlow font-[700] text-[18px] leading-[21.6px] text-[#343434] mt-[16px] '>€299.00 <span className='font-barlow font-[500] text-[18px] leading-[21.6px] text-[#ABABAB] text-center line-through ml-[8px]'>€350.00</span><span className='font-barlow font-[600] text-[18px] leading-[21.6px] text-[#B92E2E] text-center ml-[8px]'>30% OFF</span></p>
            <p className='font-barlow font-[400] text-[14px] leading-[16.8px] text-[#838383] mt-[16px]'>It has a backrest that can be tilted back, and often a footrest extended</p>
            <button className='flex justify-center items-center gap-[14px] w-[245px] h-[42px] rounded-[5px] bg-[#202020] mt-[16px] text-[#FFFFFF]'><BsBucket className='w-[17.44px] h-[18px]' /><span className='font-barlow font-[600] text-[16px] leading-[19.2px] text-[#FFFFFF]'>Add to cart</span></button>
        </div>
    )
}
