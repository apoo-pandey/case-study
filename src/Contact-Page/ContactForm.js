import { useState } from "react";

const ContactForm = () => {
  const [msglist, setMsgList] = useState([
    { name: "apii", email: "nsdcnkdsn", sub: "scsdcd", msg: "sdsdcds" },
  ]);

  const sendMsg = (event) => {
    event.preventDefault();
    let input = event.target;
    let newState = {
      name: input.username.value,
      email: input.email.value,
      sub: input.subject.value,
      msg: input.message.value,
    };
    input.username.value = "";
    input.email.value = "";
    input.subject.value = "";
    input.message.value = "";
    setMsgList([...msglist, newState]);
    console.log(msglist);
  };
  return (
    <div>
      <form onSubmit={sendMsg}>
        <input
          className="contact-input"
          type="text"
          name="username"
          placeholder="Name"
          size={50}
        />
        <br />
        <br />
        <input
          className="contact-input"
          type="text"
          name="email"
          placeholder="Email"
          size={50}
          required="true"
        />
        <br />
        <br />
        <input
          className="contact-input"
          type="text"
          name="subject"
          placeholder="Subject"
          size={50}
        />
        <br />
        <br />
        <input
          className="contact-input"
          type="text"
          name="message"
          placeholder="Message"
          size={50}
        />
        <br />
        <button className="input-btn" type="submit" size={50}>
          Send Message
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
