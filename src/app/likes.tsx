'use client'

import React, {useState} from "react"

export default function Like(){
   const [like, setLike] = useState(0)
    
   const Clicks = () => {
    setLike(like + 1)
   }

 return <div className="w-[22px] h-[22px] rounded-[100%] text-[13px] font-bold text-white bg-red-600 pl-[5px] pt-[1px] hover:cursor-pointer" onClick={Clicks}>
      {like}
 </div>
}