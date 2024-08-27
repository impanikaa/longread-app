import styles from './style.module.css'
import { Link } from 'react-router-dom';
import Planet from '../../data/planet.png'
import Help from '../../data/Help circle.png'
import Heart from '../../data/Heart circle.png'
import Ps2 from '../../data/psychologist2.jpg'
import Ps3 from '../../data/psychologist3.jpg'
import Nikita from '../../data/people/Nikita.png'
import Tatiana from '../../data/people/Tatiana.png'
import Tamara from '../../data/people/Tamara1.png'
import Olymp1 from '../../data/olymp.jpg'
import Teacher1 from '../../data/teacher.png'

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
            <p>Почти все олимпиадники сталкиваются с различными психологическими проблемами на своем пути и часто не знают, 
                как с ними справляться. Это мешает ботать в удовольствие и брать дипломы. 
                Мы решили немного это исправить и создать некую памятку, 
                где описаны причины и варианты решения проблем. Так и появился проект «Заботать».
            <br/>В проекте есть 2 основных раздела: «инсайт» и «помощь друга» - о них вы можете прочитать ниже.</p>
            <p>Обратите внимание! В нашем проекте нет универсальных методов решения проблем, потому что, на самом деле, любая проблема уникальна! У каждого свои вводные, и со всем нужно разбираться в индивидуальном порядке.
            <br/>Поэтому если вы не найдете решение для себя после прочтения советов из этих разделов, рекомендуем обратиться к психологу!</p>
            </div>
        </div>

        <div className={styles.container_description_1}>
            <div className={styles.description_text}>
                <div className={styles.outline}><h2>Инсайт</h2></div>
                <p>Мы проанализировали ответы олимпиадников из формы и выбрали 13 наиболее распространенных 
                    проблем для обсуждения с психологами, опытными олимпиадниками и преподавателями.</p>
                <Link to='/psychology' className={styles.links}><button>Перейти</button></Link>
            </div>
            <img src={Help}></img>
        </div>

        <div className={styles.container_description_2}>
            <div className={styles.description_text}>
                <div className={styles.outline}><h2>Помощь друга</h2></div>
                <p>Многие ребята сталкиваются с тревожностью по разным поводам, и это действительно мешает работе. В этом разделе другими олимпиадниками описаны способы борьбы с 6 видами тревожности касательно олимпиад.</p>
                <Link to='/help' className={styles.links}><button>Перейти</button></Link>
            </div>
            <img src={Heart}></img>
        </div>

        <div className={styles.container_psychologist}>
            <h3>Психологи</h3>

            <div className={styles.ps_block_1}>
                <div className={styles.ps_block_a}>
                    <div className={styles.ps_block_a_1}>Георгий Гегенава</div>
                    <div className={styles.ps_block_a_2}><a href='https://gegegeorgy.tilda.ws/'>gegegeorgy.tilda.ws</a></div>
                    <div className={styles.ps_block_a_3}>Олимпиадный психолог</div>
                </div>
                <div className={styles.ps_block_b_1}><p className={styles.text_b}>Я клинический психолог, использующий в работе интегративный подход, 
                    включающий в себя техники из когнитивной, системно-семейной, клиент-центрированной терапий. 
                    Уже более двух лет сопровождаю ребят на олимпиадах и выездных школах.</p> </div>
                <img src={Ps2} className={styles.ps_block_c_1}></img>
            </div>

            <div className={styles.ps_block_2}>
                <div className={styles.ps_block_a}>
                    <div className={styles.ps_block_a_1}>Поля Коноплева</div>
                    <div className={styles.ps_block_a_2}><a href='https://t.me/poka_ne_psycholog'>tg channel</a></div>
                    <div className={styles.ps_block_a_3}>Студентка 3-его курса ОП «Психология» НИУ ВШЭ, вожатая ЛЭШ</div>
                </div>
                <div className={styles.ps_block_b_2}><p className={styles.text_b}>Я помогу сделать первые шаги к решению проблем с пониманием родных, 
                    сравнением себя с другими и трудностью с тем, чтобы влиться в олимпиадную тусовку.</p> </div>
                <img src={Ps3} className={styles.ps_block_c_2}></img>
            </div>
        </div>

        <div className={styles.container_people}>
            <h3>Олимпиадники</h3>
            <div className={styles.people_block}>
                <div className={styles.person}>
                    <img src={Olymp1}></img>
                    <div className={styles.person_text}>
                        <h2>Имя Фамилия</h2>
                        <p className={styles.person_subject}>Предмет 1, предмет 2, предмет 3</p>
                        <p>Описание описание описание описание описание</p>
                        <a href='' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='' target="_blank" rel="noopener noreferrer">TG-Channel - "Название"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Tamara}></img>
                    <div className={styles.person_text}>
                        <h2>Тамара Еремина</h2>
                        <p className={styles.person_subject}>Право</p>
                        <p>Дважды победитель ВсОШ по праву, ПиП перечневых олимпиад по праву</p>
                        <a href='https://t.me/Ego_sum_causidicum' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='https://t.me/IL_TTO' target="_blank" rel="noopener noreferrer">TG-Channel - "Innovative Law | TTO"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Olymp1}></img>
                    <div className={styles.person_text}>
                        <h2>Имя Фамилия</h2>
                        <p className={styles.person_subject}>Предмет 1, предмет 2, предмет 3</p>
                        <p>Описание описание описание описание описание</p>
                        <a href='' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='' target="_blank" rel="noopener noreferrer">TG-Channel - "Название"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Olymp1}></img>
                    <div className={styles.person_text}>
                        <h2>Имя Фамилия</h2>
                        <p className={styles.person_subject}>Предмет 1, предмет 2, предмет 3</p>
                        <p>Описание описание описание описание описание</p>
                        <a href='' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='' target="_blank" rel="noopener noreferrer">TG-Channel - "Название"</a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.container_people}>
            <h3>Преподаватели</h3>
            <div className={styles.people_block}>
                <div className={styles.person}>
                    <img src={Nikita}></img>
                    <div className={styles.person_text}>
                        <h2>Никита Киселев</h2>
                        <p className={styles.person_subject}>История</p>
                        <p>Победитель ВСОШ по истории, ПиП перечневых олимпиад, преподаватель в "Кружке Станкевича"</p>
                        <a href='https://stankevich.academy/' target="_blank" rel="noopener noreferrer">Курсы "Кружок Станкевича" (литература и история)</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Tatiana}></img>
                    <div className={styles.person_text}>
                        <h2>Татьяна Завьялова</h2>
                        <p className={styles.person_subject}>Математика, экономика</p>
                        <p>Кандидат экономических наук, репетитор. Проходила стажировку в ОЦ Сириус на математической смене.</p>
                        <a href='https://t.me/Zav_Tatiana' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='https://t.me/lite_math' target="_blank" rel="noopener noreferrer">TG-Channel - "Учится лёгким испугом"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Teacher1}></img>
                    <div className={styles.person_text}>
                        <h2>Имя Фамилия</h2>
                        <p className={styles.person_subject}>Предмет 1, предмет 2, предмет 3</p>
                        <p>Описание описание описание описание описание</p>
                        <a href='' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='' target="_blank" rel="noopener noreferrer">TG-Channel - "Название"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Teacher1}></img>
                    <div className={styles.person_text}>
                        <h2>Имя Фамилия</h2>
                        <p className={styles.person_subject}>Предмет 1, предмет 2, предмет 3</p>
                        <p>Описание описание описание описание описание</p>
                        <a href='' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='' target="_blank" rel="noopener noreferrer">TG-Channel - "Название"</a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.container_gratitude}>
            <div className={styles.gratitude_text}>
            <p>Выражаем благодарность <a href='https://t.me/oooooootschet'>Олимпиадному Отсчёту</a>, <a href='https://vk.com/ezhovunion'>Ежовцам</a><br/>
            и другим авторам тг-каналов, поддержавшим наш проект!</p>
            <p>Спасибо всем, кто заполнил форму и доверил нам свою проблему.</p>
            <p>Если вы знаете другие варианты решения проблем, описанных в разделе "Инсайт", можете написать в <a href='https://t.me/ma_yakhricheva' target='_blank'>тг @ma_yakhricheva </a>«Знаю решение». Мы обсудим вашу идею и, возможно, добавим ее на сайт)</p>
            </div>
        </div>

    </div>
    );
}


export default Home;