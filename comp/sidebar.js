import Image from 'next/image'
import profilePic from '../images/pg1.jpg'
import style from '../styles/Sidebar.module.css'
const sidebar = () => {
    return (
        <div id="sidemenu" className={style.sidemenu}>
            <div id="avatar" className={style.avatar}>
                <Image
                    src={profilePic}
                    width={200}
                    height={200}
                    className={style.image}
                    alt="Profile image"
                />

                <div className={style.profilename}>
                    <div>Kaizuki Zero</div>
                    <div>Programmer Newbie</div>
                </div>
            </div>
            <div id="menu" className={style.menu}>
                <a className={style.Home} href="">
                    Home
                </a>
                <a className={style.About} href="">
                    About
                </a>
                <a className={style.Education} href="">
                    Education
                </a>
                <a className={style.Portfolio} href="">
                    Portfolio
                </a>
                <a className={style.Contact} href="">
                    Contact
                </a>
            </div>
        </div>
    )
}

export default sidebar
