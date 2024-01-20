import React from 'react';
import Styles from "./LaptopBlock.module.scss";

const infoLeft = [
    {
        title: "Современный производительный ноутбук",
        subtitle: "CPU последнего поколения"
    },
    {
        title: "Аппаратный контроль",
        subtitle: "Над веб-камерой, микрофонами и адаптером беспроводной связи"
    },
    {
        title: "Автономный",
        subtitle: "Ёмкая батарея и быстрая зарядка на 140W"
    },
]
const infoRight = [
    {
        title: "Идеально подходит для профессиональных задач",
        subtitle: "16-дюймовый 4К-дисплей"
    },
    {
        title: "Корпус из высококачественного магниевого сплава",
        subtitle: "Устойчивый к царапинам и изгибанию"
    },
    {
        title: "Высокоскоростная беспроводная связь",
        subtitle: "Wi-Fi 6, Bluetooth 5.2 и 4G/5G"
    },
]

const LaptopBlock = () => {
    return (
        <div className={Styles.LaptopBlock}>
            <div className={Styles.title}>
                Производительный <br/>
                ноутбук
            </div>
            <div className={Styles.LaptopBlock__info}>
                <div className={Styles.info__left}>
                    {infoLeft.map((obj,index) => {
                        return <div className={Styles.item} key={index}>
                            <div className={Styles.item__title}>
                                {obj.title}
                            </div>
                            <div className={Styles.item__subtitle}>
                                {obj.subtitle}
                            </div>
                        </div>
                    })}
                </div>
                <div className={Styles.info__center}>

                </div>
                <div className={Styles.info__right}>
                    {infoRight.map((obj,index) => {
                        return <div className={Styles.item} key={index}>
                            <div className={Styles.item__title}>
                                {obj.title}
                            </div>
                            <div className={Styles.item__subtitle}>
                                {obj.subtitle}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default LaptopBlock;