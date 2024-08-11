import { Routes, Route } from 'react-router-dom';
import styles from './style.module.css';
import Home from '../home';
import Lost from '../lost'
import About from '../about';
import Psychology from '../psychology';
import Help from '../help';

const Main = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lost" element={<Lost />} />
                <Route path="/psychology" element={<Psychology />} />
                <Route path="/help" element={<Help />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default Main;
