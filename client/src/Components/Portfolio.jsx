import s from './style.module.scss'
import './reset.css'

import Image from './img/image.png'

const Portfolio = () => {
    return (
        <div className={`${s.body}`}>
            <div className={`${s.container}`}>
                <div className={`${s.glassContainer}`}>
                    <nav className={`${s.navbar}`}>
                        <ul className={`${s.navList}`}>
                            <div className={`${s.logo}`}>
                                <p>CatProg</p>
                            </div>
                            <li className={`${s.navList_element}`}>Home</li>
                            <li className={`${s.navList_element}`}>Youtube</li>
                            <li className={`${s.navList_element}`}>About</li>
                        </ul>
                    </nav>
                    <div className={`${s.content}`}>
                    <div className={`${s.main}`}>
                        <h2>Hey 👋, it's <br/> CatProg</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Soluta ducimus dicta nisi quisquam rerum</p>
                        <button>Get Started</button>
                    </div>
                    <div className={`${s.imgWrapper}`}>
                        <img src={Image} alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio