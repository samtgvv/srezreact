import { Item } from "../../components/Item/Item";
import { Search } from "../../components/Search/Search";
import { tovars } from "../../components/data/data";
import { useState } from "react";


export function CatalogPage() {
    const [query, setQuery] = useState('')
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function sort(e) {
        setSorting(e.target.value);
    }
    function handleChange(e) {
        setQuery(e.target.value)
        console.log(query)
    }
    const filteredTovars = tovars.filter((tovar) => {
        return tovar.name.toLowerCase().includes(query.toLowerCase())
            &&
            (tovar.category == category || category == 0);
    });
    const sortTovars = (sorting, tovars) => {
        switch (sorting) {
            case 'price_asc':
                return [...tovars].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...tovars].sort((a, b) => b.price - a.price);
            default:
                return tovars;
        }
    };
    const sortedFilteredTovars = sortTovars(sorting, filteredTovars);
    return (
        <div className="catalog">
            <div className="content">
                <div className="title">
                    <h2>Каталог товаров</h2>
                    <div className="title-block">
                        <select className="sort" onChange={sort}>
                                <option value="price_asc">По возрастанию цены</option>
                                <option value="price_desc">По убыванию цены</option>
                        </select>
                        <Search handleChange={handleChange}/>
                    </div>
                </div>

                <div className="categories">
                    <p>Виды ковров:</p>
                    <div className="categories_btn">
                        <button onClick={() => setCategory(0)} className="btn">Все виды</button>
                        <button onClick={() => setCategory(1)} className="btn">Натуральные</button>
                        <button onClick={() => setCategory(2)} className="btn">Ручная работа</button>
                        <button onClick={() => setCategory(3)} className="btn">Дизайнерские</button>
                    </div>
                </div>

                <div className="catalog-items">
                    {
                        sortedFilteredTovars.length ?
                            sortedFilteredTovars.map((tovar) => {
                                return (
                                    <Item id={tovar.id} image={tovar.image} name={tovar.name} text={tovar.text} price={tovar.price} count={tovar.count}/>
                                )
                            })
                            :
                            <p className="error">Не найдено ничего по запросу "{query}"</p>

                    }
                </div>
            </div>
        </div>
    )
}