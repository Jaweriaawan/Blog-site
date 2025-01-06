import Image from "next/image"
import pic from "/public/Images/about-me picture.jpg"

export default function Comment(){
 return <div>
   <div className="flex w-[1300px] h-[500px] justify-between mt-[80px] mb-[100px] ml-[100px] pl-[70px]">
      <Image src={pic} alt="" className="w-[300px] h-[300px] rounded-[100%] bg-cover blur-sm mt-[120px]" />
      <div className="font-sans mt-[110px]">
         <p className="-rotate-12 mb-[85px] text-[18px] font-semibold ml-[-25px] text-cyan-700 hover:opacity-60">Hyy</p>
         <p className="text-[22px] mb-[10px] font-semibold hover:opacity-50">I'm JAWERIA</p>
         <p className="text-[18px] w-[700px]">"A passionate frontend developer with a knack for turning Figma designs into stunning, responsive websites. Skilled in leveraging modern tools and technologies to create seamless user experiences that bring ideas to life."</p>
      </div>
   </div>
</div>
}