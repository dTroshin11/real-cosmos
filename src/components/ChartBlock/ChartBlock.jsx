import React from 'react';
import Styles from "./ChartBlock.module.scss";

const ChartBlock = ({formBlockRef}) => {
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
        <div className={Styles.ChartBlock}>
            <div className={Styles.chart__info}>
                <div className={Styles.texts}>
                    <div className={Styles.info_title}>
                        Атак больше,<br/>
                        защита дороже
                    </div>
                    <div className={Styles.info_subtitle}>
                        На ИБ компании теперь тратят больше
                    </div>
                    <div className={Styles.info_text}>
                        Количество кибератак ежегодно растёт — в 2022 оно выросло на 20%, таргетированные атаки коснулись 35% компаний. К 2025 году они затронут уже каждую вторую компанию*
                    </div>
                </div>
                <div className={Styles.info_go}>
                    <div className={Styles.info_button} onClick={scrollToFormBlock}>Оставить заявку</div>
                    <div className={Styles.info_buttonText}>*на основе данных из открытых источников</div>
                </div>
            </div>
            <div className={Styles.Chart__img}></div>
            <div className={Styles.info_goMob}>
                <div className={Styles.info_button} onClick={scrollToFormBlock}>Оставить заявку</div>
                <div className={Styles.info_buttonText}>*на основе данных из открытых источников</div>
            </div>
        </div>
    );
};

export default ChartBlock;