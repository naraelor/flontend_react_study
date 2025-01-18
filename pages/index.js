import { useEffect, useState } from 'react';
import styles from './styles.module.css';

function MyButton() {
  return (
    <button className={styles['my-button']}>
      I'm a button
    </button>
  );
}
function AboutPage() {
  return (
    <div className={styles['about-page']}>
      <h1 className={styles['about-title']}>About</h1>
      <p className={styles['about-description']}>Hello there.<br />How do you do?</p>
      <MyButton />
    </div>
  );
}

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    fetch(`${backendUrl}/api/hello`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching API:', error));
  }, []);

  return (
    <div className={styles['home-page']}>
      <h1 className={styles['home-title']}>Welcome to Next.js with a Separate Backend!</h1>
      <p>{message}</p>
      <MyButton />
      <AboutPage />
    </div>
  );
}
