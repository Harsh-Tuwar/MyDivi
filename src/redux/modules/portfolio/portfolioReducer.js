import { SET_PORTFOLIOS, SELECT_PORTFOLIO } from "./portfolioTypes";

const initialState = {
	portfolios: [],
	currentPortfolio: null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_PORTFOLIOS:
			return {
				...state,
				portfolios: payload
			};
		
		case SELECT_PORTFOLIO:
			return {
				...state,
				currentPortfolio: payload
			};
		
		default:
			return { ...state };
	}
};

