import React, { useState } from 'react';
import styles from './style.module.css';
import Help from '../../data/Help circle.png';
import data from './data.json';

const convertNewLinesToBr = (text) => {
    return text.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {item}
            <br /><br />
        </React.Fragment>
    ));
};

const Psychology = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <div className={styles.container}>
            <div className={styles.container_main}>
                <div className={styles.main_text}>
                    <div className={styles.outline}><h1>Инсайт</h1></div>
                    <h2 style={{ textAlign: 'right' }}>советы психологов, опытных олимпиадников и преподавателей</h2>
                </div>
                <img src={Help} alt="Помощь" />
            </div>

            <div className={styles.container_questions}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.question_topic} ${selectedTopic === item ? styles.selected : ''}`}
                        onClick={() => handleTopicClick(item)}
                    >
                        {item.topic}
                    </div>
                ))}
            </div>

            {selectedTopic && (
                <div className={styles.solution_container}>
                    <h3>{selectedTopic.topic}</h3>
                    <h2>Описание проблемы</h2>
                    <p>{convertNewLinesToBr(selectedTopic.description)}</p>
                    <h2>Ответ</h2>
                    <p>{selectedTopic.solution}</p>
                </div>
            )}
        </div>
    );
};

export default Psychology;
