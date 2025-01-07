import Image from "next/image"
import pic from "/public/Images/mainpicture2.jpg"
import pic2 from "/public/Images/centerpic4.png"
import Comments from "../Comment/page"

export default function second(){
 return <div className="ex:w-full">
   <p className="lg:text-4xl w-full ex:text-3xl text-cyan-500 font-bold mt-[60px] lg:mb-[100px] ex:mb-[50px] lg:ml-0 ex:ml-[-8px] text-center">New winter holiday worksheets for middle schoolers</p>
   <Image src={pic} alt="" className="lg:w-[1530px] lg:h-[650px] ex:w-full"  />
   <p className="font-sans lg:text-[17px] ex:text-[13px] lg:mt-[40px] ex:mt-[20px] lg:w-[1400px] h-auto ex:w-full lg:pl-[50px] ex:pl-[10px]">Celebrate the season with Education.com’s new winter holiday worksheets for middle schoolers! These activities explore the history and traditions of Christmas, Hanukkah, and Kwanzaa, encouraging critical thinking and a global mindset. Whether students are researching, writing, or connecting with traditions, these resources offer a fun, thoughtful way to bring the holidays into the classroom!</p>
   <hr className="lg:flex ex:hidden w-[100px] border-[1px] border-gray-500 opacity-70 mt-[25px] mb-[30px] ml-[700px]" />
   <p className="font-sans lg:text-[30px] ex:text-[22px] lg:font-semibold ex:font-bold lg:ml-[50px] ex:ml-[10px] mb-[15px] mt-[40px]">Worksheets for Christmas</p>
   <Image src={pic2} alt="" className="lg:w-[1530px] lg:h-[650px] ex:w-full"  />
   <p className="font-sans lg:text-[17px] ex:text-[13px] mt-[40px] lg:w-[1400px] ex:w-full lg:pl-[50px] ex:pl-[10px]">Dive into Education.com’s fresh set of Reflective Writing Prompts and Research Graphic Organizers designed for Christmas! <br /> <br /> These worksheets prompt students to explore the history and meaning of Christmas, inspiring them to look beyond the presents and reflect on the gifts of love, peace, joy, and hope.  </p>
   <hr className="lg:flex ex:hidden w-[100px] border-[1px] border-gray-500 opacity-70 mt-[25px] mb-[120px] ml-[700px]" />
 <Comments />
</div>
}