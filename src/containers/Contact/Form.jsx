import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { Text, LanguageContext } from '../../context/LanguageContext';
import { emailApiEndPoint } from '../../utils/config';

const Form = ({ setIsSent }) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messageError, setMessageError] = useState([]);

  const context = useContext(LanguageContext);
  const { dictionary } = context;

  const handleChangeName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessageBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageError([]);
    if (!fullName || !emailAddress || !messageBody) {
      const message = [];
      if (!fullName) message.push('Full Name');
      if (!emailAddress) message.push('Email Address');
      if (!messageBody) message.push('Message');
      setMessageError(message);
      return;
    }

    setIsSending(true);
    fetch(emailApiEndPoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName,
        emailAddress,
        phoneNumber,
        messageBody,
      }),
    }).then(() => {
      setIsSending(false);
      setIsSent(true);
    });
  };

  return (
    <>
      <div className="text-center text-muted mb-2">
        <p><Text tid="describeYourNeed" /></p>
      </div>
      <div className="message">
        {messageError.map((message) => (
          <div key={message}>{`${message} is required`}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} noValidate className="form">
        <input
          placeholder={dictionary.fullName}
          type="text"
          value={fullName}
          name="fullName"
          onChange={handleChangeName}
          required
          className="input"
        />
        <input
          placeholder={dictionary.emailAddress}
          type="email"
          value={emailAddress}
          name="emailAddress"
          onChange={handleChangeEmail}
          required
        />
        <input
          placeholder={dictionary.phoneNumber}
          type="text"
          autoComplete="off"
          value={phoneNumber}
          name="phoneNumber"
          onChange={handleChangeNumber}
        />
        <textarea
          className="form-control form-control-alternative"
          rows="3"
          placeholder={dictionary.messageBody}
          type="text"
          autoComplete="off"
          value={messageBody}
          name="messageBody"
          required
          onChange={handleChangeMessage}
        />
        <div className="text-center">
          <Button small>
            {isSending ? <Text tid="processing" /> : <Text tid="send" />}
          </Button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  setIsSent: PropTypes.func.isRequired,
};

export default Form;
