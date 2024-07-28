import styles from './style.module.css'
import { Link } from 'react-router-dom';
import Planet from '../../data/planet.png'

function scrollToElement() {
    const element = document.getElementById('target-element');
    element.scrollIntoView({ behavior: 'smooth' });
  }

const Home = () => {
    return (
    <div className={styles.container}>
        
        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <div className={styles.outline}><h1>Лонгрид</h1></div>
                <h2 style={{ textAlign: 'right' }}>с заботой о психологическом здоровье олимпидаников</h2>
            </div>
            <img src={Planet}></img>
        </div>

    </div>
    );
}


export default Home;