import css from "./Head.module.css";
import riot from "./riot.png";
import logo from "./logo.png";
import linia from "./lini.png";
import akal from "./akali.png"

export const Header = () => {
    return <div className={css.head}>
        <ul className={css.header}>
        <img className={css.headIm} src={riot} alt="" />
        <img className={css.linia} src={linia} alt="" /> 
        <img className={css.headIm} src={logo} alt="" />
        <li>GAME</li>
        <li>CHAMPIONS</li>
        <li>NEWS ᐁ</li>
        <li>PATCH NOTES</li>
        <li>DISCOVER  ᐁ</li>
        <li>ESPORTS</li>
        <li>UNIVERSE</li>
        <li>SHOP</li>
        <li>SUPPORT</li> 
     <img className={css.akali} src={akal} alt="" />
     <li>UNEPICKID  ᐁ</li>
     </ul>
    
    </div>
}