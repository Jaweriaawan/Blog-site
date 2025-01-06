import Image from "next/image"
import pic from "/public/Images/mainpicture4.jpg"
import pic1 from "/public/Images/centerpic14.jpg"
import pic2 from "/public/Images/centerpic15.jpg"
import pic3 from "/public/Images/centerpic16.jpg"
import pic4 from "/public/Images/centerpic17.jpg"

export default function Fourth(){
 return <div>
   <p className="text-4xl text-cyan-500 font-bold mt-[60px] mb-[100px] text-center">5 ways to help kids practice gratitude </p>
   <Image src={pic} alt="" className="w-[1530px] h-[750px]" />
   <p className="w-[1400px] text-[17px] font-sans ml-[40px] mt-[70px]">Gratitude is more than just saying “thank you!” It’s a powerful practice that helps children develop a positive mindset, improve their emotional well-being, and build stronger relationships. And it’s never too early to start teaching kids the value of gratitude! <br /> <br /> By encouraging them to reflect on the things they’re thankful for, you’re setting the foundation for a lifetime of appreciation and kindness. Here are a few meaningful activities to help your kids practice gratitude in fun and impactful ways.</p>
   <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[40px]">1. Gratitude Calendar</p>
   <div className="flex ml-[80px] mt-[40px]">
     <Image src={pic1} alt="" className="w-[500px]" />
     <p className="w-[350px] ml-[40px] mt-[50px]">A great way to help children start a gratitude practice is to make it part of their daily routine! With this calendar template, your child can reflect on one thing they’re thankful for each day by writing or drawing it on the date. This worksheet encourages kids in fifth through eighth grade to build social-emotional skills that can grow with them over time. <br /><br />For younger children, try our A Week of Gratitude worksheet, perfect for the week leading up to Thanksgiving!</p>
   </div>

   <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[80px]">2. Give Thanks Acrostic Poem</p>
   <div className="flex ml-[80px] mt-[40px]">
     <Image src={pic2} alt="" className="w-[400px]" />
     <p className="w-[350px] ml-[60px] mt-[150px]">Inspire young learners to explore gratitude in a fun, creative way with this acrostic poem activity! Using the word “thanks” as a starting point, kids will craft an original poem, with each letter sparking a new idea about what they’re grateful for. It’s an easy, engaging way for children to practice gratitude while building their writing and self-reflection skills.</p>
   </div>

   <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[80px]">4. Gratitude Sunburst</p>
   <div className="flex ml-[80px] mt-[40px]">
     <Image src={pic3} alt="" className="w-[400px]" />
     <p className="w-[350px] ml-[60px] mt-[150px]">Brighten your child’s day with this cheerful worksheet! This fun activity invites little ones to draw something they’re appreciative for in each sunray, helping kindergarten through second graders cultivate thankfulness and boost their empathy and mindfulness. Great for Thanksgiving or any time of year, it’s a simple way for kids to explore the world with a thankful heart, supporting both their mental and physical well-being. </p>
   </div>

   <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[80px]">5. Gratitude Pie</p>
   <div className="flex ml-[80px] mt-[40px]">
     <Image src={pic4} alt="" className="w-[400px]" />
     <p className="w-[350px] ml-[60px] mt-[150px]">Similar to the worksheet above, this activity is ideal for children in fourth through eighth grade. Each slice of the pie represents something they’re thankful for, from a favorite memory to a comforting smell. With prompts for unique reflections on people, objects, activities, and more, kids will enjoy expressing gratitude in creative ways. </p>
   </div>
   <hr className="w-[100px] border-[1px] border-gray-500 opacity-70 mt-[25px] mb-[30px] ml-[700px]" />
</div>
}