import { colors } from "../colors";

export const loginInputStyles = {
	// backgroundColor: colors.background+'!important',
	// borderRadius: '0',
	// '&:before': { borderBottom: 'none' },
	// '&:after': { borderBottom: 'none' },
	// '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
	'& .MuiInputBase-input': {
		color: colors.white,
		backgroundColor: colors.background,
		paddingX: '.3rem',
		paddingY: '.8rem',
		borderRadius: '0',
		borderBottomWidth: 1,
		borderBottomColor: colors.white,
		'&:hover': {
			borderBottomWidth: 1,
			// borderBottom: 'none'
			borderBottomColor: colors.orange
			// borderBottomWidth: 0,
			// Стили для hover состояния input
		}
	},
	'& .MuiInput-underline:before': {
		// borderBottomWidth: 0,
		borderBottomColor: colors.darkGrey42,
		'&:hover': {
			borderBottomWidth: 1,
			// borderBottom: 'none'
			borderBottomColor: colors.mainGreen // или другой цвет для hover
		}
	},
	'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
		borderBottomWidth: 1,
		// borderBottom: 'none'
		borderBottomColor: colors.orange
		// borderBottomColor: colors.mainGreen, // или другой подходящий цвет
	},
	'& .MuiInput-underline:after': {
		borderBottomWidth: 1,
		// borderBottom: 'none'
		borderBottomColor: colors.orange
		// borderBottomWidth: 0,
		// borderBottomColor: colors.mainGreen
	},
	'& .MuiInputLabel-root': {
		// borderBottomWidth: 0,
		color: colors.white,
		fontSize: '1rem',
		fontWeight: 'bold',
		'&:hover': {
			// borderBottomWidth: 0,
			// Стили для hover состояния label
		}
	},
	'& .MuiInputLabel-root.Mui-focused': { color: colors.white },
	'& .MuiInputBase-input::placeholder': { color: colors.darkGrey42 },
	// Добавляем общий hover эффект для всего input
	'&:hover .MuiInputBase-root': {
		// borderBottomWidth: 0,
		// Общие стили для hover состояния всего input
	}
};


export const personsInputStyles = {
	'& .MuiOutlinedInput-root': {
		backgroundColor: colors.white, // Фон белый
		'& fieldset': {
			borderColor: colors.darkGrey42, // Цвет рамки по умолчанию
		},
		'&:hover fieldset': {
			borderColor: colors.orange50, // Оранжевая рамка при наведении
		},
		'&.Mui-focused fieldset': {
			borderColor: colors.orange50, // Оранжевая рамка при фокусе
		},
	},
	'& .MuiInputBase-input::placeholder': {
		color: 'black', // Тёмный плейсхолдер
	},
	// '&:before': { borderBottom: 'none' },
	// '&:after': { borderBottom: 'none' },
	// border: `1px solid ${colors.lightGray}`,
	// borderRadius: '10px',
	// // overflow: 'hidden',
	// '& .MuiInputBase-root': {
	// 	// backgroundColor: colors.background,
	// 	color: colors.black,
	// 	transition: 'background-color 0.3s',
	// 	'&.Mui-focused, &:not(.Mui-error):has(.MuiInputBase-input:not(:placeholder-shown))': {
	// 		backgroundColor: colors.white,
	// 		color: colors.black
	// 	},
	// },
	// '& .MuiInputBase-input': {
	// 	// backgroundColor: colors.background,
	// 	color: colors.black,
	// 	// borderBottomWidth: 0,
	// 	'&.Mui-focused, &:not(:placeholder-shown)': {
	// 		backgroundColor: colors.white,
	// 		color: colors.black,
	// 		border: `1px solid ${colors.orange}`,
	// 	},
	// },
	// '& .MuiInput-underline:before': {
	// 	// borderBottomWidth: 0,
	// 	// borderBottomColor: colors.mainGreen,
	// 	'&:hover': {
	// 		// borderBottomWidth: 0,
	// 		// borderBottomColor: colors.mainGreen
	// 	}
	// },
	// '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
	// 	// borderBottomWidth: 0,
	// 	// borderBottomColor: colors.mainGreen,
	// },
	// '& .MuiInput-underline:after': {
	// 	// borderBottomWidth: 0,
	// 	// borderBottomColor: colors.mainGreen
	// },
	// '& .MuiInputLabel-root': {
	// 	color: colors.black,
	// 	'&:hover': {
	// 		// Стили для hover состояния label
	// 	}
	// },
	// '& .MuiInputLabel-root.Mui-focused': {
	// 	color: colors.mainGreen,
	// },
	// '& .MuiInputBase-input::placeholder': {color: colors.white},
	// // Добавляем общий hover эффект для всего input
	// '&:hover .MuiInputBase-root': {
	// 	// Общие стили для hover состояния всего input
	// }
};
export const createInputStyles = {
	'& .MuiInputBase-input': {
		color: colors.white,
		'&:hover': {
			// Стили для hover состояния input
		}
	},
	'& .MuiInput-underline:before': {
		// borderBottomColor: colors.mainGreen,
		'&:hover': {
			// borderBottomColor: colors.mainGreen // или другой цвет для hover
		}
	},
	'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
		// borderBottomColor: colors.mainGreen, // или другой подходящий цвет
	},
	'& .MuiInput-underline:after': {
		// borderBottomColor: colors.mainGreen
	},
	'& .MuiInputLabel-root': {
		color: colors.white,
		'&:hover': {
			// Стили для hover состояния label
		}
	},
	'& .MuiInputLabel-root.Mui-focused': { color: colors.white },
	'& .MuiInputBase-input::placeholder': { color: colors.white },
	// Добавляем общий hover эффект для всего input
	'&:hover .MuiInputBase-root': {
		// Общие стили для hover состояния всего input
	}
};


