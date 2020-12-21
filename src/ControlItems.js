import React, {Component} from 'react';
import ListItems from './ListItems';

class ControlItems extends Component {
    state = {
        value: '',
        items: [],
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    addItem = event => {
        event.preventDefault();
        this.setState(oldState => ({
            items: [...oldState.items, this.state.value],
        }));
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    noItemsFound = () => {
        return this.state.items.length === 0;
    };

    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
        
                <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
                    Delete Last Item
                </button>
                <ListItems items={this.state.items} />
            </div>
        )
    }
}

export default ControlItems;