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
  return (
    <div className={styles['home-page']}>
      <h1 className={styles['home-title']}>Welcome to Next.js on Docker!</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}