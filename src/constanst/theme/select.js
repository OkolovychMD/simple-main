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

export const customSelect = {
	styleOverrides: {
		select: {
			borderBottomWidth: 1,
			backgroundColor: colors.whiteGrey,
			borderRadius: '.5rem',
			color: colors.blackPermanet,
			// padding: '.8rem .3rem',
			'&:focus': {
				borderBottomWidth: 0,
				backgroundColor: colors.whiteGrey,
			},
			'&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
				borderBottom: '0'
			},

			'&:before': { borderBottom: 'none' },
			'&:disabled': { borderBottom: 'none' },
			'&:after': { borderBottom: 'none' },
			'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
		},
		icon: {
			color: colors.orange,
		},
		root: {
			'&.Mui-disabled:before': {
				borderBottom: 'none !important'
			},
			'& .MuiOutlinedInput-notchedOutline': {
				border: 'none',

			},
			'&:hover .MuiOutlinedInput-notchedOutline': {
				// border: 'none',
			},
			// '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			// border: `1px solid ${colors.orange50},`
			// },
		},
	},
};

export const customSelectItem = {
	styleOverrides: {
		root: {
			backgroundColor: colors.whiteGrey,
			color: colors.blackPermanet,
			'&:hover': {
				backgroundColor: colors.whiteGrey,
				color: colors.orange
			},
			'&.Mui-selected': {
				backgroundColor: colors.silver,
				color: colors.orange,
				borderRadius:'4px',
				'&:hover': {
					backgroundColor: colors.silver,
				},
			},
		},
	}
};

export const customSelectMenu = {
	styleOverrides: {
		paper: {
			backgroundColor: colors.whiteGrey,
			borderRadius: '.5rem',
			border: 'none',
			boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
		},
	},
};
