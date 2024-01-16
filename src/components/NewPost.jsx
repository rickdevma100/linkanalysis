import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
  const [addLink1, setAddLink1] = useState('');
  const [addLink2, setAddLink2] = useState('');
  const [addLink3, setAddLink3] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ENGLISH');

  function submitHandler(event) {
    event.preventDefault();
    const confirmation = selectedLanguage+" is your Preferred Language ";
    if(confirm(confirmation)){
      const postData = {
        link1: addLink1,
        link2: addLink2,
        link3: addLink3,
        language: selectedLanguage
      };
      onAddPost(postData);
      onCancel();
    }

  }
  const languages = [
    'ENGLISH', 'HINDI', 'BENGALI', 'TAMIL', 'GERMAN'
  ];
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Link 1</label>
        <textarea id="body" required rows={2} onChange={(event)=>{setAddLink1(event.target.value)}} />
      </p>
      <p>
        <label htmlFor="body">Link 2</label>
        <textarea id="body" required rows={2} onChange={(event)=>{setAddLink2(event.target.value)}} />
      </p>
      <p>
        <label htmlFor="body">Link 3</label>
        <textarea id="body" required rows={2} onChange={(event)=>{setAddLink3(event.target.value)}} />
      </p>
      <p>
        <label htmlFor="body">Language</label>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="">Select Language</option>
            {languages.map((language, index) => (
                <option key={index} value={language}>
                    {language}
                </option>
            ))}
        </select>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button onClick={submitHandler}>Summarize Please</button>
      </p>
    </form>
  );
}

export default NewPost;
