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

// This is the final page

// import React, { useState } from 'react';
// import TermCard from './TermCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addFlashcard } from '../store/flashcardsSlice';

// const CreatFlashCard = () => {

//   const [groupName,setGroupName]= useState('')
//   const [description, setDescription]= useState('')

// const [terms, setTerms] = useState([{ title: '', definition: '' }]);

//   const dispatch = useDispatch();
//   const flashcards = useSelector(state => state.flashcards.flashcards);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const termsLength = terms.length;
//     // console.log('Terms before dispatch:', terms)
//     dispatch(addFlashcard({ title: groupName, description, terms,termsLength  }));
//     // console.log('Flashcard created with terms:', terms);
//     setGroupName('');
//     setDescription('');
//     setTerms([{ title: '', definition: '' }]);
//   };

// console.log('Flashcards state:', flashcards);
//   return (
//     <div>

//     <div className='w-9/12 m-auto mt-2  py-5   '>
//       <form onSubmit={handleSubmit}>

//         <div className='flex flex-col shadow-md  p-3 border-2'>
//            <label className='text-zinc-500 font-bold text-lg' htmlFor="">Group Name* </label>
//            <input type="text" placeholder='Group Name' value={groupName}
//            onChange={(e) => setGroupName(e.target.value)} className='w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold'/>

//            <label className='text-zinc-500 mt-4 font-bold text-lg' htmlFor=""> Add Description* </label>
//            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Write your thoughts here...' className='w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold'/>
//         </div>
//         <div  className=' m-auto  pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2'>
//         <TermCard terms={terms} setTerms={setTerms} />
//     </div>
//     <div className='flex justify-center mb-10'>
//       <button type="submit" className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Create </button>
//     </div>
//       </form>

//     </div>

//     </div>
//   );
// }

// export default CreatFlashCard;

// import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import { useDispatch } from 'react-redux';
// import { addFlashcard } from '../store/flashcardsSlice';

// const CreateFlashCard = () => {
//   const dispatch = useDispatch();

//   const initialValues = {
//     groupName: "",
//     description: "",
//     terms: [{ title: '', definition: '' }]
//   };

//   const onSubmit = (values, { resetForm }) => {
//     const termsLength = values.terms.length;
//     dispatch(addFlashcard({
//       title: values.groupName,
//       description: values.description,
//       terms: values.terms,
//       termsLength
//     }));
//     resetForm();
//   };

//   return (
//     <div>
//       <div className='w-9/12 m-auto mt-2  py-5'>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={onSubmit}
//         >
//           <Form>
//             <div className='flex flex-col shadow-md  p-3 border-2'>
//                <label className='text-zinc-500 font-bold text-lg' htmlFor="groupName">Group Name*</label>
//                <Field type="text" id="groupName" name="groupName" placeholder='Group Name' className='w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold'/>
//                <ErrorMessage name="groupName" />

//                <label className='text-zinc-500 mt-4 font-bold text-lg' htmlFor="description">Add Description*</label>
//                <Field as="textarea" id="description" name="description" placeholder='Write your thoughts here...' className='w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold'/>
//                <ErrorMessage name="description" />
//             </div>

//             <div className='m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2'>
//             <FieldArray
//   name="terms"
//   render={({ push, remove, form }) => (
//     <div>
//       {form.values.terms.map((term, index) => (
//         <div key={index}>
//           <Field
//             type="text"
//             name={`terms[${index}].title`}
//             placeholder="Term Title"
//             className="w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold"
//           />
//           <Field
//             type="text"
//             name={`terms[${index}].definition`}
//             placeholder="Term Definition"
//             className="w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold"
//           />
//           <button type="button" onClick={() => remove(index)}>Remove</button>
//         </div>
//       ))}
//       <button type="button" onClick={() => push({ title: '', definition: '' })}>Add Term</button>
//     </div>
//   )}
// />

//             </div>

//             <div className='flex justify-center mb-10'>
//               <button type="submit" className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Create</button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default CreateFlashCard;

// import React from 'react';
// import { Formik, Form, FieldArray, Field } from 'formik';
// import { useDispatch } from 'react-redux';
// import { addFlashcard } from '../store/flashcardsSlice';
// import TermCard from './TermCard';

// const CreateFlashCard = () => {
//   const dispatch = useDispatch();

//   const initialValues = {
//     groupName: '',
//     description: '',
//     terms: [{ title: '', definition: '' }]
//   };

//   const onSubmit = (values, { resetForm }) => {
//     dispatch(addFlashcard({
//       title: values.groupName,
//       description: values.description,
//       terms: values.terms
//     }));
//     resetForm();
//   };

