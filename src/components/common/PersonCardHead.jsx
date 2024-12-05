import React from 'react';

import { colors } from '@/constanst/colors';
import {Box, Typography} from "@mui/material";

const PersonCardHead = ({image, name, place, small, work, age}) => {
	return (
		<Box
			sx={{
				paddingTop: small? '2rem' : 0,
				borderBottom: `1px solid ${colors.lightGray}`,
				paddingBottom: '1rem',
				display: small ? 'flex' : 'block',
				position: 'sticky',
				top: 0,
				backgroundColor: small ? colors.background : 'none'
			}}
		>
			<Box
				sx={{
					border: `4px solid ${colors.orange}`,
					width: '88px',
					height: '88px',
					borderRadius: '50%',
					overflow: 'hidden',
					margin: '0 auto',
					order: '2'
				}}
			>
				<Box
					component={'img'}
					alt={'user image'}
					src={image}
					sx={{width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)',}}
				/>
			</Box>
			<Box>
				<Typography
					variant='h5'
					marginTop={1}
					fontWeight={'bold'}
					sx={{color: colors.white}}
				>
					{name}
				</Typography>
				{(!!age || !!work) && <Typography
					sx={{
						color: colors.white,
						marginBottom: '1rem',
						fontWeight: '700',
						fontSize: '1.1rem',
						marginTop: '1rem',
					}}
				>
					{"Age: " + age + ", " + work}
				</Typography>}
				<Typography
					variant={'body1'}
				>
					{place}
				</Typography>
			</Box>
		</Box>
	);
};

export default PersonCardHead;
