import {
	NEW_PORTFOLIO, SET_PORTFOLIOS
} from "./portfolioTypes";

const initialState = {
	portfolios: [],
	currentPortfolio: null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case NEW_PORTFOLIO:
			return {
				...state,
				portfolios: payload
			};
		
		case SET_PORTFOLIOS:
			return {
				...state,
				portfolios: payload
			};
		
		default:
			return { ...state };
	}
};

