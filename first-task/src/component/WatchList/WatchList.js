import React, {Component} from 'react';
import './WatchList.css'

class WatchList extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.name !== this.props.name
    }
    render() {
        return (
            <div className='list'>
                <input
                    type="text"
                    className='list-field'
                    value={this.props.name}
                    onChange={this.props.onChange}/>
                <button className='list-btn' onClick={this.props.remove}>x</button>
            </div>
        );
    }
}

export default WatchList;