import styles from './style.module.css';
import { Link } from 'react-router-dom';
import logoImage from '../../data/header_footer/Logo.png'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_elem}>
      <div className={styles.navbar_line}>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.links}>На главную</Link>
        <Link to='/psychology' className={styles.links}>Сеанс у психолога</Link>
        <Link to='/help' className={styles.links}>Помощь друга</Link>
        <Link to='/about' className={styles.links}>О проекте</Link>
      </nav>
      <div className={styles.line}></div>
      </div>
      <div className={styles.text_logo}>
        <div>
        <p className={styles.text}>По всем вопросам:</p>
        <p className={styles.text}><a href='https://t.me/ma_yakhricheva'>https://t.me/ma_yakhricheva</a></p>
        </div>
        <p className={styles.text}>Очень крутой слоган</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
