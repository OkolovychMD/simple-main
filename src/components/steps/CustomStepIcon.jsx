import React from 'react';

import { colors } from '@/constanst/colors';
import {Box} from "@mui/material";

const CustomStepIcon = ({active, icon}) => {
	const ownerState = {active};

	return (
		<Box
			sx={{
				transition: '.3s',
				border: `1px dashed ${colors.mainGreen}`,
				padding: '15px',
				borderRadius: '50%',
				opacity: ownerState.active ? 1 : .3,
				color: colors.black,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					transition: '.3s',
					backgroundColor: colors.mainGreen,
					width: '24px',
					height: '24px',
					borderRadius: '50%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					boxShadow: `0 0 10px 0px ${colors.mainGreen}`,
				}}
			>
				{icon}
			</Box>
		</Box>
	);
};

export default CustomStepIcon;
