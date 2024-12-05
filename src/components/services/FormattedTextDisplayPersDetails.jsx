import React from 'react';
import ReactMarkdown from 'react-markdown';

import { colors } from '@/constanst/colors';
import {Box, Typography} from '@mui/material';

const FormattedTextDisplay = ({children, custom, small}) => {
	return (
			<ReactMarkdown
				components={{
					h2: ({node, ...props}) => <Typography
						variant='h3' {...props}
						sx={{margin: 0, color: colors.orange}}
					/>,
					h3: ({node, ...props}) => <Typography
						variant='h4' {...props}
						sx={{margin: 0, color: colors.orange}}
					/>,
					p: ({node, ...props}) => <Typography
						variant='body1' {...props}
						sx={{color: custom ? custom : colors.black, margin: 0, display: 'inline'}}
					/>,
					li: ({node, ...props}) => <Typography
						variant='body1' {...props}
						sx={{color: custom ? custom : colors.black, margin: 0, fontSize: small ? '.7rem' : '1rem'}}
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
