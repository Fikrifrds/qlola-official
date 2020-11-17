import React, { useState } from 'react';
import Img from 'react-image';
import MailSent from '../../assets/images/mail-sent.svg';
import Card from '../../components/Card';
import Form from './Form';
import { Text } from '../../context/LanguageContext';

const Sent = () => (
  <div className="email-sent">
    <Text tid="successSendMessage" />
    <div className="sent-icon">
      <Img src={MailSent} width={70} />
    </div>
  </div>
);

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="contact">
      <Card className="contact-card">
        <div>
          { isSent ? <Sent /> : <Form setIsSent={setIsSent} />}
        </div>
      </Card>
      <div>
        Or email to
        {' '}
        <a href="mailto:qloladigital@gmail.com?subject=Hello Qlola" className="link link-bold">qloladigital@gmail.com</a>
      </div>
    </div>
  );
};

export default Contact;
