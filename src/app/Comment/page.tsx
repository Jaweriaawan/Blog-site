'use client';
import React, { useRef, useState, useEffect, KeyboardEvent } from 'react';
import { nanoid } from 'nanoid';
import { IoTrashOutline } from 'react-icons/io5';

// Define the Comment interface
interface Comment {
  title: string;
  id: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Initialize state with a typed array
  const commentRef = useRef<HTMLInputElement | null>(null); // Ensure ref handles null correctly

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments) as Comment[]);
      } catch (error) {
        console.error('Failed to parse comments from localStorage', error);
      }
    }
  }, []);

  // Save comments to localStorage whenever the comments state changes
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    } else {
      localStorage.removeItem('comments'); // Clear localStorage if no comments
    }
  }, [comments]);

  // Function to add a new comment
  const addComment = () => {
    const commentValue = commentRef.current?.value?.trim(); // Ensure value is trimmed
    if (commentValue) {
      setComments([{ title: commentValue, id: nanoid() }, ...comments]);
      if (commentRef.current) {
        commentRef.current.value = '';
      }
    }
  };

  // Handle Enter key press for adding a comment
  const handleKeyEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addComment();
    }
  };

  // Function to delete a comment by ID
  const deleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onKeyDown={handleKeyEnter}
          ref={commentRef}
          placeholder="Add a comment..."
          className="text-gray-400 text-[17px] lg:pl-[20px] ex:pl-[10px] pr-[40px] border-b-[1px] border-cyan-600 lg:ml-[60px] lg:mt-[100px] ex:mt-[120px] h-[35px] lg:w-[1300px] ex:w-full outline-none "
        />
        <button
          onClick={addComment}
          className="lg:w-[180px] ex:w-[140px] h-[50px] text-white bg-cyan-700 hover:opacity-70 rounded-lg lg:ml-[1150px] mt-[20px]"
        >
          Comment
        </button>
      </div>

      <ul className='mt-[80px]'>
        {comments.length === 0 ? (
          <p className="text-center mt-[120px] lg:text-[17px] ex:text-[13px] mb-[100px]">No Comments Yet</p>
        ) : (
          comments.map((comment) => (
            <li
              key={comment.id}
              className="lg:w-[1200px] ex:w-full h-auto lg:ml-[150px] bg-cyan-800 flex justify-between rounded-lg text-white pl-[20px] py-[10px] px-[20px] text-[17px] font-sans mt-[12px] ex:ml-[10px] lg:mr-0 ex:mr-[10px]"
            >
              <span>{comment.title}</span>
              <IoTrashOutline
                className="w-[20px] h-[20px] mt-[4px] cursor-pointer"
                onClick={() => deleteComment(comment.id)}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );            
};

export default Comments;
