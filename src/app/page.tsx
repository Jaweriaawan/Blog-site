import Image from "next/image"
import pic from "/public/Images/mainpicture1.png"
import pic2 from "/public/Images/mainpicture2.jpg"
import pic3 from "/public/Images/mainpicture3.jpg"
import pic4 from "/public/Images/mainpicture4.jpg"
import Link from "next/link"


export default function Home(){ 
 return <div className="mt-[80px]">
  <p className="text-sky-500 text-[20px] font-semibold ml-[100px] mb-[20px]">LATEST POSTS</p>
  <div className="ml-[100px]">
    <Link href="first">
    <div className="w-[960px] h-[300px] border-[2px] border-gray-300 flex gap-[150px] rounded-lg">
       <Image src={pic} alt="" className="w-[400px] h-[250px] ml-[20px] mt-[25px] rounded" />
       <div className="mt-[80px]">
         <p className="w-[360px] font-sans text-[20px] font-bold hover:opacity-60">Tackling the autumn slump: Teacher tips for when you hit the wall</p>
         <p className="text-gray-300 mt-[10px]">january 2, 2025</p>
         <p className="font-sans text-[17px] w-[370px] mt-[10px]">The back-to-school buzz has faded, and teachers and students have fallen into their routines. …</p>
       </div>
     </div> 
    </Link>

    <hr className="w-[950px] border-[1px] border-gray-500 opacity-40 mt-[40px] mb-[40px]" />

    <Link href="fourth">
    <div className="w-[960px] h-[300px] border-[2px] border-gray-300 flex gap-[150px] rounded-lg">
       <Image src={pic4} alt="" className="w-[400px] h-[250px] ml-[20px] mt-[25px] rounded" />
       <div className="mt-[80px]">
         <p className="w-[360px] font-sans text-[20px] font-bold hover:opacity-60">5 ways to help kids practice gratitude</p>
         <p className="text-gray-300 mt-[10px]">january 2, 2025</p>
         <p className="font-sans text-[17px] w-[370px] mt-[10px]">Gratitude is more than just saying “thank you!” It’s a powerful practice that helps …</p>
       </div>
     </div> 
    </Link>

    <hr className="w-[950px] border-[1px] border-gray-500 opacity-40 mt-[40px] mb-[40px]" />

    <Link href="third">
    <div className="w-[960px] h-[300px] border-[2px] border-gray-300 flex gap-[150px] rounded-lg">
       <Image src={pic3} alt="" className="w-[400px] h-[250px] ml-[20px] mt-[25px] rounded" />
       <div className="mt-[80px]">
         <p className="w-[360px] font-sans text-[20px] font-bold hover:opacity-60">Hands-on autumn activities for kids</p>
         <p className="text-gray-300 mt-[10px]">january 2, 2025</p>
         <p className="font-sans text-[17px] w-[370px] mt-[10px]">Halloween may be over but our love for pumpkins is still going strong and …</p>
       </div>
     </div> 
    </Link>

    <hr className="w-[950px] border-[1px] border-gray-500 opacity-40 mt-[40px] mb-[40px]" />

    <Link href="second">
    <div className="w-[960px] h-[300px] border-[2px] border-gray-300 flex gap-[150px] rounded-lg">
       <Image src={pic2} alt="" className="w-[400px] h-[250px] ml-[20px] mt-[25px] rounded" />
       <div className="mt-[80px]">
         <p className="w-[360px] font-sans text-[20px] font-bold hover:opacity-60">New winter holiday worksheets for middle schoolers</p>
         <p className="text-gray-300 mt-[10px]">january 2, 2025</p>
         <p className="font-sans text-[17px] w-[370px] mt-[10px]">Celebrate the season with Education.com’s new winter holiday worksheets for middle schoolers! These activities …</p>
       </div>
     </div> 
    </Link>
  </div>

  <hr className="w-[100px] border-[1px] border-gray-500 opacity-70 mt-[45px] mb-[50px] ml-[550px]" />
</div>    
}