// Стили для TableHead
import { colors } from "../colors";

export const tableHead = {
	styleOverrides: {
		root: {
			fontWeight: 'bold',
			color: colors.white,
		},
	}
};

// Стили для TableRow
export const tableRow = {
	styleOverrides: {

		root: {
			color: colors.white,
			'&:nth-of-type(odd)': {
			},
			'&:hover': {
			},
		}
	},
};

// Стили для TableCell≤
export const tableCell = {
	styleOverrides: {
		root: {
			borderBottom: `1px solid ${colors.darkGrey42}`,
			color: colors.white,
			fontSize: '1rem',
			fontWeight: '400'
		},
		head: {
			fontWeight: 'bold',
			fontSize: '1.5rem'
			// color: '#333',
		},
	}
};
