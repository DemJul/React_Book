import React from 'react'

class Categories extends React.Component {
    
    state={
        activeItem: 3,
    }

    // Обновление состояния
    onSelectedItem = (index) => {
        this.setState({
            activeItem: index,
        });
    };

    render() {
        const {items, onClick} = this.props;
        return (
            <div className="categories">
                <ul>
                <li className={this.state.activeItem === null ? 'active' : ''} 
                    onClick={()=> this.onSelectedItem(null)}>Все</li>
                {/*Проверка на случай, пустого массива  */}
                {items && items.map((name, index) => (
                    <li className={this.state.activeItem === index ? 'active' : ''} 
                    onClick={()=> this.onSelectedItem(index)} key={name}>{name}</li>
                ))}
                
                </ul>
            </div>
        );
    };

}

export default Categories;
