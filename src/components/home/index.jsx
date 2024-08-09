import styles from './style.module.css'
import { Link } from 'react-router-dom';
import Planet from '../../data/planet.png'
import Help from '../../data/Help circle.png'
import Heart from '../../data/Heart circle.png'
import Ps1 from '../../data/psychologist1.jpg'
import Ps2 from '../../data/psychologist2.jpg'
import Ps3 from '../../data/psychologist3.jpg'

const Home = () => {
    return (
    <div className={styles.container}>
        
        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <div className={styles.outline}><h1><span className={styles.highlight}>Забота</span>ть</h1></div>
                <h2 style={{ textAlign: 'right' }}>о психологическом здоровье<br/> олимпидаников</h2>
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

        <div className={styles.container_psychologist}>
            <h3>Психологи</h3>

            <div className={styles.ps_block_1}>
                <div className={styles.ps_block_a}>
                    <div className={styles.ps_block_a_1}>Любовь Соломина</div>
                    <div className={styles.ps_block_a_2}><a href='https://mors.center/solomina'>mors.center/solomina</a></div>
                    <div className={styles.ps_block_a_3}>Педагог-психолог Школы ЦПМ, психолог команд по Географии и Экономике</div>
                </div>
                <div className={styles.ps_block_b_1}><p className={styles.text_b}>Я опытный психолог, специализирующийся на работе с олимпиадниками. 
                    На протяжении многих лет она помогает школьникам преодолевать психологические трудности, 
                    связанные с участием в олимпиадах, и добиваться высоких результатов.</p> </div>
                <img src={Ps1} className={styles.ps_block_c_1}></img>
            </div>

            <div className={styles.ps_block_2}>
                <div className={styles.ps_block_a}>
                    <div className={styles.ps_block_a_1}>Георгий Гегенава</div>
                    <div className={styles.ps_block_a_2}><a href='https://gegegeorgy.tilda.ws/'>gegegeorgy.tilda.ws</a></div>
                    <div className={styles.ps_block_a_3}>Олимпиадный психолог текст текст текст текст текст текст текст</div>
                </div>
                <div className={styles.ps_block_b_2}><p className={styles.text_b}>Я клинический психолог, использующий в работе интегративный подход, 
                    включающий в себя техники из когнитивной, системно-семейной, клиент-центрированной терапий. 
                    Уже более двух лет он сопровождает ребят на олимпиадах и выездных школах.</p> </div>
                <img src={Ps2} className={styles.ps_block_c_2}></img>
            </div>

            <div className={styles.ps_block_1}>
                <div className={styles.ps_block_a}>
                    <div className={styles.ps_block_a_1}>Поля Коноплева</div>
                    <div className={styles.ps_block_a_2}><a href='https://t.me/poka_ne_psycholog'>tg channel</a></div>
                    <div className={styles.ps_block_a_3}>Студентка 2-ого курса ОП «Психология» НИУ ВШЭ, вожатая ЛЭШ</div>
                </div>
                <div className={styles.ps_block_b_1}><p className={styles.text_b}>Я помогу сделать первые шаги к решению проблем с пониманием родных, 
                    сравнением себя с другими и трудностью с тем, чтобы влиться в олимпиадную тусовку. 
                    Текст текст текст текст текст текст текст текст текст текст текст текст
                    текст текст текст текст текст текст</p> </div>
                <img src={Ps3} className={styles.ps_block_c_1}></img>
            </div>
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