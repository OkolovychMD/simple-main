import { colors } from "../colors";

const styleObj = {
	styleOverrides: {
		root: {
			alignItems: "center", // Вместо alignVertical
			borderRadius: '.4rem',
			padding: '.6rem 1rem',
			'&:hover': {
				backgroundColor: colors.orange, // Сохраняем белый фон при наведении
			},
			'&.Mui-selected': {
				backgroundColor: colors.mainGreen, // Цвет фона при выборе
				color: colors.white,
				// borderColor: colors.white,
				'&:hover': {
					backgroundColor: colors.orange, // Сохраняем белый фон при наведении на выбранный элемент
				},
			},
		},
	},
};

export default styleObj