import React from 'react';

import { colors } from '@/constanst/colors';
import {Box, Slide} from "@mui/material";

// import CosImages from '../articles/CosImages';

const CustomSlide = ({children, condition, direction}) => {
	return (
		<Slide
			direction={direction === 'none' ? undefined : direction || 'down'}
			in={condition}
			mountOnEnter
			unmountOnExit
			timeout={200}
			sx={{
				backgroundColor: colors.background,
				padding: '1rem 2rem',
				margin: '3rem auto 0',
				borderRadius: '1rem',
				width: '50rem',
				position: 'relative'
			}}
		>
			<Box sx={{
				flexGrow: 1
			}}>
				{children}
			</Box>
		</Slide>
	);
};

export default CustomSlide;
