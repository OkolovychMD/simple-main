'use client'
import React, { useEffect, useState } from 'react';
import GeneratedContentOutput from "@/components/common/GeneratedContentOutput";

const StoryFinal = ({ steps, setSteps, loading, story, setStory, person, setLoading }) => {
	const previousStepHandler = () => {
		setStory('');
		setSteps(null);
		setTimeout(() => setSteps(steps - 1), 400);
	};
	const saveHandler = async () => {
		setLoading(true);
		const data = {
			title: person.Name,
			content: story,
			persona: [person?.id],
		};
		try {
			console.log({ data });
			setLoading(false);
			setSteps(3);
		} catch (e) {
			console.log('error: ', e);
			setLoading(false);
		}
	};
	const theme = localStorage.getItem("theme");
	const [textColor, setTextColor] = useState(theme === "dark" ? "white" : "black");
	useEffect(() => {
		setTextColor(theme === "dark" ? "white" : "black");
	}, [theme]);

	return (
		<GeneratedContentOutput
			loading={loading}
			title={'Final result'}
			value={story}
			setContentHandler={setStory}
			primaryButtonHandler={saveHandler}
			primaryButtonText={'Save'}
			secondaryButtonHandler={previousStepHandler}
			secondaryButtonText={'Previous step'}
			contentStyle={{ color: textColor }}
		/>
	);
};

export default StoryFinal;
