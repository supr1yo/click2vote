import { useState } from 'react';
import './Create.css';
import { IoMdClose } from "react-icons/io";
import cookies from 'universal-cookie';

export default function Create() {
  const [pollTitle, setPollTitle] = useState('');
  const [options, setOptions] = useState(['']);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [pollStarted, setPollStarted] = useState(false);
  const [pollEnded, setPollEnded] = useState(false);

  const handleTitleChange = (e) => setPollTitle(e.target.value);
  const pollId = cookies.get('poll');

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (options.length < 10) {
      setOptions([...options, '']);
    }
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleStartPoll = async () => {
    if (pollTitle && options.length > 1 && startTime && endTime) {
      setPollStarted(true);
      setPollEnded(false);
      
      const pollData = {
        id: 1,
        title: pollTitle,
        options: options,
        startTime: startTime,
        endTime: endTime
      };

      try {
        const response = await fetch('http://localhost:3000/v1/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pollData)
        });
        console.log(response.json());
        if (!response.ok) {
          throw new Error('Failed to create poll');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };


  const handleEndPoll = async () => {
    setPollEnded(true);
    setPollStarted(false);

    try {
      const response = await fetch('http://localhost:3000/v1/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pollId)
      });
      console.log(response.json());
      if (!response.ok) {
        throw new Error('Failed to delete poll');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
      <button onClick={handleAddOption} disabled={options.length > 4} className="add-option-btn">
        Add Option
      </button>

      <div className="poll-timing">
        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="datetime-input"
        />
        <label>End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="datetime-input"
        />
      </div>
      
      <button onClick={handleStartPoll} disabled={pollStarted} className="start-poll-btn">
        Start Poll
      </button>
      <button onClick={handleEndPoll} disabled={pollEnded} className="end-poll-btn">
        End Poll
      </button>
    </div>
  );
}
