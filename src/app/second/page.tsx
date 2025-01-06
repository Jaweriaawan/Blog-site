import Image from "next/image"
import pic from "/public/Images/mainpicture2.jpg"
import pic2 from "/public/Images/centerpic4.png"
import Comments from "../Comment/page"

export default function second(){
 return <div>
   <p className="text-4xl text-cyan-500 font-bold mt-[60px] mb-[100px] text-center">New winter holiday worksheets for middle schoolers</p>
   <Image src={pic} alt="" className="w-[1530px] h-[650px]"  />
   <p className="font-sans text-[17px] mt-[40px] w-[1400px] ml-[50px]">Celebrate the season with Education.com’s new winter holiday worksheets for middle schoolers! These activities explore the history and traditions of Christmas, Hanukkah, and Kwanzaa, encouraging critical thinking and a global mindset. Whether students are researching, writing, or connecting with traditions, these resources offer a fun, thoughtful way to bring the holidays into the classroom!</p>
   <hr className="w-[100px] border-[1px] border-gray-500 opacity-70 mt-[25px] mb-[30px] ml-[700px]" />
   <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[40px]">Worksheets for Christmas</p>
   <Image src={pic2} alt="" className="w-[1530px] h-[650px]"  />
   <p className="font-sans text-[17px] mt-[40px] w-[1400px] ml-[50px]">Dive into Education.com’s fresh set of Reflective Writing Prompts and Research Graphic Organizers designed for Christmas! <br /> <br /> These worksheets prompt students to explore the history and meaning of Christmas, inspiring them to look beyond the presents and reflect on the gifts of love, peace, joy, and hope.  </p>
   <hr className="w-[100px] border-[1px] border-gray-500 opacity-70 mt-[25px] mb-[120px] ml-[700px]" />
 <Comments />
</div>
}