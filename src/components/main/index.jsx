import { Routes, Route } from 'react-router-dom';
import styles from './style.module.css';
import Home from '../home';
import Lost from '../lost';

const Main = () => {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lost" element={<Lost />} />
                <Route path="/psychology" element={<Lost />} />
                <Route path="/help" element={<Lost />} />
                <Route path="/about" element={<Lost />} />
            </Routes>
        </div>
    );
}

export default Main;
