import React, { useState } from "react";
import '../assets/style.css'

import { validateEmail } from "../../utils/helpers";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const checkForBlank = (e) => {
        if(e.value == null)
            alert('This field is required');
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Email not valid');
            return;
        }

    setName('');
    setEmail('');
    setMessage('')
    };

    return (
        <div>
            <h1>Contact</h1>
            <form className="form">
                <label>Name:</label>
                <br></br>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    onMouseLeave={checkForBlank}
                />
                <br></br><br></br>
                <label>Email address:</label>
                <br></br>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    onMouseLeave={checkForBlank}
                />
                <br></br><br></br>
                <label>Message:</label>
                <br></br>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="enter message"
                    rows="6"
                    cols="50"
                    onMouseLeave={checkForBlank}
                />
                <br></br><br></br>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Form;