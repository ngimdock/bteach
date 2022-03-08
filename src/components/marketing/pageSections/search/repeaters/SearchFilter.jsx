import React from "react";

import Button from "../../../../elements/buttons/Button";


const SearchFilter = () => {

	return(

		<div className="SearchFilterBox lg:py-3 lg:px-5">
			
			<div className="flex justify-between">
				<div></div>
				<div></div>
			</div>

			<div className="flex justify-center">
				<Button  size="medium" theme="primary" classe="mt-1">Inscription</Button>
			</div>

		</div>

	);
}

export default SearchFilter;