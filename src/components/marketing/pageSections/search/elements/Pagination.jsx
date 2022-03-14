import React from "react";


class Pagination extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cards: ['Card1','Card2','Card3','Card4','Card5','Card6','Card7','Card8','Card9','Card10','Card11','Card12','Card13','Card14','Card15','Card16','Card17','Card18','Card19','Card20','Card21','Card22','Card23','Card24','Card25','Card26'],
			currentPage: 1,
			cardsPerPage: 6
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleMoveLeft = this.handleMoveLeft.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

	handleMoveLeft(event) {
	    this.setState({
			currentPage: this.state.currentPage - 1
		});
	}

	handleMoveRight(event) {
	    this.setState({
			currentPage: this.state.currentPage + 1
		});
	}

	render() {
		const { cards, currentPage, cardsPerPage } = this.state;

		//displaying current cards
		const indexOfLastCard = currentPage * cardsPerPage;
		const indexOfFirstCard = indexOfLastCard - cardsPerPage;
		const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

		const renderCards = currentCards.map((card, index) => {
			return <li key={index}>{card}</li>;
		});

		//displaying page numbers
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li
					key={number}
					id={number}
					className={`h-12 border-rose-600 w-12 ${currentPage === number && 'bg-rose-600 text-white rounded-full'}`}
					onClick={this.handleClick}
				>
					{number}
				</li>

			);
		});

		return (
			<div className="">
				<div>
					<ul>
						{renderCards}
					</ul>
					<div className="flex justify-end">
						<button onClick={this.handleMoveLeft} className="h-12 border-r-0 border-rose-600 px-4 hover:text-rose-600">
				            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
				            	<path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd">	
				            	</path>
				            </svg>
				        </button>
						<ul id="page-numbers">
							{renderPageNumbers}
						</ul>
						<button onClick={this.handleMoveRight} className="h-12 border-rose-600 px-4 hover:text-rose-600">
				            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
				            	<path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd">	
				            	</path>
				            </svg>
				        </button>
					</div>
				</div>
			</div>
		);
	}
}


export default Pagination;