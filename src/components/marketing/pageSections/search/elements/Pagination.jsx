import React from "react";


class Pagination extends React.Component {

	constructor() {
		super();
		this.state = {
			cards: ['Card1','Card2','Card3','Card4','Card5','Card6','Card7','Card8','Card9','Card10','Card11','Card12','Card13','Card14','Card15','Card16','Card17','Card18','Card19','Card20','Card21','Card22','Card23','Card24','Card25','Card26'],
			currentPage: 1,
			cardsPerPage: 6
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	render() {
		const { cards, currentPage, cardsPerPage } = this.state;

		// Logic for displaying current cards
		const indexOfLastCard = currentPage * cardsPerPage;
		const indexOfFirstCard = indexOfLastCard - cardsPerPage;
		const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

		const renderCards = currentCards.map((card, index) => {
			return <li key={index}>{card}</li>;
		});

		// Logic for displaying page numbers
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li
					key={number}
					id={number}
					onClick={this.handleClick}
				>
					{number}
				</li>
			);
		});

		return (
			<div className="flex justify-end">
				{/*<div>
					<ul>
						{renderCards}
					</ul>
					<ul id="page-numbers">
						{renderPageNumbers}
					</ul>
				</div>*/}
			</div>
		);
	}
}


export default Pagination;