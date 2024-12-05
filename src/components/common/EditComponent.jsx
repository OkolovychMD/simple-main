import React from 'react';
import {colors} from "@/constanst/colors";
import Editor from "@/components/editor/Editor";
import {Box, Container, Typography} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const EditComponent = ({onTitleChane, onSave, loading, onReturn, content, title, pageHeader}) => {
	return (
		<Container
			sx={{
				position: 'relative',
				color: colors.white,
				padding: '1rem 0',
				bgcolor: colors.whitePermanet,
				marginTop: '2rem',
				borderRadius: '15px',
				minHeight: '75%'
			}}
		>
			<Box
				sx={{
					textAlign: 'center',
				}}
			><Typography
				sx={{
					color: colors.silver
				}}
				variant={'h6'}
			>{pageHeader} editor</Typography></Box>
			<header className='mt-20 mb-0'>
				<h1 className='mb-0'>
					<textarea
						onChange={onTitleChane}
						placeholder={'Enter title here'}
						value={title}
						className='outline-none px-8 block w-full resize-none overflow-hidden text-black'
					/>
				</h1>
			</header>
			<Editor
				content={content}
				onSave={onSave}
				disabled={loading}
			/>
			{!!onReturn && <Box
				sx={{
					position: 'absolute',
					top: 0,
					cursor: 'pointer',
				}}
				onClick={onReturn}
			>
				<KeyboardBackspaceIcon
					sx={{color: colors.orange}}
					fontSize={'large'}
				/>
				<Typography
					variant={'span'}
					sx={{
						color: colors.blackPermanet,
						fontFamily: 'Inter'
					}}
				> To {`${pageHeader}`}</Typography>
			</Box>}
		</Container>
	);
};

export default EditComponent;
