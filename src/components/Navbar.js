import React, { useState } from 'react'
import logo from "../images/logo.png";
import styles from "../css/navbar.module.css";
import { FaAlignRight } from "react-icons/fa";
import links from "../constants/links";
import socialIcons from "../constants/social-icons";
import { Link } from "gatsby"

const Navbar = () => {
    const [isOpen, setNav] = useState(false);
    //state = { isOpen: false}
    //this.setState({ isOpen : !isOpen})
    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} className={styles.brandLogo} alt="Brand logo"/>
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        <FaAlignRight className={styles.logoIcon} />
                    </button>
                </div>
                <ul className={isOpen ? `${styles.navLinks} ${styles.showNav} `: `${styles.navLinks}`}>
                    {links.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path}>
                                    {item.text}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((item, index) => {
                        return (
                            <a key={index} href={item.url} target="_blank" rel="noreferrer">{item.icon}</a>
                        )
                    })

                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
