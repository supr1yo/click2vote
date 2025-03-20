import { useState } from 'react';
import './Create.css';
import { IoMdClose } from "react-icons/io";

// To-Do: Option profanity filter

export default function Create() {

  const [pollTitle, setPollTitle] = useState('');
  const [options, setOptions] = useState(['']);

  const handleTitleChange = (e) => {
    setPollTitle(e.target.value);
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <div className="create-container">
        <title>Create Your Poll | Click2Vote</title>
      <h1>Create Your Poll</h1>
      <input
        type="text"
        placeholder="Enter your Poll title"
        value={pollTitle}
        onChange={handleTitleChange}
        className="poll-title-input"
      />
      <div className="options-container">
        <h3>Poll Options</h3>
        {options.map((option, index) => (
          <div key={index} className="option-input-group">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(e, index)}
              className="option-input"
            />
            <button
              type="button"
              onClick={() => handleRemoveOption(index)}
              className="remove-option-btn"
            >
              <IoMdClose />
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleAddOption} disabled={Object.keys(options).length > 9 ? true: false} className="add-option-btn">
        Add Option
      </button>
    </div>
  );
}
