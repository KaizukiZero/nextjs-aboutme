import Image from 'next/image'
import profilePic from '../images/pg1.jpg'
import style from '../styles/Sidebar.module.css'

const sidebar = () => {
    return (
        <div id="sidemenu" className={style.sidemenu}>
            <div id="avatar" className={style.avatar}>
                <Image
                    src={profilePic}
                    width={250}
                    height={250}
                    alt="Profile image"
                />

                <div className={style.profilename}>
                    <div>Kaizuki Zero</div>
                    <div>Programmer Newbie</div>
                </div>
            </div>
            <div id="menu" className={style.menu}>
                <a className={style.Home} href="#Home">
                    Home
                </a>
                <a className={style.About} href="#Aboutme">
                    About me
                </a>
                <a className={style.Education} href="#Education">
                    Education
                </a>
                <a className={style.Portfolio} href="#Portfolio">
                    Portfolio
                </a>
                <a className={style.Contact} href="#Contact">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default sidebar
