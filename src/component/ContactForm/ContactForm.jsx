import style from "./ContactFrom.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    alert(name + "  " + email + "  " + text)

    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  }

  return (
    <section className={`${style.container}`}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>

        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px" />} />

        <form onSubmit={onSubmit}>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={style.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="email" rows={8} />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
          
            <Button text="SUBMIT" />
          </div>
          {/* {name + " " + email + " " + text}; */}
          {/* <div>
            {name + " " + email + " " + text};
          </div> */}

        </form>
      </div>

      <div className={style.contact_image}>
        <img src="/images/service_logo.svg" alt="logo" />
      </div>
    </section>
  );
};

export default ContactForm;
