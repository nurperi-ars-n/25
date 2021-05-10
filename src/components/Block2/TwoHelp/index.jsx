import css from './TwoHelp.module.css'


export const TwoHelp = ({el}) => {
    return <div className={css.Card}>
            <div className={css.text}>
                <h1>{el.h1}</h1>
                <h3>{el.h3}</h3>
                <span>{el.span}</span>
            </div>
            
            <div className={css.box}>
                <img className={css.img11} src={el.img} alt=""/>
            </div>
        </div>
}