import React from 'react';
import Styles from "./FormBlock.module.scss";
import Checkbox from "../ui/Checkbox/Checkbox";

const FormBlock = ({formBlockRef}) => {
    return (
        <div className={Styles.FormBlock}>
            <div className={Styles.img}/>
            <div className={Styles.info}>
                <div className={Styles.info__text}>
                    <div className={Styles.text__title}>
                        Актуальный и долговечный
                    </div>
                    <div className={Styles.text__subtitle} ref={formBlockRef}>
                        Ноутбук Vega Alpha не надо обновлять каждый год — устройство поставляется готовым к решению любых рабочих задач, а его мощности хватит
                        с запасом на несколько лет вперёд
                    </div>
                </div>
                {/*<div className={Styles.info__form}>*/}
                    <form className={Styles.info__form}>
                        <div className={Styles.form__title}>Оставьте заявку и убедитесь лично:</div>
                        <input className={Styles.form__input} placeholder={"ФИО*"} type={"text"} />
                        <input className={Styles.form__input} placeholder={"Телефон*"} type={"text"} />
                        <input className={Styles.form__input} placeholder={"Email*"} type={"text"} />
                        <div className={Styles.form__checkbox}>
                            <div className={Styles.checkbox__checkbox}>
                                <Checkbox/>
                            </div>
                            <div className={Styles.checkbox__text}>
                                Выражаю согласие с <a href="#">Политикой обработки персональных данных</a> и <a href="#">Условиями пользования сайтом</a>
                            </div>
                        </div>
                        <button className={Styles.form__button}>
                            Оставить заявку
                        </button>
                    </form>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default FormBlock;