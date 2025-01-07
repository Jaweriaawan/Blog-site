import Image from "next/image"
import pic from "/public/Images/about-me picture.jpg"

export default function Comment(){
 return <div>
   <div className="flex lg:w-[1300px] ex:w-full lg:h-[500px] ex:h-[400px] justify-between mt-[80px] lg:ml-[100px] lg:pl-[70px] ex:pl-[20px]">
      <Image src={pic} alt="" className="lg:flex ex:hidden w-[300px] h-[300px] rounded-[100%] bg-cover blur-sm mt-[120px]" />
      <div className="font-sans lg:mt-[110px] ex:mt-[20px]">
         <p className="-rotate-12 lg:mb-[85px] ex:mb-[50px] text-[18px] font-semibold lg:ml-[-25px] ex:ml-[-20px] text-cyan-700 hover:opacity-60">Hyy</p>
         <p className="text-[22px] mb-[10px] font-semibold hover:opacity-50">I'm JAWERIA</p>
         <p className="text-[18px] lg:w-[700px] ex:w-full">"A passionate frontend developer with a knack for turning Figma designs into stunning, responsive websites. Skilled in leveraging modern tools and technologies to create seamless user experiences that bring ideas to life."</p>
      </div>
   </div>
</div>
}