import React, { useState } from 'react';
import styles from './style.module.css';
import Heart from '../../data/Heart circle.png';
import data from './data.json';

const Help = () => {
    const [openSections, setOpenSections] = useState([]);

    const toggleSection = (index) => {
        if (openSections.includes(index)) {
        setOpenSections(openSections.filter((i) => i !== index));
        } else {
        setOpenSections([...openSections, index]);
        }
    };

    const formatText = (text) => {
        return text.split('\n').map((str, index) => (
        <React.Fragment key={index}>
            {str}
            <br /> <br/>
        </React.Fragment>
        ));
    };

    return (
        <div className={styles.container}>
            <div className={styles.container_main}>
                <div className={styles.main_text}>
                    <div className={styles.outline}><h1>Помощь друга</h1></div>
                    <h2 style={{ textAlign: 'right' }}>обсуждение проблем олимпиадников с другими олимпиадниками</h2>
                </div>
                <img src={Heart} alt="Картинка" />
            </div>

            <div className={styles.container_problems}>
                {data.map((problem, index) => (
                <div key={index} className={styles.problem}>
                    <h2 className={styles.problemTitle} onClick={() => toggleSection(index)}>
                        <span className={`${styles.arrow} ${openSections.includes(index) ? styles.open : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M12.354 8.354a.5.5 0 0 0 0-.708L8.354 3.646a.5.5 0 1 0-.708.708L11.293 8 7.646 11.646a.5.5 0 0 0 .708.708l4-4z"/>
                        </svg>
                        </span>
                        {problem.title}
                    </h2>
                    <div className={`${styles.answers} ${openSections.includes(index) ? styles.visible : styles.hidden}`}>
                        {problem.answers.map((answer, i) => (
                        <div key={i} className={styles.answer}>
                            <p>{formatText(answer.text)}</p>
                            <p className={styles.author}>— {answer.author}</p>
                            {answer.contact && (
                            <a href={answer.contact} target="_blank" rel="noopener noreferrer">
                                Контакт
                            </a>
                            )}
                            {answer.tgChannel && (
                            <a href={answer.tgChannel} target="_blank" rel="noopener noreferrer">
                                TG-Channel
                            </a>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        
            <div className={styles.container_text}>
                <div className={styles.text_text}>
                <p>Мы надеемся, что эти советы помогут вам в преодолении своей тревожности. В более тяжелом случае обязательно обратитесь к психологу, чтобы не дать тревожности победить себя.</p>
                </div>
            </div>
    </div>
  );
};

export default Help;
