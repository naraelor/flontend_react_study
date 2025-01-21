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
  const [helloMessage, setHelloMessage] = useState('');
  const [goodbyeMessage, setGoodbyeMessage] = useState('');

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    console.log(`Fetching hello from ${backendUrl}/api/hello`);
    fetch(`${backendUrl}/api/hello`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Hello API response:', data);
        setHelloMessage(data.message);
      })
      .catch((error) => console.error('Error fetching hello API:', error));
  }, []);

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    console.log(`Fetching goodbye from ${backendUrl}/api/goodbye`);
    fetch(`${backendUrl}/api/goodbye`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Goodbye API response:', data);
        setGoodbyeMessage(data.message);
      })
      .catch((error) => console.error('Error fetching goodbye API:', error));
  }, []);

  return (
    <div className={styles['home-page']}>
      <h1 className={styles['home-title']}>Welcome to Next.js with a Separate Backend!</h1>
      <p>{helloMessage}</p>
      <p>{goodbyeMessage}</p>
      <MyButton />
      <AboutPage />
    </div>
  );
}