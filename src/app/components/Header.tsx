import Link from "next/link";
import { TiPencil } from "react-icons/ti";

export default function Header(){ 
 return <div className="flex justify-between pr-[100px]">
   <Link href="/">
   <div className="flex ml-[70px]">
     <TiPencil className="text-cyan-600 w-[60px] h-[60px] -rotate-90" />
     <p className="text-4xl text-cyan-600 mt-[25px]">Education.com</p>
   </div>
   </Link>

   <Link href="About-me"><p className="font-sans text-[20px] mt-[30px] text-cyan-600">About me</p></Link>
</div>
}