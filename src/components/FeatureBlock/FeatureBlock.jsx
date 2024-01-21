import React from 'react';
import Styles from "./FeatureBlock.module.scss";
import FeatureGuard from '../../assets/img/FeatureGuard.svg'
import FeatureCalc from '../../assets/img/FeatureCalc.svg'
import FeatureMove from '../../assets/img/FeatureMove.svg'

const item = [
    {
        title: "Контроль расходов",
        text: "Низкая стоимость владения и быстрое развёртывание безопасных рабочих мест"
    },
    {
        title: "Встроенные средства защиты",
        text: "Экономия на информационной безопасности в компании"
    },
    {
        title: "Удобный переход",
        text: "Комфортная миграция и быстрый старт работы с привычными программами"
    },
]
const backgroundImage = [FeatureCalc, FeatureGuard,FeatureMove]
const FeatureBlock = () => {
    return (
        <div className={Styles.FeatureBlock}>
            <div className={Styles.title}>Легко встраиваемся <br/>
                в инфраструктуру компаний
            </div>

            <div className={Styles.Features}>
                {item.map( (el,index) => {
                    return <div className={Styles.Features__item} key={index}>
                        <div className={Styles.icon}
                             style={{
                                 backgroundImage: `url(${backgroundImage[index]})`,
                        }}
                        />
                        <div className={Styles.title}>
                            {el.title}
                        </div>
                        <div className={Styles.text}>
                            {el.text}
                        </div>
                    </div>
                })}
            </div>

        </div>
    );
};

export default FeatureBlock;