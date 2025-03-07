import React, { useState , useRef } from 'react'

const Home = () => {

    const [note , setNotes] = useState("");
    const [submittedNote , setSubmittedNote] = useState([]);


   

    function makeNote(e){
        e.preventDefault();
        if(note.trim()==="") return;
       setSubmittedNote([...submittedNote , note]);
       setNotes("")
    }

  return (
      <div className='w-full flex justify-center items-center flex-col' >
        <div>
        <h1 className='font-bold text-2xl text-blue-600 mt-4'>Welcome to NotesPhile</h1>
        </div>

        <div className=''>
            <form action="" onSubmit={makeNote}>
                <textarea type="text" placeholder='Whats on your Mind ? ' className=' mt-10 border-4 border-blue-800 rounded-lg w-96 h-56 px-4 py-2 font-sans'  value={note} onChange={(e)=> setNotes(e.target.value)} />
                <br />
                <button  type='Submit'  className='px-3 py-4 bg-blue-100 rounded-lg text-blue-600 font-semibold  border-b-4 border-blue-600 ml-36 mt-4 transition-transform active:scale-90 '>
                    Create Note
                </button>
            </form>
                
                {submittedNote.slice().reverse().map((note , index) => (
<div  
key={index}
    
    className='bg-blue-200 text-black from-neutral-400 w-96 h-40 border-b-4 border-blue-600 mt-16 rounded-xl px-5 py-2  '>
                
               {note}
            </div>
                ))}

              


        </div>
    </div>
  )
}

export default Home
