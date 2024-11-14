import { useParams } from 'react-router-dom';
import s from './TovarPage.module.css'
import { tovars } from '../../components/data/data';
import { Link } from 'react-router-dom';

export function TovarPage() {
    const {id} = useParams();
    const tovar = tovars.find(tovar => tovar.id == id);
    return (
        <section>
            <div className={s.product}>
                <Link to="/catalog" className={s.btn_grey}>На главную</Link>

                <div className={s.content}>
                    <div className={s.img}>
                        <img src={tovar.image} alt="" />
                    </div>

                    <div className={s.info}>
                        <h2>{tovar.name}</h2>
                        <p>{tovar.text}</p>
                        <div className={s.block}>
                            <h3>{tovar.price} ₽</h3>
                            <button className={s.btn}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}