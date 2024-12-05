import React from 'react';
import PageHeader from "@/components/common/PageHeader";
import {Box, Button, Container} from "@mui/material";
import FullPageLoader from "@/components/common/FullPageLoader";

const PageWrapper = ({children, header, groupDeleteHandler, itemsToDelete, loading, createHandler}) => {
	return (
		<Container
			sx={{
				position: 'relative'
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<PageHeader header={header}/>
				{itemsToDelete.length > 0 && (
					<Button
						variant={"contained"}
						color={"primary"}
						onClick={groupDeleteHandler}
					>
						Delete selected
					</Button>
				)}
				{!!createHandler && <Button
					variant={"contained"}
					color={"primary"}
					onClick={createHandler}
				>{`Create`}</Button>}
			</Box>
			{children}
			{loading && <FullPageLoader/>}
		</Container>
	);
};

export default PageWrapper;
