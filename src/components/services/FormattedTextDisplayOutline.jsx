import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@mui/material";
import NextLink from 'next/link';

import { colors } from "@/constanst/colors";

const FormattedTextDisplay = ({ children, custom, ref }) => {
  return (
    <Box
      sx={{
        "& p": { marginBottom: "8px" },
        "& h2": { marginTop: "12px", marginBottom: "8px" },
        "& h3": { marginTop: "12px", marginBottom: "8px" },
        "& hr": {
          margin: "12px 0",
          border: "none",
          borderTop: `1px solid ${colors.silver}`,
        },
        height: "100%",
        position: "relative",
        whiteSpace: 'normal',
        wordBreak: 'break-word'
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <Typography
              variant="h1"
              {...props}
              sx={{
                fontSize: '2.2rem',
                fontWeight: '700',
                lineHeight: 1.2,
                margin: '1.8rem 0 0.8rem',
                color: colors.white,
                fontFamily: "Inter",
                letterSpacing: 0
              }}
            />
          ),
          h2: ({ node, ...props }) => (
            <Typography
              variant="h2"
              {...props}
              sx={{
                fontSize: '1.5rem',
                fontWeight: '600',
                lineHeight: 1.2,
                margin: '1.8rem 0 0.8rem',
                color: colors.white,
                fontFamily: "Inter",
                letterSpacing: 0
              }}
            />
          ),
          h3: ({ node, ...props }) => (
            <Typography
              variant="h3"
              {...props}
              sx={{
                fontSize: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.2',
                margin: '1.8rem 0 0.8rem!important',
                color: colors.white,
                fontFamily: "Inter",
              }}
            />
          ),
          h4: ({ node, ...props }) => (
            <Typography
              variant="h4"
              {...props}
              sx={{
                fontSize: '1rem',
                fontWeight: '600',
                lineHeight: '1.2',
                margin: '1.8rem 0 0.8rem!important',
                color: colors.white,
                fontFamily: "Inter",
              }}
            />
          ),
          h5: ({ node, ...props }) => (
            <Typography
              variant="h5"
              {...props}
              sx={{
                fontSize: '0.875rem',
                fontWeight: '600',
                lineHeight: '1.2',
                margin: '1.8rem 0 0.8rem!important',
                color: colors.white,
                fontFamily: "Inter",
              }}
            />
          ),
          h6: ({ node, ...props }) => (
            <Typography
              variant="h6"
              {...props}
              sx={{
                fontSize: '0.875rem',
                fontWeight: '500',
                lineHeight: '1.2',
                margin: '1.8rem 0 0.8rem!important',
                color: colors.white,
                fontFamily: "Inter",
              }}
            />
          ),
          a: ({ node, href, children, ...props }) => {
            // Проверяем, является ли ссылка внешней
            const isExternal = href?.startsWith('http') || href?.startsWith('https');

            if (isExternal) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'underline' }}
                  {...props}
                >
                  {children}
                </a>
              );
            }

            return (
              <NextLink
                href={href || ''}
                style={{ color: 'inherit', textDecoration: 'underline' }}
                {...props}
              >
                {children}
              </NextLink>
            );
          },
          p: ({ node, ...props }) => (
            <Typography
              variant="body1"
              {...props}
              sx={{
                color: custom ? custom : colors.white,
                margin: '0.8rem 0!important',
                whiteSpace: 'pre-wrap',
                '& p': { display: 'inline', margin: 0 }  // Это исправление для вложенных параграфов
              }}
            />
          ),
          li: ({ node, ...props }) => (
            <Typography
              variant="body1"
              component="li"
              {...props}
              sx={{
                color: custom ? custom : colors.white,
                margin: 0,
                '& p': { display: 'inline', margin: 0 }  // Это исправление для параграфов в списках
              }}
            />
          ),
          ol: ({ node, ...props }) => (
            <Box
              component="ol"
              sx={{
                color: colors.white,
                display: 'block',
                listStyleType: 'decimal',
                margin: '1rem 0',
                marginInlineStart: 0,
                marginInlineEnd: 0,
                paddingInlineStart: '40px'
              }}
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <Box
              component="ul"
              sx={{
                color: colors.white,
                display: 'block',
                listStyleType: 'disc',
                margin: '1rem 0',
                marginInlineStart: 0,
                marginInlineEnd: 0,
                paddingInlineStart: '40px',
                '& ul': {  // стили для вложенного списка
                  listStyleType: 'circle',
                  '& ul': {  // стили для списка третьего уровня
                    listStyleType: 'square'
                  }
                }
              }}
              {...props}
            />
          ),
          strong: ({ node, ...props }) => (
            <Box
              component="strong"
              sx={{
                color: colors.white,
                padding: 0,
                margin: 0,
                fontWeight: "700",
              }}
              {...props}
            />
          ),
          em: ({ node, ...props }) => (
            <Box
              component="em"
              sx={{
                color: colors.white,
                fontWeight: "600"
              }}
              {...props}
            />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default FormattedTextDisplay;
