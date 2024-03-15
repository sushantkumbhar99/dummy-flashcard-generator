

//done


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTerm, removeTerm, updateTerm } from '../store/termsSlice';

// const TermCard = () => {
//     const dispatch = useDispatch();
//     const terms = useSelector(state => state.terms.terms);

//     useEffect(() => {
//         if (terms.length === 0) {
//             dispatch(addTerm({ title: '', definition: '' }));
//         }
//     }, [dispatch, terms]);

//     const handleTermChange = (id, name, value) => {
//         dispatch(updateTerm({ id, [name]: value }));
//     };

//     const removeTermAtIndex = (id) => {
//         dispatch(removeTerm(id));
//     };

//     const addNewTerm = () => {
//         dispatch(addTerm({ title: '', definition: '' }));
//     };

//     return (
//         <div>
//             {terms.map((term, index) => (
//                 <div key={index}>
//                     <h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Terms*</h3>
//                     <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
//                     <input
//                         type="text"
//                         name="title"
//                         value={term.title}
//                         onChange={(e) => handleTermChange(term.id, 'title', e.target.value)}
//                         placeholder="Enter Term Title"
//                         className="border-2 mb-10 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
//                     />
//                     <input
//                         type="text"
//                         name="definition"
//                         value={term.definition}
//                         onChange={(e) => handleTermChange(term.id, 'definition', e.target.value)}
//                         placeholder="Enter Term Definition"
//                         className="border-2 ml-20 mb-16 w-80 h-10 pl-2 mt-2 rounded-md bg-slate-200 font-semibold"
//                     />
//                   {terms.length >= 1 && <button type="button" onClick={() => removeTermAtIndex(term.id)} className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white">Delete Term</button>}
//                 </div>
//             ))}
//             <button
//                 className='px-4 py-2 text-blue-500'
//                 type="button"
//                 onClick={addNewTerm}
//             >
//                 + Add More Term
//             </button>
//         </div>
//     );
// }

// export default TermCard;
// import React from 'react';
 
// const TermCard = () => {
     

//     return (
//         <div>
            
//                 <div >
//                     <h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Terms*</h3>
                   
//                     <input
//                         type="text"
//                         name="title"
                        
                        
//                         placeholder="Enter Term Title"
//                         className="border-2 mb-10 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
//                     />
//                     <input
//                         type="text"
//                         name="definition"
                        
//                         placeholder="Enter Term Definition"
//                         className="border-2 ml-20 mb-16 w-80 h-10 pl-2 mt-2 rounded-md bg-slate-200 font-semibold"
//                     />
                  
//                 </div>
      
//             <button
//                 className='px-4 py-2 text-blue-500'
//                 type="button"
                
//             >
//                 + Add More Term
//             </button>
//         </div>
//     );
// }

// export default TermCard;


//this is the fine 
import React from 'react';

const TermCard = ({ terms, setTerms }) => {
  // const [terms, setTerms] = useState([{ title: '', definition: '' }]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newTerms = [...terms];
    newTerms[index][name] = value;
    setTerms(newTerms);
  };

  const handleAddTerm = () => {
    setTerms([...terms, { title: '', definition: '' }]);
  };

  // const handleDeleteTerm = (index) => {
  //   if (terms.length === 1) return; // Prevent deleting when there's only one term
  //   const newTerms = [...terms];
  //   newTerms.splice(index, 1);
  //   setTerms(newTerms);
  // };
  const handleDeleteTerm = (index) => {
    if (terms.length === 1) return; // Prevent deleting when there's only one term
    const newTerms = terms.filter((_, i) => i !== index);
    setTerms(newTerms);
};

  return (
    <div>
      {terms.map((term, index) => (
        <div key={index}>
          <h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Term*</h3>
          <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
          <input
            type="text"
            name="title"
            value={term.title}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Enter Term Title"
            className="border-2 mb-4 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
          />
          <input
            type="text"
            name="definition"
            value={term.definition}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Enter Term Definition"
            className="border-2 mb-8 w-80 h-10 pl-2 ml-2 rounded-md bg-slate-200 font-semibold"
          />
          {terms.length > 1 && (
            <button type='button' className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white" onClick={() => handleDeleteTerm(index)}>Delete</button>
          )}
        </div>
      ))}
      <button
        className='px-4 py-2 text-blue-500'
        type="button"
        onClick={handleAddTerm}
      >
        + Add More Term
      </button>
    </div>
  );
}

export default TermCard;

 