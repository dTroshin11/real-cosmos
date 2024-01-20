import Header from '../Header/Header';
import Styles from './HeroBlock.module.scss';


const feature = [
    {
        title:"Собственная операционная система",
        subtitle:" С необходимыми программами и поддержкой Windows-приложений"
    },
    {
        title:"Информационная безопасность",
        subtitle:"Полный контроль над системой и продвинутые функции кибербезопасности"
    },
    {
        title:"Аппаратный ключ безопасности",
        subtitle:"Ваши данные надёжно защищены и всегда под рукой"
    },
    {
        title:"Персональный ИИ-помощник",
        subtitle:"Возьмёт на себя рутинные задачи"
    },
    {
        title:"Регулярные обновления и оперативная поддержка",
        subtitle:"Ваша безопасность всегда в актуальном состоянии"
    },
    {
        title:"Производительный ноутбук",
        subtitle:"Мощности хватит для любых рабочих задач"
    },
]
const HeroBlock = ({formBlockRef}) => {
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
    <div className={Styles.Block}>
      <Header formBlockRef={formBlockRef} />
      <div className={Styles.Wrapper}>
              <div className={Styles.Hero}>
                  <div className={Styles.HeroInfo}>
                      <div className={Styles.HeroInfo__title}>
                          Премиальное защищённое <br/> рабочее место
                      </div>
                      <div className={Styles.HeroInfo__subtitle}>
                          Собственная операционная система и&nbsp;производительный ноутбук.<br/> Новый уровень безопасности и&nbsp;приватности
                      </div>
                      <div className={Styles.HeroInfo__button} onClick={scrollToFormBlock} >
                          Оставить заявку
                      </div>
                  </div>
                  <div className={Styles.HeroFeature}>
                      <div className={Styles.HeroFeature__image}/>
                      <div className={Styles.HeroFeature__features}>
                          {feature.map((el, idx) => {
                              return <div className={Styles.features__item} key={idx} >
                                  <div className={Styles.item__title}>{el.title}</div>
                                  <div className={Styles.item__subtitle}>{el.subtitle}</div>
                              </div>
                          })}
                      </div>
                  </div>
              </div>
      </div>
    </div>
  );
};

export default HeroBlock;
