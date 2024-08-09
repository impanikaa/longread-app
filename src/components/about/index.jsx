import styles from './style.module.css'
import { Link } from 'react-router-dom';
import People from '../../data/People circle.png'
import Cr_1 from '../../data/about/Cr_1.png'
import Cr_2 from '../../data/about/Cr_2.png'
import Arrow_1 from '../../data/about/Arrow_1.png'
import Arrow_2 from '../../data/about/Arrow_2.png'
import Hs_1 from '../../data/about/Hs_1.jpg'

function scrollToElement() {
    const element = document.getElementById('target-element');
    element.scrollIntoView({ behavior: 'smooth' });
  }

const About = () => {
    return (
    <div className={styles.container}>
        
        <div className={styles.container_main}>
            <div className={styles.main_text}>
                <div className={styles.outline}><h1>О проекте</h1></div>
                <h2 style={{ textAlign: 'right' }}>о том, как создавался проект "Заботать"</h2>
            </div>
            <img src={People}></img>
        </div>

        <div className={styles.container_creators}>
            <h3>Создатели проекта</h3>
            
            <div className={styles.cr_block}>
                <div className={styles.creators}>
                    <div className={styles.cr_1}>
                        <div className={styles.cr_1_text}>
                            <div className={styles.header}> 
                                <h1>Маша<br/>Яхричева</h1>
                                <h2>Автор проекта</h2>
                            </div>
                            <div className={styles.p_links}>
                                <p>Школа ЦПМ,<br/>профиль: экономика</p>
                                <div className={styles.links_block}>
                                    tg: <a href='https://t.me/ma_yakhricheva'>@ma_yakhricheva</a><br></br>
                                    tg channel: <a href='https://t.me/princess_cpp'>t.me/princess_cpp</a>
                                </div>
                            </div>
                        </div>
                        <img src={Cr_1}></img>
                    </div>
                    <div className={styles.cr_2}>
                        <img src={Cr_2}></img>
                        <div className={styles.cr_2_text}>
                            <div className={styles.header}>
                                <h1>Вероника Панченко</h1>
                                <h2>Веб-дизайнер, веб-разработчик</h2>
                            </div>
                            <p>tg: <a href='https://t.me/im_panikaa'>@im_panikaa</a><br></br>
                            tg channel: <a href='https://t.me/physpaniki'>t.me/physpaniki</a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.quote}>
                    <p>Я сама сталкивалась со многими из описанных в лонгриде проблем в разные этапы своего пути. 
                        И мне было бы гораздо легче с ними справиться, если бы была некая памятка с советами от психологов. 
                        Поскольку у меня ее не было, я и решила создать этот лонгрид для помощи другим олимпиадникам :)</p>
                    <p>© Маша</p>
                </div>
            </div>
        </div>

        <div className={styles.container_history}>
            <h3>История создания</h3>

            <div className={styles.hs_block}>

                <div className={styles.hs_1}>
                    <div className={styles.hs_text}>
                        <div className={styles.hs_header}>
                            <h1>13.07</h1>
                            <h2>Пришла идея</h2>
                        </div>
                        <p>Комментарий</p>
                    </div>
                    <img src={Hs_1}></img>
                </div>

                <img src={Arrow_1}></img>

                <div className={styles.hs_2}>
                    <div className={styles.hs_text}>
                        <div className={styles.hs_header}>
                            <h1>13.07</h1>
                            <h2>Пришла идея</h2>
                        </div>
                        <p>Комментарий</p>
                    </div>
                    <img src={Hs_1}></img>
                </div>

                <img src={Arrow_2}></img>

                <div className={styles.hs_1}>
                    <div className={styles.hs_text}>
                        <div className={styles.hs_header}>
                            <h1>13.07</h1>
                            <h2>Пришла идея</h2>
                        </div>
                        <p>Комментарий</p>
                    </div>
                    <img src={Hs_1}></img>
                </div>

            </div>
        </div>

    </div>
    );
}


export default About;