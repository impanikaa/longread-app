import styles from './style.module.css'
import { Link } from 'react-router-dom';
import Planet from '../../data/planet.png'
import Help from '../../data/Help circle.png'
import Heart from '../../data/Heart circle.png'

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

        <div className={styles.container_about}>
            <div className={styles.about_text}>
            <p>Психологические проблемы, связанные с участием в олимпиадах, могут серьезно повлиять 
                на успехи и мотивацию школьников. Многие сталкиваются с трудностями: от неспособности заставить 
                себя учиться до переживаний из-за прошлых неудач. Родители часто не понимают желание детей 
                участвовать в олимпиадах, а стресс и волнение приводят к срывам во время туров.</p>
            <p>Наша цель - выявить наиболее распространенные проблемы олимпиадников и обсудить их 
            с профессиональными психологами, чтобы найти пути решения и дать полезные советы на будущее. 
            Мы хотим создать исчерпывающий лонгрид, который поможет ребятам справляться с этими трудностями.</p>
            </div>
        </div>

        <div className={styles.container_description_1}>
            <div className={styles.description_text}>
                <div className={styles.outline}><h2>Cеанс у психолога</h2></div>
                <p>Мы проанализировали ответы олимпиадников из формы и выбрали 16 наиболее распространенных 
                    проблем для обсуждения с психологами на Летней экономической школе, где нас поддержат 
                    Любовь Соломина и Георгий Гегенава – опытные психологи, работающие с олимпиадниками.</p>
                <Link to='/psychology' className={styles.links}><button>Перейти</button></Link>
            </div>
            <img src={Help}></img>
        </div>

        <div className={styles.container_description_2}>
            <div className={styles.description_text}>
                <div className={styles.outline}><h2>Помощь друга</h2></div>
                <p>В случае, если распространенных проблем будет больше 16, я запущу еще одну гугл-форму, но уже для того, 
                    чтобы советы давали друг другу сами олимпиадники, и результаты так же опубликую в лонгриде.</p>
                <Link to='/help' className={styles.links}><button>Перейти</button></Link>
            </div>
            <img src={Heart}></img>
        </div>

        <div className={styles.container_gratitude}>
            <div className={styles.gratitude_text}>
            <h5>Выражаем благодарность <a href='https://t.me/oooooootschet'>Олимпиадному Отсчёту</a>, <a href='https://vk.com/ezhovunion'>Ежовцам</a></h5>
            <h5>и другим авторам тг-каналов, поддержавшим наш проект!</h5>
            <h5>Спасибо всем, кто заполнил форму и доверил нам свою проблему.</h5>
            </div>
        </div>

    </div>
    );
}


export default Home;