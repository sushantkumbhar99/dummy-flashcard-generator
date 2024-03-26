 
// // // FlashcardDetails.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Carousel from './Carousel'
// const FlashcardDetails = () => {
//   const { resId } = useParams();
//   console.log("resid",  resId)
//   const flashcard = useSelector(state => state.flashcards.flashcards.find(flashcard => flashcard.id === resId));
//   if (!flashcard) {
//     return <div>Flashcard not found</div>;
//   }
//   console.log("Terms:", flashcard.terms); // Log terms before rendering

//   return (
//     <div className='w-9/12 m-auto mt-1 '>
//       <div>
//         <div className=''>
//           <div className='flex'>
//           <Link className='text-3xl  text-red-700' to={"/MyFlashCards"}>&#8592;</Link> 
//          <span><h1 className='ml-10 font-bold py-2'>{flashcard.title}</h1></span>
//           </div>
   
//          <p className=' ml-16 font-medium'>{flashcard.description}</p>
//       </div>
    
//     <div>
//     <Carousel flashcards={[flashcard]} />

//     </div>
      
//     {/* flashcard terms */}
//     {/* <div className='flex ' >
//      <div className='mt-5 shadow-lg w-4/12 bg-orange-50 h-80'>
//       <div className='border-b border-gray-300 font-bold py-4 '>
//         <h2 className='text-lg mx-3'>FlashCards</h2>
//        </div>

//        {/* flashcardtitles */}
//        {/* <div className='ml-4 mt-4'>
//           <ul>
//             {flashcard.terms.map((term, index) => (
//               <li key={index}>
//                 <strong>{term.title}</strong> 
//               </li>
//           ))}
//            </ul>
//       </div>
//       </div> */}

// {/* 
//       <div className='ml-8 mt-4 shadow-md bg-red-50 w-full'>
//           <ul>
//             {flashcard.terms.map((term, index) => (
//               <li key={index}>
//                 <strong>{term.definition}</strong> 
//               </li>
//           ))}
//            </ul>
//       </div>
//     </div> */} 
//    </div>
//   </div>
//   );
// }

// export default FlashcardDetails;
 
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const FlashcardDetails = () => {
  const { resId } = useParams();
  const flashcard = useSelector(state => state.flashcards.flashcards.find(flashcard => flashcard.id === resId));

  if (!flashcard) {
    return <div>Flashcard not found</div>;
  }

  console.log("Terms:", flashcard.terms); // Log terms before rendering

  return (
    <div className='w-9/12 m-auto mt-1'>
      <div>
        <div className=''>
          <div className='flex'>
            <Link className='text-3xl  text-red-700' to={"/MyFlashCards"}>&#8592;</Link> 
            <span><h1 className='ml-10 font-bold py-2'>{flashcard.title}</h1></span>
          </div>
          <p className='ml-16 font-medium'>{flashcard.description}</p>
        </div>
        <div>
          <Carousel terms={flashcard.terms} />
        </div>
      </div>
    </div>
  );
}

export default FlashcardDetails;
