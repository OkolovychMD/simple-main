import React from 'react';
import {Box, Button} from "@mui/material";

const GeneratedContentButtons = ({
	                                 primaryButtonHandler,
	                                 primaryButtonText,
	                                 secondaryButtonHandler,
	                                 secondaryButtonText,
	                                 loading,
	                                 edit,
	                                 primaryButtonDisabled,
	                                 primaryButtonHide,
                                 }) => {
	return (
		<Box
			sx={{
				marginTop: '3rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem'
			}}
		>
			{!primaryButtonHide && <Button
				disabled={loading || edit || primaryButtonDisabled}
				onClick={primaryButtonHandler}
				variant='contained'
				color='primary'
				fullWidth
			>
				{primaryButtonText || 'Next'}
			</Button>}
			<Button
				disabled={loading || edit}
				onClick={secondaryButtonHandler}
				variant='outlined'
				color='primary'
				fullWidth
			>
				{secondaryButtonText || 'Return'}
			</Button>
		</Box>
	);
};

export default GeneratedContentButtons;
