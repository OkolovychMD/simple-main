import React from 'react';

import { colors } from '@/constanst/colors';
import {Typography} from "@mui/material";

const PageHeader = ({header, fullWidth, fontSize}) => {
	return (
		<Typography
			variant={'h3'}
			gutterBottom
			sx={{
				textAlign: 'left',
				mt: 2,
				// fontWeight: 'bold',
				color: colors.white,
				flexGrow: fullWidth ? 1 : 0,
				fontSize: fontSize ? fontSize : undefined
			}}
		>
			{header}
		</Typography>
	);
};

export default PageHeader;
