'use client'
import React, {useRef, useState, useEffect} from "react"
import { nanoid } from "nanoid"
import { IoTrashOutline } from "react-icons/io5";

export default function Comments(){
    const [comment , setComment] = useState([])
    const CommentRef = useRef()

    useEffect(() => {
        const SavedComments = localStorage.getItem("comments")
        console.log("load comments from localstorage", SavedComments)
        if(SavedComments){
            setComment(JSON.parse(SavedComments))
        }
    }, [])


    useEffect(() => {
      console.log("saving comments to localstorage", comment)
      if(comment.lenght > 0){
        localStorage.setItem("comment", JSON.stringify(comment))
      } 
    }, [comment]);

    const AddComments = () => {
       const CommentValue = CommentRef.current.value 
       setComment([{title:CommentValue, id:nanoid()}, ...comment])
       if (CommentRef.current){
         CommentRef.current.value = " "
       }
    }
    
    function OnKeyEnter (my_key) {
        console.log(my_key.key)
      if (my_key.key === 'Enter'){
        AddComments()
      }
    }

    function deleteComment (e) {
        setComment(comment.filter((elem) => elem.id !== e))
    }

  return (
    <div>
        <div >
           <input type="text" onKeyDown={OnKeyEnter} ref={CommentRef} placeholder="comment..." className="text-gray-400 text-[17px] pl-[20px] pr-[40px] pt-[px] border-b-[1px] border-cyan-600 ml-[60px] h-[35px] w-[1300px] outline-none" />
           <button onClick={AddComments} className="w-[180px] h-[50px] text-white bg-cyan-700 hover:opacity-70 rounded-lg ml-[1150px] mt-[20px]">Comment</button>
        </div>

        <ul>
            <li className="mt-[120px]">
                {
                    comment.length == 0? <p className="text-center">No Comments Yet</p> : comment.map((elem) => {
                        return <div className="w-[1200px] h-auto ml-[150px] bg-cyan-800 flex justify-between rounded-lg text-white pl-[20px] py-[10px] px-[20px] text-[17px] font-sans mt-[12px]">
                             <li key={elem.id}>{elem.title}</li>
                             <IoTrashOutline className="w-[20px] h-[20px] mt-[4px]" onClick={() => {deleteComment(elem.id)}} />
                        </div>
                    })
                }
            </li>
        </ul>
    </div>

    
  )
 
}


