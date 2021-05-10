import css from "./Block1.module.css";
import first from "./imges/first.png";
import art from "./imges/Art.png";
import second from "./imges/second.png";
import blue from "./imges/blue.png";
import img11 from './imges/img11.png'
import img12 from './imges/img12.png'
import img13 from './imges/img13.png'
import img14 from './imges/img14.png'
import img15 from './imges/img15.png'
import img16 from './imges/img16.png'
import img17 from './imges/img17.png'
import img18 from './imges/img18.png'
import img19 from './imges/img19.png'
import img20 from './imges/img20.png'
import img21 from './imges/img21.png'
import img22 from './imges/img22.png'
import img41 from './imges/img41.png'
import img42 from './imges/img42.png'
import img43 from './imges/img43.png'
import img44 from './imges/img44.png'

const data = [
    {
        title:"PHOENIX",
        desript:"United Kingdom",
        img:first,
        ability1: img11,
        ability12:  img12,
        ability13:  img13,
        ability14:  img14,
    },
    {
        title:"JETT",
        desript:"South Korea",
        img:art,
        ability1: img15,
        ability12:  img16,
        ability13:  img17,
        ability14:  img18,
    },
    {
        title:"SOVA",
        desript:"Russia",
        img:second,
        ability1: img19,
        ability12:  img20,
        ability13:  img21,
        ability14:  img22,
    },
    {
        title:"SAGE",
        desript:"China",
        img:blue,
        ability1: img41,
        ability12:  img42,
        ability13:  img43,
        ability14:  img44,
        bg: true
    },
]

export const Block1 = () => {
    return <div className={css.block1}>
            <div className={css.back}>
                <div className={css.agent}> 
                <h1>AGENTS</h1>
                </div>
           
                    {
                        data.map((el,id) => {
                           return <div className={css.Card}>
                           <img src={el.img} alt=""/>
                           <div>
                               <p>{el.desript}</p>
                           <h1 id={el.bg ? css.h1 : ''}>{el.title}</h1>
                           </div>
                           
                           <div className={css.box} style={{backgroundColor:el.bg ? "white" :"#1F2326"}}>
                               <div>
                               <img className={css.img11} src={el.ability1} alt=""/>
                               </div>
                               <div>
                               <img className={css.img12} src={el.ability12} alt=""/>
                               </div>                
                               <div>
                               <img className={css.img13} src={el.ability13} alt=""/>
                               </div>
                               <div>
                               <img className={css.img14} src={el.ability14} alt=""/>
                               </div>
                           </div>
                       </div>
                        })
                    } 
                         </div>
    </div>
}

