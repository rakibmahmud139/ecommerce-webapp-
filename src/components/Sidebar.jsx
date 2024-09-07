import React from 'react'
import { Card } from './Card'

const Sidebar = () => {
    return (
        <div >
            <div className='flex gap-[36px]'>
                <div className="h-[1000px] w-[263px] pt-[40px] pl-[120px] pr-[264px] border-r-[1px] border-[#F4F4F4] mt-[64px]">

                    <div>
                        <p className='w-[231px] h-[53px] pt-[12px] pl-[24px] pb-[12px] pr-[24px] bg-[#0E0E0E] rounded-[8px] mb-[10px] font-barlow font-[600] text-[22px] leading-[26.4px] text-[#FFFFFF]'>Rocking chair</p>
                        <p className='w-[231px] h-[53px] pt-[12px] pl-[24px] pb-[12px] pr-[24px] font-barlow font-[600] text-[22px] leading-[26.4px] text-[#717171] mb-[10px] border-b-[1px] border-t-[1px]  border-[#F4F4F4]'>Side chair</p>
                        <p className='w-[231px] h-[53px] pt-[12px] pl-[24px] pb-[12px] pr-[24px] font-barlow font-[600] text-[22px] leading-[26.4px] text-[#717171] mb-[10px]'>Lounge chair</p>
                    </div>
                </div>
                <div className='flex-1 mt-[64px]'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Sidebar