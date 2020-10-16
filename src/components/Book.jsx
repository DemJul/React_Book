import React from 'react'
import classNames from 'classnames'

function Book({name, author, imageUrl, types, price, category, rating})  {
    const typesFormat = ['Бумажная', 'Электронная']
    const [activeType, setActiveType] = React.useState(types[0])

    const onSelectedType = (index) => {
        setActiveType(index);
    }
    
    return (
        <div className="book-block">
            <img
                className="book-block__image"
                src="https://img-gorod.ru/27/729/2772940_detail.jpg"
                alt="book"
            />
            <h4 className="book-block__title">{name}</h4>
            <h3 className="book-block__title">{author}</h3>
            <div className="book-block__selector">
                <ul>
                    {typesFormat.map((type, index) => (
                    <li key={type}
                    onClick={()=> onSelectedType(index)} 
                    className={classNames({
                        active: activeType === index,
                        disabled: !types.includes(index),
                    })}>{type}</li>
                    ))}
                </ul>
        </div>
        <div className="book-block__bottom">
            <div className="book-block__price">от {price}</div>
                <div className="button button--outline button--add">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                    />
                </svg>
                <span>Добавить</span>
                <i>1</i>
                </div>
            </div>
        </div> 
    )
    
}

export default Book

