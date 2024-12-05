import React from 'react';
import {Box, FormControl} from "@mui/material";
import PageHeader from "@/components/common/PageHeader";
import CustomSelect from "@/components/common/CustomSelect";
import UserFormSelect from "@/components/common/UserFormSelect";
import useSWR from "swr";
import axios from "axios";

// const link = 'http://localhost:8080';
const link ='https://squid-app-ckcq2.ondigitalocean.app'

const PersonSelector = ({
	                        person,
	                        setPerson,
	                        selectedValues,
	                        setSelectedValues,
	                        setSteps,
	                        steps,
	                        full,
	                        // getResult
                        }) => {

	const getRecs = async () => {
		const {data} = await axios(`${link}/tests`);
		return data;
	};


	const {
		data = [],
		error,
		isLoading,
		mutate,
	} = useSWR("/data", getRecs);

	const personsOptions = !isLoading
		? [
			{label: "None", value: ""},
				...data.map((p) => ({
				label: p?.Name,
				value: p?.id,
			})),
		]
		: [{label: "Loading...", value: ""}];


	const handleChange = (value) => {
		const selectedPerson = data.find((p) => p.id === value);
		setPerson(selectedPerson);
	};

	return (
		<Box>
			<PageHeader
				header={"Select person to continue"}
				sx={{flexGrow: 1}}
			/>
			<FormControl
				sx={{
					marginBottom: "1rem",
					marginTop: "3rem",
					width: "100%",
				}}
				variant='standard'
			>
				<CustomSelect
					fullWidth
					label='Person'
					value={person?.id}
					options={personsOptions}
					onChange={handleChange}
				/>
			</FormControl>
			{!!person && (
				<UserFormSelect
					person={person}
					selectedValues={selectedValues}
					setSelectedValues={setSelectedValues}
					setSteps={setSteps}
					steps={steps}
					full={full}
					// onSubmit={getResult}
				/>
			)}
		</Box>
	);
};

export default PersonSelector;
