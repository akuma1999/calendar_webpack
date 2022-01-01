import React from "react";
import { TextField, FormControl, Button } from "@mui/material";

export default function Form({ onsubmit, handleClose }) {
	const [title, setTitle] = React.useState("");
	const [text, setText] = React.useState("");

	const txt = text;
	const tt = title;
	const onSubmit = () => {
		onsubmit(tt, txt);
		handleClose();
	};

	return (
		<FormControl color="primary" fullWidth={true}>
			<TextField
				id="custom-css-standard-inputa"
				label="Tên công việc"
				style={{ margin: 10 }}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				id="standard-multiline-static"
				label="Nội dung công việc"
				multiline
				rows={4}
				style={{ margin: 10 }}
				onChange={(e) => setText(e.target.value)}
			/>
			<Button
				onClick={() => onSubmit()}
				variant="contained"
				color="primary"
				style={{ margin: 10 }}
			>
				Hoàn thành
			</Button>
		</FormControl>
	);
}
