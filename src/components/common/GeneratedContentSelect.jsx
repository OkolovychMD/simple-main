import React, {useEffect, useRef} from 'react';
import {Box, FormControl, FormControlLabel, Paper, Radio, RadioGroup, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {colors} from "@/constanst/colors";
import Markdown from "markdown-to-jsx";
import gsap from "gsap";

const GeneratedContentSelect = ({value, onChange, name, loading, data}) => {
	const cardsRef = useRef([]);

	useEffect(() => {
		if (!loading && data) {
			// Очищаем предыдущие ссылки
			cardsRef.current = [];

			// Создаем анимацию для каждой карточки
			const cards = document.querySelectorAll('.lead-card');
			cards.forEach((card, index) => {
				// Начальное состояние
				gsap.set(card, {
					height: 0,
					opacity: 0,
					y: 50
				});

				// Анимация появления
				gsap.to(card, {
					height: '100%',
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power2.out",
					delay: index * 0.5 // Задержка для каждой следующей карточки
				});
			});
		}
	}, [loading, data]);

	return (
		<FormControl>
			<RadioGroup
				name={name}
				value={value}
				onChange={onChange}
			>
				<Grid
					container
					spacing={3}
					sx={{width: '100%', color: colors.white}}
				>
					{!loading &&
						data.map((r, i) => {
							return (
								<Grid
									className='lead-card' // Добавляем класс для анимации
									ref={el => cardsRef.current[i] = el}
									size={12}
									key={i}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between'
										}}
									>
										<Typography variant={'h5'}>{`Variant #${i + 1}`}</Typography>
										<FormControlLabel
											value={r}
											control={<Radio
												sx={{
													fontSize: '.6rem',
													color: colors.orange,
													'&.Mui-checked': {
														color: colors.orange,
													},
												}}
											/>}
											label='Select current'
										/>
									</Box>
									<Paper
										elevation={3}
										sx={{
											overflow: 'hidden',
											padding: '1rem',
											fontFamily: 'Inter',
											fontSize: '.9rem',
											'& h1': {
												fontSize: '1.4rem',
												mt: 0
											},
											'& h2': {
												fontSize: '1.3rem',
												mt: 0
											},
											'& h3': {
												fontSize: '1.4rem',
												mt: 0
											},
											'& h4': {
												fontSize: '1.1rem',
												mt: 0
											},
											'& h5': {
												fontSize: '1rem',
												mt: 0
											}
										}}
									>
										<Markdown>{r}</Markdown>
									</Paper>
								</Grid>
							);
						})
					}
				</Grid>
			</RadioGroup>
		</FormControl>
	);
};

export default GeneratedContentSelect;
