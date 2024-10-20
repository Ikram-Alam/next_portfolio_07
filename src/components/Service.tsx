import styles from '../styles/Service.module.css'; // Adjust the path to your styles folder

const services = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications using cutting-edge technologies like Next.js, React, and Node.js.',
    icon: '🌐', // You can use any emoji or SVG icon here
  },
  {
    title: 'AI & Machine Learning',
    description: 'Developing AI-powered solutions using Python, TensorFlow, and other machine learning libraries for real-world applications.',
    icon: '🤖',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile apps that deliver high performance and smooth user experiences.',
    icon: '📱',
  },
  {
    title: 'Cloud Solutions',
    description: 'Providing scalable cloud services using Firebase, AWS, and Google Cloud to ensure efficient infrastructure.',
    icon: '☁️',
  },
];

const Service = () => {
  return (
    <section className={styles.serviceSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.heading}>My Services</h2>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
