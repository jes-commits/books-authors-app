import React, { Component } from 'react'
import './App.css';
import BookItem from './components/BookItem';

class BooksApp extends Component {
	constructor(props) {
		super(props);

		this.state={
			book:'shooting stars',
			author:'saga of the sieras',
			books: []
		}
		this.handleBookChange = this.handleBookChange.bind(this);
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleBookChange(e){
		this.setState({book: e.target.value});
	}

	handleAuthorChange(e){
		this.setState({author: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		let newBook={book: this.state.book, author: this.state.author}
		this.setState({books: [...this.state.books, newBook]});
	}

	

  	render() {
    	return (
      		<div className='booksApp'>

				{/*form starts from here */}
				<div>
					<form className='booksForm' onSubmit={this.handleSubmit}>
						<input type='text' placeholder='Book' value={this.state.book} onChange={this.handleBookChange} />
						<br/><br/>
						<input type='text' placeholder='Author' value={this.state.author} onChange={this.handleAuthorChange} />
						<br/><br/>
						<input type='submit' value='submit' />
					</form>


				</div>

				{/*book list starts from here */}
				<div className='booksList'>
					{
						this.state.books.map((books,index) => <BookItem key={index} book={books.book} author={books.author} />)
					}
				</div>
			
      		</div>
    	)
  	}
}




export default BooksApp;
