import {
	NEW_PORTFOLIO
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
		
		default:
			return { ...state };
	}
};

