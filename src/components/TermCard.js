

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

// import React from 'react';

// const TermCard = ({ terms, setTerms }) => {
//   // const [terms, setTerms] = useState([{ title: '', definition: '' }]);
//   // console.log('Terms in TermCard:', terms);
//   const handleInputChange = (index, e) => {
//     const { name, value } = e.target;
//     const newTerms = [...terms];
//     newTerms[index][name] = value;
//     setTerms(newTerms);
//   };

//   const handleAddTerm = () => {
//     setTerms([...terms, { title: '', definition: '' }]);
//   };
 
//   const handleDeleteTerm = (index) => {
//     if (terms.length === 1) return; // Prevent deleting when there's only one term
//     const newTerms = terms.filter((_, i) => i !== index);
//     setTerms(newTerms);
// };

//   return (
//     <div>
//       {terms.map((term, index) => (
//         <div key={index}>
//           <h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Term*</h3>
//           <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
//           <input
//             type="text"
//             name="title"
//             value={term.title}
//             onChange={(e) => handleInputChange(index, e)}
//             placeholder="Enter Term Title"
//             className="border-2 mb-4 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
//           />
//           <input
//             type="text"
//             name="definition"
//             value={term.definition}
//             onChange={(e) => handleInputChange(index, e)}
//             placeholder="Enter Term Definition"
//             className="border-2 mb-8 w-80 h-10 pl-2 ml-2 rounded-md bg-slate-200 font-semibold"
//           />
          
//           {terms.length > 1 && (
//             <button type='button' className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white"
//              onClick={() => handleDeleteTerm(index)}>Delete</button>
//           )}
//         </div>
//       ))}
//       <button
//         className='px-4 py-2 text-blue-500'
//         type="button"
//         onClick={handleAddTerm}
//       >
//         + Add More Term
//       </button>
//     </div>
//   );
// }

// export default TermCard;

 















// import React from 'react';
// import { Field } from 'formik';

// const TermCard = ({ terms, push, remove }) => {
//   const handleDeleteTerm = (index) => {
//     if (terms.length === 1) return; // Prevent deleting when there's only one term
//     remove(index);
//   };
  
//   return (
//     <div>
//       {terms.map((term, index) => (
//         <div key={index}>
//           <h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Term*</h3>
//           <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
//           <Field
//             type="text"
//             name={`terms[${index}].title`}
//             placeholder="Enter Term Title"
//             className="border-2 mb-4 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
//           />
//           <Field
//             type="text"
//             name={`terms[${index}].definition`}
//             placeholder="Enter Term Definition"
//             className="border-2 mb-8 w-80 h-10 pl-2 ml-2 rounded-md bg-slate-200 font-semibold"
//           />
//           {terms.length > 1 && (
//             <button type='button' className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white"
//              onClick={() => handleDeleteTerm(index)}>Delete</button>
//           )}
//         </div>
//       ))}
//       <button
//         className='px-4 py-2 text-blue-500'
//         type="button"
//         onClick={() => push({ title: '', definition: '' })}
//       >
//         + Add More Term
//       </button>
//     </div>
//   );
// }

// export default TermCard;



// import React from 'react';
// import { Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const TermCard = ({ terms, push, remove }) => {
//   const handleDeleteTerm = (index) => {
//     if (terms.length === 1) return; // Prevent deleting when there's only one term
//     remove(index);
//   };

//   const termSchema = Yup.object().shape({
//     title: Yup.string().required('Term Title is required'),
//     definition: Yup.string().required('Term Definition is required')
//   });

//   return (
//     <div>
//       {terms.map((term, index) => (
//         <div key={index}>
//           <h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Term*</h3>
//           <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
//           <Field
//             type="text"
//             name={`terms[${index}].title`}
//             placeholder="Enter Term Title"
//             className="border-2 mb-4 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
//             validate={termSchema}
//           />
//           <ErrorMessage name={`terms[${index}].title`} component="div" className="text-red-500" />

//           <Field
//             type="text"
//             name={`terms[${index}].definition`}
//             placeholder="Enter Term Definition"
//             className="border-2 mb-8 w-80 h-10 pl-2 ml-2 rounded-md bg-slate-200 font-semibold"
//             validate={termSchema}
//           />
//           <ErrorMessage name={`terms[${index}].definition`} component="div" className="text-red-500" />

//           {terms.length > 1 && (
//             <button type='button' className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white"
//               onClick={() => handleDeleteTerm(index)}>Delete</button>
//           )}
//         </div>
//       ))}
//       <button
//         className='px-4 py-2 text-blue-500'
//         type="button"
//         onClick={() => push({ title: '', definition: '' })}
//       >
//         + Add More Term
//       </button>
//     </div>
//   );
// }

// export default TermCard;


// import React from 'react';
// import { Field, ErrorMessage } from 'formik';

// const TermCard = ({ terms, push, remove }) => {
//   const handleDeleteTerm = (index) => {
//     if (terms.length === 1) return; // Prevent deleting when there's only one term
//     remove(index);
//   };
  
