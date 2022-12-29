import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import MessageBox from "./MessageBox";


const Results = () => {
  return (
    <MessageBox variant="success">
      <p>
        Your message has been successfully sent..
      </p>
    </MessageBox>
  );
};

function Contact(_props: any) {
  const [showResults, setShowResults] = useState(false);
  const sendEmail = () => {

    emailjs
      .sendForm(
        "service_kxjvx8r",
        "template_3y0thew",
        
        "user_8VP934wQIn0zZjWPmD1lI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
    setShowResults(true);
  };

  //   hide element
  setTimeout(() => {
    setShowResults(false);
  }, 5000);

  return (
    <form action="contact" onSubmit={sendEmail} className="max-w-md px-4 mx-auto mt-12">
      <div className="">
        <h2 className="text-center py-3 text-white">Say Hello!</h2>
        
        <div className="">
          <br />
          <div className="form-group">
            <label className="text-white">Your Name:</label>
            <div className="flex items-center p-1 rounded-md text-gray-100">
            <input placeholder="Your Name" className="form-control" type="text" name="fullName" required />
            <br />
            </div>
          </div>
          <br />
          <label className="text-white">Your Email:</label>
          <div className="flex items-center p-1 rounded-md text-gray-100">
          <input placeholder="example@domain.com" className="form-control" type="email" name="email" required />
          <br />
          </div>
          <br />
          <div className="form-group">
            <label className="text-white">Message:</label>
            <br />
            <div className="flex items-center p-1 rounded-md text-gray-100">
            <textarea placeholder="Your Message" name="message" required className="form-control"></textarea>
            </div>
          </div>
        </div>
        <br />
        <div className="form-item">
        <button className="btn btn-primary bt">SUBMIT</button>
        </div>
        <div className="">{showResults ? <Results /> : null}</div>
      </div>
    </form>
  );
}

export default Contact;