export const inputOutlinedStyles = {
	styleOverrides: {
		root: {
			boxShadow: 'none',
			backgroundColor: colors.whiteGrey,
			padding: '16px',
			borderRadius: '8px',
			'&.Mui-focused': {
				// backgroundColor: 'white'
			},
			// '& .MuiOutlinedInput-root': {
			// 	'&.Mui-focused': {
			// 		backgroundColor: 'white'
			// 	}
			// },
			'& .MuiOutlinedInput-notchedOutline': {
				borderColor: colors.darkGrey42,
			},
			'&:hover .MuiOutlinedInput-notchedOutline': {
				borderColor: colors.orange50,
			},
			'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
				borderColor: colors.orange50,
				// backgroundColor: colors.whitePermanet,
			},
			'& .MuiInputBase-input::placeholder': {
				color: colors.darkGrayMain, // Принудительно применяем тёмный цвет
			},
		},
		input: {
			color: colors.blackPermanet,
			padding: 0,
			fontSize: '16px',
			'&::placeholder': {
				color: colors.darkGrayMain, // Принудительно применяем тёмный цвет
			},
		},
	},
};


export const inputStyles = {
	styleOverrides: {
		root: {
			boxShadow: 'none',
			backgroundColor: colors.background,
			'& .MuiInput-root': {
				color: colors.white, // Цвет текста
				'&::before': {
					borderBottom: `1px solid ${colors.grey}`, // Цвет линии снизу
				},
				'&:hover:not(.Mui-disabled)::before': {
					borderBottom: `1px solid ${colors.orange}`, // Цвет при наведении
				},
				'&::after': {
					background: "red",
					borderBottom: `1px solid ${colors.orange}`, // Цвет при фокусе
				},
			},
			'& .MuiInput-input::placeholder': {
				color: colors.grey, // Цвет плейсхолдера
				opacity: 1, // Непрозрачность плейсхолдера
			},
		},
	},
}

export const inputStyleActive = {
	"& .MuiOutlinedInput-root": {
		"&.Mui-focused": {
			backgroundColor: "#FFF",
		},
	},
}

export const selectOrange = {
	minWidth: "10rem",
	padding: '0px !important',
	minHeight: '40px !important',
	alignItems: 'center',
	color: `${colors.whitePermanet} !important`,
	backgroundColor: `${colors.orange} !important`,
	borderRadius: '8px !important',
	borderBottom: 'none',
	'& .MuiSelect-select': {
		padding: '9px 14px !important',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: `${colors.orange} !important`,
		color: `${colors.whitePermanet} !important`,
		borderRadius: '8px !important',
		minHeight: '40px !important',
		borderBottom: 'none',
	},
	'& .MuiSelect-icon': { color: colors.whitePermanet },
	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: `${colors.whitePermanet} !important`,
		borderRadius: '8px !important',
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: `${colors.whitePermanet} !important`,
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: `${colors.whitePermanet} !important`,
		borderBottom: 'none'
	},
	'&.Mui-focused .MuiSelect-select': {
		backgroundColor: `${colors.orange} !important`,
		color: `${colors.whitePermanet} !important`,
		borderBottom: 'none',
		'&::before': {
			borderBottom: 'none'
		}
	},
	'&.Mui-active .MuiSelect-select': {
		backgroundColor: `${colors.orange} !important`,
		color: `${colors.whitePermanet} !important`,
		borderBottom: 'none'
	},
	'&::before': {
		borderBottom: 'none'
	},
	'&::after': {
		borderBottom: 'none'
	},
	'&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
}

