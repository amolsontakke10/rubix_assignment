// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createStream } from "../actions";
// import { useNavigate } from "react-router-dom";

// const CreateStream = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onSubmit = (event) => {
//     event.preventDefault();
//     const stream = { title, description };
//     dispatch(createStream(stream));
//     navigate("/");
//   };

//   return (
//     <div>
//       <h2>Create a Stream</h2>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Enter Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter stream title"
//           />
//         </div>

//         <div>
//           <label>Enter Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter stream description"
//           />
//         </div>
//         <button className="ui button primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateStream;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStream } from "../actions";
import { useNavigate } from "react-router-dom";

const CreateStream = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validate the form before submitting
  const validateForm = () => {
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!description) errors.description = "Description is required";
    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Validate form
    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, dispatch the action
    if (Object.keys(formErrors).length === 0) {
      const stream = { title, description };
      dispatch(createStream(stream));
      navigate("/");
    }
  };

  return (
    <div className="ui container">
      <h2 className="ui header centered">Create a Stream</h2>
      <div className="ui segment raised">
        <form className="ui form" onSubmit={onSubmit}>
          <div className={`field ${errors.title ? "error" : ""}`}>
            <label>Enter Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter stream title"
              className="ui input"
            />
            {errors.title && (
              <div className="ui pointing red basic label">{errors.title}</div>
            )}
          </div>

          <div className={`field ${errors.description ? "error" : ""}`}>
            <label>Enter Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter stream description"
              className="ui input"
            />
            {errors.description && (
              <div className="ui pointing red basic label">
                {errors.description}
              </div>
            )}
          </div>

          <div className="ui center aligned">
            <button className="ui primary button large">Create Stream</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStream;
