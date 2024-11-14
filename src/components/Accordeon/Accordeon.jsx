import Accordion from 'react-bootstrap/Accordion';

export function AccordeonComponent() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Как выбрать ковер, который подходит для моей комнаты?
                </Accordion.Header>

                <Accordion.Body className='acc-body'>
                    При выборе ковра для вашей комнаты учитывайте размер, стиль и цвет. Измерьте пространство, чтобы ковер не был слишком маленьким или большим. Обратите внимание на интерьер — выбирайте ковер, который гармонично дополнит вашу мебель и общую цветовую гамму.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Как ухаживать за ковром, чтобы он служил долго?
                </Accordion.Header>

                <Accordion.Body className='acc-body'>
                    Уход за ковром включает регулярную чистку пылесосом и удаление пятен сразу после их появления. Для глубокой чистки можно использовать специальные средства для чистки ковров или нанимать профессиональные услуги. Избегайте прямых солнечных лучей, чтобы предотвратить выгорание цвета.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    Доставка и возврат: какие условия у вас?
                </Accordion.Header>

                <Accordion.Body className='acc-body'>
                    Мы осуществляем доставку по всей стране. Обычно доставка занимает от 3 до 7 дней. Если ковер вам не подошел, вы можете вернуть его в течение 14 дней после покупки. Убедитесь, что он в оригинальном состоянии и упаковке.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    Могу ли я заказать ковер по индивидуальным размерам?
                </Accordion.Header>

                <Accordion.Body className='acc-body'>
                    Да, мы предлагаем возможность изготовления ковров по индивидуальным размерам. Пожалуйста, свяжитесь с нашей службой поддержки, чтобы обсудить ваши требования и получить консультацию по оформлению заказа.
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
    );
}
