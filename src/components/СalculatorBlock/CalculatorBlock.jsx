import React, {useEffect, useState} from 'react';
import Styles from "./CalculatorBlock.module.scss";
import {number} from "yup";

const CalculatorBlock = () => {
    const [people, setPeople] = useState(0)
    const [proPeople, setProPeople] = useState(0)
    const [pay, setPay] = useState(0)
    const formula = 0
    const summa = Math.round((Number(people) * Number(proPeople) * Number(pay) )* Number(1.302) * Number(12) * Number(0.55) + Number(1620000));
    let isRTL = document.documentElement.dir === 'rtl'

    const handleInputChange = (e) => {
        let target = e.target
        if (e.target.type !== 'range') {
            target = document.getElementById('range')
        }
        const min = target.min
        const max = target.max
        const val = target.value
        let percentage = (val - min) * 100 / (max - min)
        if (isRTL) {
            percentage = (max - val)
        }

        target.style.backgroundSize = percentage + '% 100%'
    }

    useEffect(() => {
        const rangeInputs = document.querySelectorAll('input[type="range"]')
        const numberInput = document.querySelector('input[type="number"]')

        rangeInputs.forEach(input => {
            input?.addEventListener('input', handleInputChange)
        })

        numberInput?.addEventListener('input', handleInputChange)

        // Handle element change, check for dir attribute value change
        const callback = (mutationList, observer) => {
            mutationList.forEach(function (mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
                    isRTL = mutation.target.dir === 'rtl'
                }
            })
        }

        // Listen for body element change
        const observer = new MutationObserver(callback)
        observer.observe(document.documentElement, { attributes: true })

        return () => {
            rangeInputs.forEach(input => {
                input?.removeEventListener('input', handleInputChange)
            })
            numberInput?.removeEventListener('input', handleInputChange)
            observer.disconnect()
        }
    }, [])


    return (
        <div className={Styles.Calculator}>
            <div className={Styles.title}>
                Рассчитайте вашу <br/> экономию на ИБ
            </div>
            <div className={Styles.calculate}>
                <div className={Styles.calculate__item}>
                    <div className={Styles.item__title}>Сколько сотрудников <br/> у вас в компании?</div>
                    <input className={Styles.item__inputNum} type={"number"} value={people}  onChange={(e) => setPeople(e.target.value)} />
                    <input className={Styles.item__input} type={"range"} value={people}  onChange={(e) => setPeople(e.target.value)} step={10} min={10} max={100}/>
                </div>
                <div className={Styles.calculate__item}>
                    <div className={Styles.item__title}>Сколько <br/> ИБ-специалистов?</div>
                    <input className={Styles.item__inputNum} type={"number"} value={people}  onChange={(e) => setPeople(e.target.value)} max={100}/>
                    <input className={Styles.item__input} type={"range"} value={proPeople}  onChange={(e) => setProPeople(e.target.value)} step={10} min={10} max={100}/>
                </div>
                <div className={Styles.calculate__item}>
                    <div className={Styles.item__title}>Средняя зарплата <br/> для ИБ-специалистов в компании?</div>
                    <input className={Styles.item__inputNum} type={"number"} value={people}  onChange={(e) => setPeople(e.target.value)} max={100}/>
                    <input className={Styles.item__input} type={"range"} value={pay}  onChange={(e) => setPay(e.target.value)} step={10} min={10} max={100}/>
                </div>
            </div>
            <div className={Styles.result}>
                <div className={Styles.result__title}>С нами вы сэкономите за год</div>
                <div className={Styles.result__num}>{summa !== 0 ? summa : 0} ₽*</div>
                <div className={Styles.result__subtitle}>*на основе наших данных</div>
            </div>
        </div>
    );
};

export default CalculatorBlock;



