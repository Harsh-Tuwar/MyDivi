import { NEW_PORTFOLIO, SET_PORTFOLIOS } from "./portfolioTypes";

export const newPortfolio = () => dispatch => {
	
};

export const setPortfolios = (portfolios) => dispatch => {
	if (portfolios.length) {
		dispatch({ type: SET_PORTFOLIOS, payload: portfolios });
	}
};