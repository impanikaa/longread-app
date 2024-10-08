import styles from './style.module.css'
import { Link } from 'react-router-dom';
import Planet from '../../data/planet.png'
import Help from '../../data/Help circle.png'
import Heart from '../../data/Heart circle.png'
import Ps2 from '../../data/psychologist2.jpg'
import Ps3 from '../../data/psychologist3.jpg'
import Nikita from '../../data/people/Nikita.png'
import Tatiana from '../../data/people/Tatiana.png'
import Tamara from '../../data/people/Tamara.png'
import Melania from '../../data/people/Melania.png'
import Egor from '../../data/people/Egor.png'
import Vitaliy from '../../data/people/Vitaliy.png'
import Nikolay from '../../data/people/Nikolay.png'
import Margarita from '../../data/people/Margarita.png'
import Anna from '../../data/people/Anna.png'

const Home = () => {
    return (
    <div className={styles.container}>
        
        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <div className={styles.outline}><h1><span className={styles.highlight}>Забота</span>ть</h1></div>
                <h2 style={{ textAlign: 'right' }}>о психологическом здоровье<br/> олимпиадников</h2>
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
                <div className={styles.ps_block_b_2}><p className={styles.text_b}>Я могу помочь наставить на путь решения некоторых 
                    твоих трудностей: как начать лучше понимать своих близких, перестать сравнивать себя с другими 
                    и легче влиться в олимпиадную тусовку.</p> </div>
                <img src={Ps3} className={styles.ps_block_c_2}></img>
            </div>
        </div>

        <div className={styles.container_people}>
            <h3>Олимпиадники</h3>
            <div className={styles.people_block}>
                <div className={styles.person}>
                    <img src={Melania}></img>
                    <div className={styles.person_text}>
                        <h2>Меланья Ремета</h2>
                        <p className={styles.person_subject}>Литература, МХК, итальянский язык</p>
                        <p>Победитель ВСОШ по искусству и дважды призер по литературе, поступила в НИУ ВШЭ на ОП Медиакоммуникации</p>
                        <a href='https://t.me/melagnese_pr' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='https://t.me/melagnese' target="_blank" rel="noopener noreferrer">TG-Channel - "Мелиссовый чай"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Tamara}></img>
                    <div className={styles.person_text}>
                        <h2>Тамара Еремина</h2>
                        <p className={styles.person_subject}>Право</p>
                        <p>Дважды победитель ВсОШ по праву, призёр и победитель перечневых олимпиад по праву</p>
                        <a href='https://t.me/Ego_sum_causidicum' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='https://t.me/IL_TTO' target="_blank" rel="noopener noreferrer">TG-Channel - "Innovative Law | TTO"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Egor}></img>
                    <div className={styles.person_text}>
                        <h2>Егор Салимзянов</h2>
                        <p className={styles.person_subject}>Экология, биология</p>
                        <p>Призёр ЗЭ ВсОШ по экологии, более 10 лет опыта работы с проектами, основатель одного из крупнейших сообществ олимпиадников в телеграм</p>
                        <a href='https://t.me/stendhalsnightmare' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='https://t.me/oooooootschet' target="_blank" rel="noopener noreferrer">TG-Channel - "Олимпиадный Отсчёт"</a>
                    </div>
                </div>
                <div className={styles.person}>
                    <img src={Margarita}></img>
                    <div className={styles.person_text}>
                        <h2>Маргарита Кашапова</h2>
                        <p className={styles.person_subject}>Биология</p>
                        <p>Призёр РЭ ВсОШ и Физтеха по биологии, поступила в НИУ ВШЭ на "Клеточную и молекулярную биотехнологию", автор научно-популярного канала по биологии</p>
                        <a href='https://t.me/marg000t' target="_blank" rel="noopener noreferrer">Контакт</a>
                        <a href='https://t.me/biomarka' target="_blank" rel="noopener noreferrer">TG-Channel - "Биомарка"</a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.container_people}>
            <h3>Преподаватели</h3>
            <div className={styles.people_block_1}>
                <div className={styles.person_1}>
                    <img src={Nikita}></img>
                    <div className={styles.person_text}>
                        <h2>Никита Киселев</h2>
                        <p className={styles.person_subject}>История</p>
                        <p>Победитель ВСОШ по истории, ПиП перечневых олимпиад, преподаватель в "Кружке Станкевича"</p>
                        <a href='https://stankevich.academy/' target="_blank" rel="noopener noreferrer">Курсы "Кружок Станкевича" (литература и история)</a>
                    </div>
                </div>
                <div className={styles.person_1}>
                    <img src={Tatiana}></img>
                    <div className={styles.person_text}>
                        <h2>Татьяна Завьялова</h2>
                        <p className={styles.person_subject}>Математика, экономика</p>
                        <p>Кандидат экономических наук, репетитор. Проходила стажировку в ОЦ Сириус на математической смене.</p>
                        <a href='https://t.me/Zav_Tatiana' target="_blank" rel="noopener noreferrer">Контакт (тг)</a>
                        <a href='https://t.me/lite_math' target="_blank" rel="noopener noreferrer">TG-Channel - "Учится лёгким испугом"</a>
                    </div>
                </div>
                <div className={styles.person_1}>
                    <img src={Anna}></img>
                    <div className={styles.person_text}>
                        <h2>Анна Шишкина</h2>
                        <p className={styles.person_subject}>Физика, астрономия</p>
                        <p>Член жюри финалов ВсОШ по физике и астрономии, член жюри ISPhO и APhB</p>
                        <a href='https://vk.com/shafaf' target="_blank" rel="noopener noreferrer">Контакт (ВК)</a>
                        <a href='https://t.me/shaf_phis' target="_blank" rel="noopener noreferrer">TG-Channel - "С любовью к физике"</a>
                    </div>
                </div>
            </div>
            <div className={styles.people_block_2}>
                <div className={styles.person_2}>
                    <img src={Vitaliy}></img>
                    <div className={styles.person_text}>
                        <h2>Виталий Буев</h2>
                        <p className={styles.person_subject}>Биология</p>
                        <p>Руководитель олимпиадного проекта Атриум | Биология</p>
                        <a href='https://vk.com/lazy_fern' target="_blank" rel="noopener noreferrer">Контакт (ВК)</a>
                        <a href='https://t.me/lazy_fern' target="_blank" rel="noopener noreferrer">Контакт (тг)</a>
                        <a href='https://t.me/lazy_plant' target="_blank" rel="noopener noreferrer">TG-Channel - "Ленивое растение"</a>
                        <a href='https://www.atriumolymp.com/' target="_blank" rel="noopener noreferrer">Курсы Атриума</a>
                    </div>
                </div>
                <div className={styles.person_2}>
                    <img src={Nikolay}></img>
                    <div className={styles.person_text}>
                        <h2>Николай Мещеряков</h2>
                        <p className={styles.person_subject}>Химия</p>
                        <p>Руководитель Атриум | Химия, руководитель олимпиадной подготовки в СУНЦ МГУ, преподаватель шЦПМ. Победитель ВсОШ</p>
                        <a href='https://vk.com/moonnick' target="_blank" rel="noopener noreferrer">Контакт (ВК)</a>
                        <a href='https://t.me/moon_nick' target="_blank" rel="noopener noreferrer">Контакт (тг)</a>
                        <a href='https://t.me/mnv_msu' target="_blank" rel="noopener noreferrer">TG-Channel - "НВ пишет"</a>
                        <a href='https://www.atriumolymp.com/' target="_blank" rel="noopener noreferrer">Курсы Атриума</a>
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
