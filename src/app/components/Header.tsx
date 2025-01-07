import Link from "next/link";
import { TiPencil } from "react-icons/ti";

export default function Header(){ 
 return <div className="lg:w-full ex:w-full flex justify-between ex:pr-[10px] lg:pr-[100px]">
   <Link href="/">
   <div className="flex lg:ml-[70px] w-full">
     <TiPencil className="text-cyan-600 lg:w-[60px] lg:h-[60px] ex:w-[45px] ex:h-[45px] -rotate-90" />
     <p className="lg:text-4xl ex:text-3xl text-cyan-600 lg:mt-[25px] ex:mt-[15px]">Education.com</p>
   </div>
   </Link>

   <Link href="About-me"><p className="font-sans lg:text-[20px] lgL:mt-[30px] ex:mt-[22px] text-cyan-600">About me</p></Link>
</div>
}