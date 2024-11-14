
export function Search({handleChange}) {
    return(
        <input type="text" className="search" onChange={handleChange} placeholder='Поиск' />
    )
}