//   return (
//     <div>
//       <div className='w-9/12 m-auto mt-2 py-5'>
//         <Formik
//           initialValues={initialValues}
//           onSubmit={onSubmit}
//         >
//           <Form>
//             <div className='flex flex-col shadow-md p-3 border-2'>
//                <label className='text-zinc-500 font-bold text-lg' htmlFor="groupName">Group Name*</label>
//                <Field type="text" id="groupName" name="groupName" placeholder='Group Name' className='w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold'/>
//                <label className='text-zinc-500 mt-4 font-bold text-lg' htmlFor="description">Add Description*</label>
//                <Field as="textarea" id="description" name="description" placeholder='Write your thoughts here...' className='w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold'/>
//             </div>

//             <div className='m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2'>
//             <FieldArray
//   name="terms"
//   render={({ push, remove, form: { values } }) => (
//     <TermCard terms={values.terms} push={push} remove={remove} />
//   )}
// />

//             </div>

//             <div className='flex justify-center mb-10'>
//               <button type="submit" className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Create</button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default CreateFlashCard;

// import React from 'react';
// import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { addFlashcard } from '../store/flashcardsSlice';
// import TermCard from './TermCard';

// const CreateFlashCard = () => {
//   const dispatch = useDispatch();

//   const initialValues = {
//     groupName: '',
//     description: '',
//     terms: [{ title: '', definition: '' }]
//   };

//   const validationSchema = Yup.object().shape({
//     groupName: Yup.string().required('Group Name is required'),
//     description: Yup.string().required('Description is required'),
//     terms: Yup.array().of(
//       Yup.object().shape({
//         title: Yup.string().required('Term Title is required'),
//         definition: Yup.string().required('Term Definition is required')
//       })
//     )
//   });

//   const onSubmit = (values, { resetForm }) => {
//     dispatch(addFlashcard({
//       title: values.groupName,
//       description: values.description,
//       terms: values.terms
//     }));
//     resetForm();
//   };

//   return (
//     <div>
//       <div className='w-9/12 m-auto mt-2 py-5'>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ errors, touched }) => (
//             <Form>
//               <div className='flex flex-col shadow-md p-3 border-2'>
//                  <label className='text-zinc-500 font-bold text-lg' htmlFor="groupName">Group Name*</label>
//                  <Field type="text" id="groupName" name="groupName" placeholder='Group Name' className='w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold'/>
//                  <ErrorMessage name="groupName" component="div" className="text-red-500" />

//                  <label className='text-zinc-500 mt-4 font-bold text-lg' htmlFor="description">Add Description*</label>
//                  <Field as="textarea" id="description" name="description" placeholder='Write your thoughts here...' className='w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold'/>
//                  <ErrorMessage name="description" component="div" className="text-red-500" />
//               </div>

//               <div className='m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2'>
//                 <FieldArray
//                   name="terms"
//                   render={({ push, remove, form: { values } }) => (
//                     <TermCard terms={values.terms} push={push} remove={remove} />
//                   )}
//                 />
//               </div>

//               <div className='flex justify-center mb-10'>
//                 <button type="submit" className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Create</button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default CreateFlashCard;

// import React from 'react';
// import { Formik, Form, FieldArray, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { addFlashcard } from '../store/flashcardsSlice';
// import TermCard from './TermCard';

// const CreateFlashCard = () => {
//   const dispatch = useDispatch();

//   const initialValues = {
//     groupName: '',
//     description: '',
//     terms: [{ title: '', definition: '' }]
//   };

//   const validationSchema = Yup.object().shape({
//     groupName: Yup.string().required('Group Name is required'),
//     description: Yup.string().required('Description is required'),
//     terms: Yup.array().of(
//       Yup.object().shape({
//         title: Yup.string().required('Term Title is required'),
//         definition: Yup.string().required('Term Definition is required')
//       })
//     )
//   });

//   const onSubmit = (values, { resetForm }) => {
//     dispatch(addFlashcard({ 
//       title: values.groupName, 
//       description: values.description, 
//       terms: values.terms
//     }));
//     resetForm();
//   };

//   return (
//     <div>
//       <div className='w-9/12 m-auto mt-2 py-5'>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           <Form>
//             <div className='flex flex-col shadow-md p-3 border-2'>
//                <label className='text-zinc-500 font-bold text-lg' htmlFor="groupName">Group Name*</label>
//                <Field type="text" id="groupName" name="groupName" placeholder='Group Name' className='w-80 h-10 pl-2 mt-2 bg-slate-200 font-semibold'/>
//                <ErrorMessage name="groupName" component="div" className="text-red-500" />

//                <label className='text-zinc-500 mt-4 font-bold text-lg' htmlFor="description">Add Description*</label>
//                <Field as="textarea" id="description" name="description" placeholder='Write your thoughts here...' className='w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold'/>
//                <ErrorMessage name="description" component="div" className="text-red-500" />
//             </div>

//             <div className='m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2'>
//               <FieldArray
//                 name="terms"
//                 render={({ push, remove, form: { values } }) => (  
//                   <TermCard terms={values.terms} push={push} remove={remove} />
//                 )}
//               />
//             </div>

