import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BsGear} from 'react-icons/bs'
import Styles from './Navbar.module.css';

export default function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className={Styles.navbar}>
        <div className={Styles.container}>
            <h1 style={{ marginLeft:'1rem', color: '#FFFFFF'}}>Logo</h1>
            <ul className={click ? 'nav active' : 'nav'} style={{display:'flex'}}>
                <li className={Styles.nav}>
                    <a style={{color: '#f4eeff'}}href="/">Sobre</a>
                </li>
                <li className={Styles.nav}>
                    <a style={{color: '#f4eeff'}}href="/">Desenvolvedores</a>
                </li>
            </ul>
            <div onClick={handleClick} className={Styles.hamburguer}>
                {click ? (<AiOutlineClose className={Styles.icon} />) : (<AiOutlineMenu className={Styles.icon} />)}
            </div>
            <div className={Styles.settings}>
                <BsGear className={Styles.icon}/>
            </div>
        </div>
    </div>
  )
}