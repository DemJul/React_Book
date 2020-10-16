import React from 'react';
import {Categories, SortMenu, Book} from '../components';

class Home extends React.Component{


    render(){
        const books =this.props.bookArr[0];
        return (
            <div className="container">
                <div className="content__top">
                    <Categories 
                    // onClick={(name) => console.log(name)}
                    items={[
                        'Детектив',
                        'Фантастика',
                        'Ужасы',
                        'Классическая литература',
                    ]}/>
                    <SortMenu items={[
                        {name: 'популярности', type: 'popular'},
                        {name: 'цену', type: 'price'},
                        {name: 'алфавиту', type: 'alphabet'},
                    ]}/>
                    
                </div>
                <h2 className="content__title">Все книги</h2>
                <div className="content__items">
                    {
                        books.map((obj) => <Book key={obj.id} {...obj} />)
                    }
                    
                </div> 
            </div>
        )
    }
}

export default Home;