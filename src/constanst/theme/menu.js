import { colors } from "../colors";

export const menu = {
	styleOverrides: {
		paper: {
			backgroundColor: colors.backgroundMain,
			borderRadius: '8px',
			border: `1px solid ${colors.dark21}`,
			padding: '0 5px'
		},
	},
};

export const menuItem = {
	styleOverrides: {
		root: {
			'&:before': { borderBottom: 'none' },
			'&:after': { borderBottom: 'none' },
			'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
			padding: '8px 20px',
			borderRadius: '6px',
			color: colors.orange,
			borderBottom: `1px solid ${colors.dark24}`,
			'&:hover': {
				backgroundColor: colors.dark24,
				'&:before': { borderBottom: 'none' },
				'&:after': { borderBottom: 'none' },
				'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
			},
			'&.Mui-selected': {
				backgroundColor: colors.dark24,
				'&:before': { borderBottom: 'none' },
				'&:after': { borderBottom: 'none' },
				'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
				'&:hover': {
				},
			},
		},
	},
};
