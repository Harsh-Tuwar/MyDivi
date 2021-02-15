import { SET_PORTFOLIOS, SELECT_PORTFOLIO } from "./portfolioTypes";

export const selectPortfolio = (p) => dispatch => {
	dispatch({ type: SELECT_PORTFOLIO, payload: p });
};

export const setPortfolios = (portfolios) => dispatch => {
	if (portfolios.length) {
		dispatch({ type: SET_PORTFOLIOS, payload: portfolios });
	}
};

