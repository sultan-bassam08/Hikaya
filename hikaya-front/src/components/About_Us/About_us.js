import React from 'react';
import './About_Us.css';

const AboutUs = () => {
  const projectMessage = `Hikaya is a powerful platform where writers can share their stories, 
  find inspiration, and collaborate with others. It offers a seamless experience for writers to publish, 
  edit, and interact with the community. Whether you're a seasoned author or just starting, Hikaya provides 
  all the tools to bring your creative ideas to life.`;

  const teamMembers = [
    {
      name: 'Omar Abed',
      role: 'Software Engineer',
      img: './images/omar.jpg',
      linkedin: 'https://www.linkedin.com/in/omarabed-/',
      github: 'https://github.com/omarabed',
      email: 'omar.abed@example.com',
    },
    {
      name: 'Esra\'a Eid',
      role: 'Software Engineer',
      img: './images/esraa.jpg',
      linkedin: 'https://www.linkedin.com/in/esra-a-eid-a489b3280/',
      github: 'https://github.com/EsraaEid2',
      email: 'esraa.eidd2@gmail.com',
    },
    {
      name: 'Hamza Zaitoun',
      role: 'Computer Information systems',
      img: './images/hamza.jpg',
      linkedin: 'https://www.linkedin.com/in/hamza-zaitoun-9ab8512b1/',
      github: 'https://github.com/HamzasZaitoun',
      email: 'hamzasaadzaitoun@gmail.com',
    },
    {
      name: 'Sultan Bkerat',
      role: 'Software Engineer',
      img: './images/sultan.jpg',
      linkedin: 'https://www.linkedin.com/in/sultan-b-bkerat-98b1b6199/',
      github: 'https://github.com/sultanbkerat',
      email: 'sultan.bkerat@example.com',
    },
    {
      name: 'Mayar Qutishat',
      role: 'Computer Information systems',
      img: './images/mayar.jpg',
      linkedin: 'https://www.linkedin.com/in/mayar-qutishat-1477a0326/',
      github: 'https://github.com/Mayarqutishat',
      email: 'mayarfqutishat@gmail.com',
    }
  ];

  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">{projectMessage}</p>
          </div>

          {/* Team Section Title */}
          <div className="col-12 text-center mt-5">
            <h2>OUR TEAM</h2>
          </div>

          {/* Team Member Cards */}
          <div className="row mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
            {teamMembers.map((member, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={index}>
                <div className="team-item">
                  <img
                    src={member.img}
                    alt={`${member.name}'s Avatar`}
                    className="team-img img-fluid rounded-circle"
                  />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <div className="team-info">
                    <a
                      href={member.linkedin}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: '10px' }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={member.github}
                      className="btn btn-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: '10px' }}
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
      </div>
    </section>
  );
};

export default AboutUs;
