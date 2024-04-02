// import React from 'react';

// const Carousel = ({ flashcards }) => {
  
//   return (
//     <div className=' overflow-hidden'>
//       {flashcards.map((flashcard) => (
//         <div key={flashcard.id} className=' flex w-[100%]  bg-cyan-200'>
          
//             {flashcard.terms.map((term, index) => (
//               <div  key={index} className='  w-[100%]' >
//                 {/* <div className='w-[30%] bg-amber-100 m-auto '>
//                   <h4>{term.title}</h4>
//                 </div> */}

//                 <div className=' w-[40%]  bg-slate-600 '>


//                   <div className=' w-[100%'>{term.definition}</div>
            
//                 </div>
        
//                 </div>
//             ))}
         
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Carousel;
// import React, { useState } from 'react';

// const Carousel = ({ terms }) => {
//   const [currentTermIndex, setCurrentTermIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentTermIndex((prevIndex) => (prevIndex === terms.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handlePrev = () => {
//     setCurrentTermIndex((prevIndex) => (prevIndex === 0 ? terms.length - 1 : prevIndex - 1));
//   };

//   if (!terms || terms.length === 0) {
//     return <div>No terms available</div>;
//   }

//   return (
//     <div className="w-[100%] bg-orange-300">
//       <div className="flex ">

//         {/* <div className='bg-gray-500 w-[30%] mr-4'>  
//                 <h4>{terms[currentTermIndex].title}</h4>
//                 </div> */}
//  <div className='bg-gray-500 w-[30%] mr-4'>  
//           {terms.map((term, index) => (
//             <h4 key={index} className={index === currentTermIndex ? 'active-term' : ''}>{term.title}</h4>
//           ))}
//         </div>



//         <div className='bg-red-200 w-[90%]'>
//           <p>{terms[currentTermIndex].definition}</p>

//           <button className='bg-amber-300' onClick={handlePrev}>Previous</button>
//     <br/>
//       <button className='bg-sky-600' onClick={handleNext}>Next</button>
//           </div>

//       </div>
      
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from 'react';

const Carousel = ({ terms }) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  const handleNext = () => {
    setCurrentTermIndex((prevIndex) => (prevIndex === terms.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentTermIndex((prevIndex) => (prevIndex === 0 ? terms.length - 1 : prevIndex - 1));
  };

  if (!terms || terms.length === 0) {
    return <div>No terms available</div>;
  }

  return (
    <div className="w-[100%] bg-pink-50 mt-5 ">
      <div className="flex">
        <div className='flex flex-col shadow-lg  w-1/4'>
        {terms.map((term, index) => (
          <div className='flex h-full flex-col ml-2 '>
          <div
            key={index}
            
            onClick={() => setCurrentTermIndex(index)}
          >
             {currentTermIndex === index ? '>' : null} {term.title} 
          </div>
          </div>
        ))}
        </div>
        <div className=' shadow-xl w-[90%]  ml-5'>
          <div className='h-full w-[100%] ' >
            <p>{terms[currentTermIndex].definition}</p>
            <img src={terms[currentTermIndex].term_uploadimage} alt="Flashcard_Image" className="w-40" />
          </div>
          <div className='flex p-2 m-4'>
             <button className='  m-4' onClick={handlePrev}>&#60;</button>
            <p>{currentTermIndex +1} / {terms.length}</p>
            <button className='  m-4' onClick={handleNext}>&#62;</button>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Carousel;