//             <div className='flex justify-center mb-10'>
//               <button type="submit" className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Create</button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// }

 
//             <div className='m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2'>
//               <FieldArray
//                 name="terms"
//                 render={({ push, remove, form: { values } }) => (  
//                   <TermCard terms={values.terms} push={push} remove={remove} />
//                 )}
//               />
//             </div>

//             <div className='flex justify-center mb-10'>
//               <button type="submit" className='px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white'>Creatte</button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default CreateFlashCard;
 


 


import React from "react";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../store/flashcardsSlice";
import TermCard from "./TermCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFileUpload } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const CreateFlashCard = () => {
  const dispatch = useDispatch();

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

  const initialValues = {
    groupName: "",
    uploadimage: null,
    description: "",
    terms: [{ title: "", definition: "", term_uploadimage: null }],
  };

  const validationSchema = Yup.object({
    groupName: Yup.string()
      .min(7, "Group name must be 7 characters")
      .required("Please Enter Group Name"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Please Add Description"),
    terms: Yup.array(
      Yup.object({
        title: Yup.string()
          .min(5, "Term name should be 5 characters")
          .required("Please Enter Term"),
        definition: Yup.string()
          .min(10, "Term definition shoud be 10 characters")
          .required("Please Enter Definition"),
      })
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(
      addFlashcard({
        title: values.groupName,
        uploadImage: values.uploadimage,
        description: values.description,
        terms: values.terms,
        termsLength : values.terms.length
      })
    );
    resetForm();
    toast.success("👍 Flashcard Created!", {
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
    <div className="">
      <ToastContainer />
      <div className="w-9/12 m-auto    mt-2 py-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (

            <Form>
              {/* for upper part img title and description  */}
              <div className="shadow-md  p-3 border-2">

                {/* title and img in this div  */}
                <div className="flex   ">


                {/*for label and title */}
                 <div> 
                    <div>
                     <label
                       className="text-zinc-500 font-bold text-lg"
                       htmlFor="groupName"
                     >
                       Group Name*
                     </label>
                    </div>

                  <div>
                   <Field
                    type="text"
                    id="groupName"
                     name="groupName"
                     placeholder="Group Name"
                    className="w-80 h-9 pl-2 mt-2 bg-slate-200 font-semibold"
                  />

                    <ErrorMessage
                     name="groupName"
                     component="div"
                     className="text-red-500"
                    />
                   </div>
               </div>




                    {/* it's a image upload button 
                  if image is present it's shows the image preview with delete icon to delete image
                  if image is not present its shows image uploading button */}


                    {/* upload img div  */}
               <div className="ml-10">
              
                  {values.uploadimage ? (
                    <div className=" ">
              
                      <img
                        className="h-16 w-14 mt-2"
                        src={values.uploadimage}
                        alt=""
                      />
                      <TiDeleteOutline
                        className="text-3xl text-red-600"
                        onClick={() => setFieldValue("uploadimage", "")}
                      />
                    </div>
                  ) : (
                    <label
                      htmlFor="uploadimage"
                      className="w-44 h-[38px]  cursor-pointer px-3 mx-3 mt-8 py-1 bg-gray-200 border-gray-200 flex  items-center justify-center  rounded"
                    >
                      <FaFileUpload className=" text-[1.8em] text-blue-700 p-1" />  
                      <span className="text-blue-700 font-bold">
                        Upload Image
                      </span>
                    </label>
                  )}
 
                  <input
                    onChange={(event) => {
                      //  it's validation on image
                      if (
                        event.target.files[0] &&
                        !SUPPORTED_FORMATS.includes(event.target.files[0].type)
                      ) {
                        imgError("unsupported file format");
                      } else if (
                        event.target.files[0].size >
                        1024 * 1024 * 10
                      ) {
                        imgError("image size is very large");
                      } else if (
                        event.target.files[0].size <=
                        1024 * 1024 * 10
                      ) {
                        const file = event.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          setFieldValue("uploadimage", reader.result);
                        };
                      }
                    }}
                    className="hidden"
                    name="uploadimage"
                    id="uploadimage"
                    type="file"
                  />
                </div>  

             </div>


              <div className="mt-3">
                <div>
                <label
                  className="text-zinc-500 mt-4 font-bold text-lg"
                  htmlFor="description"
                >
                  
                  Add Description*
                </label>

                </div>

                <div>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Write your thoughts here..."
                  className="w-7/12 h-20 pl-2 mt-2 bg-slate-200 font-semibold"
                />
                </div>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>
           </div> 




              <div className="m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10 border-2">
                <FieldArray
                  name="terms"
                  render={({ push, remove, form: { values, setFieldValue } }) => (
                    <TermCard
                      terms= {values.terms}
                      push= {push}
                      remove= {remove}
                      setFieldValue= {setFieldValue}
                    />
                  )}
                />
              </div>

              <div className="flex justify-center mb-10">
                <button
                  type="submit"
                  className="px-2 py-1 bg-neutral-950 ml-10 rounded-md text-white"
                >
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateFlashCard;
