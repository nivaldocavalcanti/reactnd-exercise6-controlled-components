import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                    {items.length === 0 && (
                        <p>No Items added to your list.</p>
                    )}
                </ol>                
            </div>
        )
    }
}

export default ListItems;