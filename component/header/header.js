import styles from "./header.module.css"
import logo from "../../public/logo.svg"
import menu from "../../public/menu.svg"
import Image from 'next/image'

export const Header = () => {
    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <div className={styles.header_top}>
                        <div className="bishop-row bishop-align-center">
                            <div className={styles.menu}>
                                <Image src={menu} alt="menu" />
                            </div>
                            <div className={styles.logo}>
                                <Image src={logo} alt="logo" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}