import React from "react";
import styles from "../components/About_Us/About_Us.module.css"; // Updated import

const AboutUs = () => {
  const projectMessage = `Hikaya is a powerful platform where writers can share their stories, 
  find inspiration, and collaborate with others. It offers a seamless experience for writers to publish, 
  edit, and interact with the community. Whether you're a seasoned author or just starting, Hikaya provides 
  all the tools to bring your creative ideas to life.`;

  const teamMembers = [
    {
      name: "Omar Abed",
      role: "Software Engineer",
      img: "./images/omar.jpg",
      linkedin: "https://www.linkedin.com/in/omarabed-/",
      github: "https://github.com/OmarAbed16",
      email: "omarfathiabed@gmail.com",
    },
    {
      name: "Esra'a Eid",
      role: "Software Engineer",
      img: "./images/esraa.jpg",
      linkedin: "https://www.linkedin.com/in/esra-a-eid-a489b3280/",
      github: "https://github.com/EsraaEid2",
      email: "esraa.eidd2@gmail.com",
    },
    {
      name: "Hamza Zaitoun",
      role: "Computer Information systems",
      img: "./images/hamza.jpg",
      linkedin: "https://www.linkedin.com/in/hamza-zaitoun-9ab8512b1/",
      github: "https://github.com/HamzasZaitoun",
      email: "hamzasaadzaitoun@gmail.com",
    },
    {
      name: "Sultan Bkerat",
      role: "Software Engineer",
      img: "./images/sultan.jpg",
      linkedin: "https://www.linkedin.com/in/sultan-b-bkerat-98b1b6199/",
      github: "https://github.com/sultan-bassam08",
      email: "sultan.bassam08@gmail.com",
    },
    {
      name: "Mayar Qutishat",
      role: "Computer Information systems",
      img: "./images/mayar.jpg",
      linkedin: "https://www.linkedin.com/in/mayar-qutishat-1477a0326/",
      github: "https://github.com/Mayarqutishat",
      email: "mayarfqutishat@gmail.com",
    },
  ];

  return (
    <section className={styles.aboutUsSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p className={styles.sectionSubtitle}>{projectMessage}</p>
          </div>

          <div className="col-12 text-center mt-5">
            <h2>OUR TEAM</h2>
          </div>
        </div>

        {/* First Row: 3 Cards */}
        <div className="row mt-3">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className={styles.teamItem}>
                <img
                  src={member.img}
                  alt={`${member.name}'s Avatar`}
                  className={`${styles.teamImg} img-fluid rounded-circle`}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className={styles.teamInfo}>
                  <a
                    href={member.linkedin}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "10px" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.github}
                    className="btn btn-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "10px" }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Cards, Centered */}
        <div className="row mt-3 justify-content-center">
          {teamMembers.slice(3).map((member, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className={styles.teamItem}>
                <img
                  src={member.img}
                  alt={`${member.name}'s Avatar`}
                  className={`${styles.teamImg} img-fluid rounded-circle`}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className={styles.teamInfo}>
                  <a
                    href={member.linkedin}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "10px" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href={member.github}
                    className="btn btn-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "10px" }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
