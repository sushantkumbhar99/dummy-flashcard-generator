 

// MyFlashCardPage.js

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import {  useNavigate  } from 'react-router-dom';
 
// const  MyFlashCards = () => {
//   const navigate = useNavigate(); // Use useNavigate hook
//   const flashcards = useSelector(state => state.flashcards.flashcards);

//   const handleViewClick = (flashcardId) => {
//     navigate(`/flashcard/${flashcardId}`);
//   };

//   return (
//     <div>
//       <h1>My Flashcards</h1>
//       <div>
//         {flashcards.map(flashcard => (
         
//           <div key={flashcard.id}>
//              {console.log(flashcard)}
//             <h2>{flashcard.title}</h2>
//             <p>{flashcard.description}</p>
//             <p>{flashcard.termsLength}</p>
//             {/* Use Link component for navigation */}
            
//             <Link to={`/flashcard/${flashcard.id}`}>View</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyFlashCards;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch hook
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { removeFlashcard } from '../store/flashcardsSlice';

const MyFlashCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get dispatch function using useDispatch hook
  const flashcards = useSelector(state => state.flashcards.flashcards);

  const handleViewClick = (flashcardId) => {
    navigate(`/flashcard/${flashcardId}`);
  };

  const handleDeleteClick = (flashcardId) => {
    // Dispatch the removeFlashcard action with the flashcardId
    dispatch(removeFlashcard(flashcardId));
  };

  return (
    <div>
      <h1>My Flashcards</h1>
      <div>
        {flashcards.map(flashcard => (
          <div key={flashcard.id}>
            {console.log(flashcard)}
            <h2>{flashcard.title}</h2>
            <p>{flashcard.description}</p>
            <p>{flashcard.termsLength}</p>
            {/* Use Link component for navigation */}
            <Link to={`/flashcard/${flashcard.id}`}>View</Link>
            {/* Add a button to delete the flashcard */}
            <button onClick={() => handleDeleteClick(flashcard.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFlashCards;

