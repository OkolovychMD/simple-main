import React from 'react';
import ReactMarkdown from 'react-markdown';

import { colors } from '@/constanst/colors';
import {Box, Typography} from '@mui/material';

const FormattedTextDisplay = ({children, custom, small}) => {
	return (
			<ReactMarkdown
				components={{
					h1: ({node, ...props}) => <Typography
						variant='h3' {...props}
						sx={{marginTop: '10px', color: colors.orange, fontSize: '2rem'}}
					/>,
					h2: ({node, ...props}) => <Typography
						variant='h3' {...props}
						sx={{marginTop: '10px', color: colors.orange, fontSize: '1.6rem'}}
					/>,
					h3: ({node, ...props}) => <Typography
						variant='h4' {...props}
						sx={{margin: 0, color: `${colors.orange}`}}
					/>,
					p: ({node, ...props}) => <Typography
						variant='body1' {...props}
						sx={{color: custom ? custom : colors.white, margin: 0, display: 'inline'}}
					/>,
					li: ({node, ...props}) => <Typography
						variant='body1' {...props}
						sx={{color: custom ? custom : colors.white, margin: 0, fontSize: small ? '.7rem' : '1rem'}}
					/>,
					strong: ({node, ...props}) => <strong style={{color: colors.orange, padding: 0, margin: 0}} {...props} />,
					em: ({node, ...props}) => <em style={{color: colors.orange}} {...props} />
				}}
			>
				{children}
			</ReactMarkdown>

	);
};

export default FormattedTextDisplay;