//   return (
//     <div>
//       {terms.map((term, index) => (
//         <div key={index}>
//           <h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Term*</h3>
//           <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
//           <Field
//             type="text"
//             name={`terms[${index}].title`}
//             placeholder="Enter Term Title"
//             className="border-2 mb-4 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
//           />
//           <ErrorMessage name={`terms[${index}].title`} component="div" className="text-red-500" />

//           <Field
//             type="text"
//             name={`terms[${index}].definition`}
//             placeholder="Enter Term Definition"
//             className="border-2 mb-8 w-80 h-10 pl-2 ml-2 rounded-md bg-slate-200 font-semibold"
//           />
//           <ErrorMessage name={`terms[${index}].definition`} component="div" className="text-red-500" />

//           {terms.length > 1 && (
//             <button type='button' className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white"
//              onClick={() => handleDeleteTerm(index)}>Delete</button>
//           )}
//         </div>
//       ))}
//       <button
//         className='px-4 py-2 text-blue-500'
//         type="button"
//         onClick={() => push({ title: '', definition: '' })}
//       >
//         + Add More Term
//       </button>
//     </div>
//   );
// }

// export default TermCard;



import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineDriveFolderUpload } from "react-icons/md";

const TermCard = ({ terms, push, remove, setFieldValue }) => {
  const handleDeleteTerm = (index) => {
    if (terms.length === 1) return; // Prevent deleting when there's only one term
    remove(index);
  };

  const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

  const imgError = (val) => {
    toast.warn(val, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  
  return (
    <div>
      {terms.map((term, index) => (
        <div key={index}>
          <span><h3 className='mb-2 text-lg font-bold text-gray-500'>Enter Term*</h3>
          <span className='py-2 px-4 bg-red-500 text-slate-50 rounded-full mr-4'>{index + 1}</span>
          
          <Field
            type="text"
            name={`terms[${index}].title`}
            placeholder="Enter Term Title"
            className="border-2 mb-4 w-80 h-10 pl-2 mt-2 bg-slate-200 rounded-md font-semibold"
          />
          <ErrorMessage name={`terms[${index}].title`} component="div" className="text-red-500" />

           <h3 className='mb-2 text-lg font-bold text-gray-500'>Term Definition*</h3>
          <Field
            type="text"
            name={`terms[${index}].definition`}
            placeholder="Enter Term Definition"
            className="border-2 mb-8 w-80 h-10 pl-2 ml-2 rounded-md bg-slate-200 font-semibold"
          />
            <ErrorMessage name={`terms[${index}].definition`} component="div" className="text-red-500" />
            </span>
          
          <div className='flex'>
            {/* it's an image upload button 
            if an image is present, it shows the image preview with a delete icon to delete the image 
            if an image is not present, it shows the image uploading button */}
            {term.term_uploadimage ? (
              <div className='flex'>
                <img className='h-16 mt-2 max-w-[12rem]' src={term.term_uploadimage} alt="" /> 
                <TiDeleteOutline className='text-3xl text-red-600' onClick={() => setFieldValue(`terms.${index}.term_uploadimage`, '')} />
              </div>
            ) : (
                <label htmlFor={`terms.${index}.term_uploadimage`} className="w-44 h-[38px] cursor-pointer px-3 mx-3 mt-8 py-1 bg-gray-200 border-gray-200 flex items-center justify-center rounded" >
                  <MdOutlineDriveFolderUpload className=" text-[2em] text-blue-700 p-1" />
                  <span className='text-blue-700 font-bold'>Select Image
                  </span>
              </label>
            )}
            {/* it's a component to show an error message of validation */}
            <ErrorMessage
              className='text-red-600'
              component="span"
              name={`terms.${index}.term_uploadimage`}
            />
            {/* it's an input field for image upload */}
            <input
              onChange={(event) => {
                //  it's validation on image
                if (event.target.files[0]
                  && !SUPPORTED_FORMATS.includes(event.target.files[0].type)) {
                  imgError('unsupported file format')
                }
                else if (event.target.files[0].size > 1024 * 1024 * 10) {
                  imgError('image size is very large')
                } else if (event.target.files[0].size <= 1024 * 1024 * 10) {
                  const file = event.target.files[0];
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => {
                    setFieldValue(`terms.${index}.term_uploadimage`, reader.result);
                  }
                }
              }}
              className='hidden'
              id={`terms.${index}.term_uploadimage`}
              name={`terms.${index}.term_uploadimage`}
              type="file"
            />
          </div>
         
          {terms.length > 1 && (
            <button type='button' className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white" onClick={() => handleDeleteTerm(index)}>Delete</button>
          )}
        </div>
      ))}
      <button
        className='px-4 py-2 text-blue-500'
        type="button"
        onClick={() => push({ title: '', definition: '', term_uploadimage: null })}
      >
        + Add More Term
      </button>
    </div>
  );
};


export default TermCard;
