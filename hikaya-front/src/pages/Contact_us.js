import React from "react";
import "../components/Contact_Us/Contact_us.css";
import Swal from "sweetalert2";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7eb2f20d-f246-43da-abe2-b79a358edae4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Message failed!",
        icon: "error",
      });
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact_Us</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          ></input>
        </div>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          ></input>
        </div>
        <div className="input-box">
          <label> Message </label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message </button>
      </form>
    </section>
  );
};
export default Contact;
