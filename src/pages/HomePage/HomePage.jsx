import { AccordeonComponent } from "../../components/Accordeon/Accordeon";


export function HomePage() {
    return (
        <>
            <div className="banner">
                <h2>Ковры на любой ваш вкус</h2>
            </div>

            <div className="faq">
                <h2>Часто задаваемые вопросы</h2>

                <div className="accordeon">
                    <AccordeonComponent/>
                </div>
            </div>
        </>
    )
}