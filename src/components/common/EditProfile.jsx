import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { TextField, Button, Box } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';

const EditProfile = ({ onClose }) => {
	const { user, updateUserData } = useAuth();
	const [image, setImage] = useState(user?.image[0]?.url);
	const { control, handleSubmit } = useForm({
		defaultValues: {
			name: user?.name,
			email: user?.email,
		}
	});

	const onSubmit = async (data) => {
		try {
			await updateUserData(data);
			onClose();
		} catch (error) {
			console.error('Error updating profile:', error);
		}
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleImageUpload = async () => {
		// Здесь должна быть логика для загрузки изображения на сервер
		// и обновления профиля пользователя
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				maxWidth: 400,
				margin: 'auto',
			}}
		>
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<TextField {...field} label="Name" variant="outlined" />
				)}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<TextField {...field} label="Email" variant="outlined" />
				)}
			/>
			<Box>
				<input
					accept="image/*"
					type="file"
					onChange={handleImageChange}
					style={{ display: 'none' }}
					id="image-upload"
				/>
				<label htmlFor="image-upload">
					<Button variant="contained" component="span">
						Choose Image
					</Button>
				</label>
				{image && (
					<Box
						component="img"
						src={image}
						alt="Profile"
						sx={{ width: 100, height: 100, marginTop: 2 }}
					/>
				)}
			</Box>
			<Button type="submit" variant="contained" color="primary">
				Save Changes
			</Button>
			<Button onClick={handleImageUpload} variant="contained" color="secondary">
				Upload Image
			</Button>
		</Box>
	);
};

export default EditProfile;
