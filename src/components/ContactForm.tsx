"use client"; // Use this if you want to use client components

import styles from '../styles/ContactForm.module.css'; // Adjust the path to your CSS file

const ContactForm = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Me</h2>
        <form action="mailto:ikramalam515@gmail.com" method="post"  className={styles.contactForm}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className={styles.input} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className={styles.input} 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            className={styles.textarea} 
          />
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
