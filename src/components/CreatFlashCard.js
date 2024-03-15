// import React, { useState } from 'react';
// import TermCard from './TermCard';
// import { useDispatch } from 'react-redux';
// import { addFlashcard } from '../store/flashcardsSlice';
// const CreatFlashCard = () => {
 
//   const [groupName,setGroupName]= useState('')
//   const [description, setDescription]= useState('')
// const dispatch = useDispatch()

//   const handleSubmit=(e)=>{
//       e.preventDefault()
//       dispatch(addFlashcard({ groupName, description }));
    
//      setGroupName('');
//      setDescription('');
//   }

//   return (
//     <div>

//     <div className='w-9/12 m-auto mt-2  pl-5 py-5 bg-white shadow-md'>
//       <form onSubmit={handleSubmit}>
//         <div className='flex flex-col '>
//            <label className='text-zinc-500 font-bold text-lg' htmlFor="">Group Name* </label>
//            <input type="text" placeholder='Group Name' value={groupName} 
//            onChange={(e) => setGroupName(e.target.value)} className='w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold'/>

//            <label className='text-zinc-500 mt-4 font-bold text-lg' htmlFor=""> Add Description* </label>
//            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Write your thoughts here...' className='w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold'/>
//         </div>
       
//       </form>
      
//     </div>
//     <div  className='w-9/12 m-auto  pl-5 py-5 bg-white mt-5 shadow-md mb-10'>
//        <TermCard/>
//     </div>
//     <div className='flex justify-center mb-10'>
//       <button className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Create </button>
//     </div>
//     </div>
//   );
// }

// export default CreatFlashCard;



import React, { useState } from 'react';
import TermCard from './TermCard';
import { useDispatch } from 'react-redux';
import { addFlashcard } from '../store/flashcardsSlice';
 
const CreatFlashCard = () => {
 
  const [groupName,setGroupName]= useState('')
  const [description, setDescription]= useState('')

const [terms, setTerms] = useState([{ title: '', definition: '' }]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const termsLength = terms.length;
    dispatch(addFlashcard({ title: groupName, description, terms,termsLength  }));
    setGroupName('');
    setDescription('');
    setTerms([{ title: '', definition: '' }]);
  };
//   }

  return (
    <div>

    <div className='w-9/12 m-auto mt-2  pl-5 py-5 bg-white shadow-md'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col '>
           <label className='text-zinc-500 font-bold text-lg' htmlFor="">Group Name* </label>
           <input type="text" placeholder='Group Name' value={groupName} 
           onChange={(e) => setGroupName(e.target.value)} className='w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold'/>

           <label className='text-zinc-500 mt-4 font-bold text-lg' htmlFor=""> Add Description* </label>
           <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Write your thoughts here...' className='w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold'/>
        </div>
        <div  className='w-9/12 m-auto  pl-5 py-5 bg-white mt-5 shadow-md mb-10'>
        <TermCard terms={terms} setTerms={setTerms} />
    </div>
    <div className='flex justify-center mb-10'>
      <button type="submit" className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Create </button>
    </div>
      </form>
      
    </div>

    </div>
  );
}

export default CreatFlashCard;
