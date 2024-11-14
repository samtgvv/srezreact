import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { OrderModal } from '../OrderModal/OrderModal'


export function Item({ id, image, name, price, text, count }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function showModal() {
    setModalIsOpen(true);
  }
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="item-link">
          <p>{price} ₽</p>

          {
            count > 0 ?
              <Link to={`${id}`} className="card-btn">Подробнее</Link>
              :
              <button onClick={showModal} className="card-btn">Заказать</button>
          }
        </div>
      </Card.Footer>
      <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </Card>
  );
}

