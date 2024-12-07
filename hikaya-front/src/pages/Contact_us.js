import React from "react";
import styles from "../components/Contact_Us/Contact_us.module.css"; // Import CSS module
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
    <section className={styles.contact}>
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <h2 className={styles.heading}>Contact Us</h2>
        <div className={styles.inputBox}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className={styles.field}
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={styles.field}
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className={`${styles.field} ${styles.mess}`}
            placeholder="Enter your message"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
