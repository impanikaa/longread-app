import React, { useState } from 'react';
import styles from './style.module.css';
import Help from '../../data/Help circle.png';
import data from './data.json';

const formatText = (text) => {
    const formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Жирный текст
        .replace(/__(.*?)__/g, '<em>$1</em>')             // Курсив
        .replace(/\^\^(.*?)\^\^/g, '<u>$1</u>') 
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')  // Ссылки
    return formattedText;
};

const convertNewLinesToBr = (text) => {
    return text.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            <span dangerouslySetInnerHTML={{ __html: formatText(item) }} />
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
                    <h2>Ответы</h2>
                    {selectedTopic.answers.map((answer, index) => (
                        <div key={index} className={styles.answer}>
                            <p>{convertNewLinesToBr(formatText(answer.text))}</p>
                            <p className={styles.author}>— {answer.author}</p>
                            {answer.contact && (
                                <a href={answer.contact} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Контакт
                                </a>
                            )}
                            {answer.tgChannel && (
                                <a href={answer.tgChannel} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    TG-Channel
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Psychology;
