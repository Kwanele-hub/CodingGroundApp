import React, {useState} from 'react';
import Edit from './Edit';


function Form() {

  const [formData, setFormData] = useState({
    freeCodeCamp: "",
    typing: "",
    codeWars: "",
    blogPost: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const { freeCodeCamp, typing, codeWars, blogPost } = formData;
    if ((freeCodeCamp, typing, codeWars, blogPost)) {
      setFormData({
        freeCodeCamp: "",
        typing: "",
        codeWars: "",
        blogPost: "",
      });
    }
  };
  const { freeCodeCamp, typing, codeWars, blogPost } = formData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  return (
    <div className="learners">
      <form onSubmit={handleSubmit}>
        <input
          type="text" name="freeCodeCamp" placeholder="FreeCodeCamp:"  onChange={handleChange} value={freeCodeCamp}
        />
        <input
          type="number" name="typing" placeholder="Typing:"  onChange={handleChange} value={typing}
        />
        <input
          type="url" name="blogPost" placeholder="BlogPost:" onChange={handleChange} value={blogPost}
        />
        <input
          type="number" name="codeWars" placeholder="CodeWars:" onChange={handleChange} value={codeWars}
        />
        <button type="submit">Submit</button>
      </form>
      <Edit />
    </div>
  );
}

export default Form;