import Image from "next/image"
import pic from "/public/Images/mainpicture1.png"
import pic2 from "/public/Images/centerpic1.png"
import pic3 from "/public/Images/centerpic2.jpg"
import pic4 from "/public/Images/centerpic3.jpg"

export default function first(){
 return <div>
    <p className="text-4xl text-cyan-500 font-bold mt-[60px] mb-[100px] text-center">Tackling the autumn slump: Teacher tips for when you hit the wall</p>
    <Image src={pic} alt="" className="w-[1530px] h-[650px]" />
    <p className="font-sans text-[17px] mt-[40px] w-[1400px] ml-[50px]">The back-to-school buzz has faded, and teachers and students have fallen into their routines. But now, it feels like you’ve hit a wall, with energy and motivation taking a dip. Whether it’s the stress of parent-teacher conferences or the days getting shorter, you’re feeling drained and uninspired. Don’t worry, you’re not alone! Here are some fun and practical tips to help you break through the fall slump. </p>
    <hr className="w-[100px] border-[1px] border-gray-500 opacity-70 mt-[25px] mb-[30px] ml-[700px]" />
    <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[40px]">Get kids moving with active learning</p>
    <Image src={pic2} alt="" className="h-[650px] w-[1530px] bg-cover mt-[30px] mb-[20px]" />
    <p className="font-sans text-[17px] mt-[60px] w-[1400px] ml-[50px]">As the holiday break approaches, it’s common to feel a surge of energy in the classroom as students grow more excited and restless. Turn that restless energy into fun with productive, movement-based activities! Try interactive exercises, like scavenger hunts, to help kids refocus and stay engaged. Align it to your lessons or add a holiday twist by having students search for subject-specific or holiday-themed clues and objects. Get kids out of their desks to encourage collaboration, sharpen observation skills, and turn learning into an adventure. </p>
    <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[40px]">Refresh your classroom </p>
    <p className="font-sans text-[17px] mt-[15px] w-[1400px] ml-[50px]">Shake things up with a fresh seating chart! A simple classroom adjustment can bring new life into your daily routine and rejuvenate classroom dynamics. Customize your seating arrangement based on your students’ needs, whether it’s to improve participation or minimize distractions. New neighbors mean new opportunities for teamwork, keeping the learning environment lively and engaging! </p>
    <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[50px]">Use holiday cheer to build a positive classroom atmosphere</p>
    <div className="w-[750px] h-[500px] flex ml-[80px] mt-[60px]">
      <Image src={pic3} alt="" />
      <p className="w-[400px] h-[400px] text-[17px] font-sans ml-[40px] mt-[70px]">Embrace the festive spirit! This is the best time of year to inspire kids to practice gratitude. <br /><br />  One easy and meaningful way is to have your students write thank you notes to other teachers and staff members. This activity not only strengthens the classroom community but also helps students reflect on the positive impact others have had on their school experience. </p>
    </div>
    <p className="font-sans text-[30px] font-semibold ml-[50px] mt-[40px]">Take time to recharge</p>
    <Image src={pic4} alt="" className="w-[1530px] h-[700px]" />
    <p className="w-[1400px] text-[17px] font-sans ml-[40px] mt-[70px]">Don’t forget to give yourself a well-deserved break! Whether it’s going for a walk, getting lost in a great book, or exploring a new hobby, moments of relaxation can refuel your creativity. By taking care of your physical and mental well-being, you’ll return to the classroom refreshed, and ready to better support your students. </p>
    <hr className="w-[100px] border-[1px] border-gray-500 opacity-70 mt-[25px] mb-[30px] ml-[700px]" />
</div>
}