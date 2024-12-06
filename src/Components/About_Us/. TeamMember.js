import React from 'react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={`${name}`} style={styles.image} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '200px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
};

export default TeamMember;
