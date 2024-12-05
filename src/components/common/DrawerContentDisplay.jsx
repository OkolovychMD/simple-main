import React from 'react';

import {Box, Drawer, Typography} from "@mui/material";

import {colors} from '../../constanst/colors';
import FormattedTextDisplayOutline from "@/components/services/FormattedTextDisplayOutline";

const DrawerContentDisplay = ({selected, setSelected}) => {
	return (
		<Drawer
			anchor={'right'}
			open={!!selected}
			onClose={() => setSelected(null)}
			PaperProps={{
				sx: {
					backgroundColor: 'transparent',
					boxShadow: 'none',
				},
			}}
		>
			<Box
				sx={{
					width: '60rem',
					borderTop: `1px solid ${colors.orange}`,
					borderLeft: `1px solid ${colors.orange}`,
					borderBottom: `1px solid ${colors.orange}`,
					height: '100%',
					borderRadius: '1rem 0 0 1rem',
					backgroundColor: colors.background,
					padding: '2rem',
					overflow: 'hidden'
				}}
			>
				<Box
					sx={{
						overflow: 'auto', height: '100%',
						'&::-webkit-scrollbar': {
							width: '10px',
							borderRadius: '4px',
						},
						'&::-webkit-scrollbar-track': {
							borderRadius: '4px',
							backgroundColor: colors.orange20,
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: colors.orange,
							borderRadius: '4px',
							width: '20px'
						},
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingRight: '3rem'
						}}
					>
						<Typography
							variant={'h3'}
							sx={{color: colors.mainGreen, flexShrink: 3, flexGrow: 0}}
						>{selected?.title}</Typography>
						{!!selected?.image && <Box
							sx={{
								flexShrink: 0,
								// flexGrow: 2,
								width: '15rem',
								overflow: 'hidden',
								borderRadius: '2rem'
							}}
						>
							<Box
								component={'img'}
								alt={'img'}
								src={selected?.image[0]?.url}
								sx={{width: '100%', height: '100%', objectFit: 'cover',}}
							/>
						</Box>}
					</Box>
					<FormattedTextDisplayOutline>{selected?.content}</FormattedTextDisplayOutline>
				</Box>
			</Box>
		</Drawer>
	);
};

export default DrawerContentDisplay;
