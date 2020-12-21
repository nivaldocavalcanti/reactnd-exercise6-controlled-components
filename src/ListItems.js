import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class ListItems extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
    }
    
    render(){
        const { items } = this.props;
        return(
            <div>
                <p className="items">Items</p>
                <ol className="item-list">
                    {items.map((item, index) => <Item key={index} item={item} />)}
                    {items.length === 0 && (
                        <p>No Items added to your list.</p>
                    )}
                </ol>                
            </div>
        )
    }
}

export default ListItems;