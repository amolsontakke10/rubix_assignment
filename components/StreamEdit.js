// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchStreams, editStream } from "../actions";

// const StreamEdit = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const stream = useSelector((state) =>
//     state.streams.find((stream) => stream.id === parseInt(id))
//   );

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });

//   useEffect(() => {
//     if (!stream) {
//       dispatch(fetchStreams());
//     } else {
//       setFormData({ title: stream.title, description: stream.description });
//     }
//   }, [stream, dispatch]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(editStream(id, formData));
//     navigate("/");
//   };

//   if (!stream) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>Edit Stream</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <input
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="ui button primary">
//           Save
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StreamEdit;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStreams, editStream } from "../actions";

const StreamEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stream = useSelector((state) =>
    state.streams.find((stream) => stream.id === parseInt(id))
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  // Validate the form before submitting
  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.description) errors.description = "Description is required";
    return errors;
  };

  useEffect(() => {
    if (!stream) {
      dispatch(fetchStreams());
    } else {
      setFormData({ title: stream.title, description: stream.description });
    }
  }, [stream, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();
    setErrors(formErrors);

    // If no errors, dispatch the editStream action
    if (Object.keys(formErrors).length === 0) {
      dispatch(editStream(id, formData));
      navigate("/");
    }
  };

  if (!stream) return <div>Loading...</div>;

  return (
    <div className="ui container">
      <h2 className="ui header centered">Edit Stream</h2>
      <div className="ui segment raised">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className={`field ${errors.title ? "error" : ""}`}>
            <label>Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter stream title"
              className="ui input"
            />
            {errors.title && (
              <div className="ui pointing red basic label">{errors.title}</div>
            )}
          </div>

          <div className={`field ${errors.description ? "error" : ""}`}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
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
            <button type="submit" className="ui primary button large">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StreamEdit;
