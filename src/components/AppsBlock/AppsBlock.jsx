import React from 'react';
import Styles from './AppsBlock.module.scss';

const AppsBlock = ({formBlockRef}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToFormBlock = () => {
        formBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className={Styles.Apps}>
            <div className={Styles.Apps__info}>
                <div className={Styles.Apps__texts}>
                    <div className={Styles.texts_title}>
                        Широкий перечень <br/>
                        поддерживаемого ПО*
                    </div>
                    <div className={Styles.texts_subtitle}>
                        Поддерживаем приложения Windows в нашей ОС
                    </div>
                </div>
                <div className={Styles.Apps__GoForm}>
                    <div className={Styles.Apps__button} onClick={scrollToFormBlock}>
                        Оставить заявку
                    </div>
                    <div className={Styles.Apps__buttonInfo}>
                        *Не предустановлены на ноутбуке Vega Alpha.<br/>
                        Установить данные приложения пользователь может самостоятельно
                    </div>
                </div>
            </div>
            <div className={Styles.Apps__img}>

            </div>
        </div>
    );
};

export default AppsBlock;