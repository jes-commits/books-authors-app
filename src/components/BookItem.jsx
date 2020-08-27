import React, { Component } from 'react';

class BookItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.book}</h1>
                <h3>{this.props.author}</h3>
            </div>
        );
    }
}

export default BookItem;
