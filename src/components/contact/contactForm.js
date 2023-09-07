import { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function ContactForm() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue)
            if (!target.value) {
                setErrorMessage('please include a name!! :>')
            } else {
                setErrorMessage('')
            }
        } else if (inputType === 'email') {
            setEmail(inputValue)
            if (!validateEmail(target.value)) {
                setErrorMessage('please include a valid email!! :>')
            } else {
                setErrorMessage('')
            }
        } else {
            setMessage(inputValue)
            if (!target.value) {
                setErrorMessage('please enter a message!! :>')
            } else {
                setErrorMessage('')
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('please include a name!! :>')
            return;
        } else if (!validateEmail(email)) {
            setErrorMessage('please include a valid email!! :>')
            return;
        } else if (!message) {
            setErrorMessage('please enter a message!! :>')
            return;
        }

        setErrorMessage('message sent, thanks!! ^_^;;')
        setEmail('');
        setName('');
        setMessage('');

    }

    return (
        <form className='contactForm' onSubmit={handleFormSubmit}>
            <h2>contact~</h2>
            <div className='contactName'>
                <label>Name:</label>
                <input
                    placeholder='your name'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                    type='name'
                />
            </div>
            <div className='email'>
                <label>Email:</label>
                <input
                    placeholder='your email'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    type='email'
                />
            </div>
            <div className='message'>
                <label>Message:</label>
                <textarea
                    placeholder='your message'
                    name='message'
                    rows='12'
                    cols='50'
                    value={message}
                    onChange={handleInputChange}
                    type='message'
                />
            </div>
            <div className='submit'>
                <button type='button' onClick={handleFormSubmit}>submit~</button>
            </div>
            {errorMessage && (
                <div>
                    <p className='errorMessage'>{errorMessage}</p>
                </div>
            )}
        </form>
    );
}