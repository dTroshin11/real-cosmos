import React from 'react';
import Styles from './AppsBlock.module.scss';
import classNames from "classnames";

import bird from '../../assets/img/apps/apps_bird.svg'
import chrome from '../../assets/img/apps/apps_chrome.svg'
import cloud from '../../assets/img/apps/apps_cloud.svg'
import fox from '../../assets/img/apps/apps_fox.svg'
import obsidian from '../../assets/img/apps/apps_obsidian.svg'
import tg from '../../assets/img/apps/apps_tg.svg'
import vm from '../../assets/img/apps/apps_vm.svg'
import vpn from '../../assets/img/apps/apps_vpn.svg'
import * as url from "url";

const topSpin = [bird,chrome,cloud,fox,bird,chrome,cloud,fox,cloud,fox]
const botSpin = [obsidian,tg,vm,vpn,obsidian,tg,vm,vpn,vm,vpn]


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
                <div className={Styles.Apps__mob}>
                    <div className={Styles.items_wrap}>
                        <div className={classNames(Styles.items, Styles.marquee)}>
                            {topSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
                        <div aria-hidden="true" className={classNames(Styles.items, Styles.marquee)}>
                            {topSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
                    </div>
                    <div className={Styles.items_wrap}>
                        <div className={classNames(Styles.items, Styles.marquee, Styles.reverce)}>
                            {botSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
                        <div aria-hidden="true" className={classNames(Styles.items, Styles.marquee, Styles.reverce)}>
                            {botSpin.map((obj, index) => {
                                return    <div key={index} className={Styles.item} style={{backgroundImage: `url(${obj})`}}></div>
                            })}
                        </div>
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