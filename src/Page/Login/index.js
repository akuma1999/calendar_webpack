import React from "react";
import { TextField, Button } from "@mui/material";

// import style
import "./style.scss";
//

export default function LoginPage() {
	const [data, setData] = React.useState({
		account: "",
		pass: "",
	});

	const submit = () => {
		console.log(data);
	};

	const textChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};
	return (
		<div className="login-container">
			<div>
				<p>đăng nhập</p>
				<div>
					<TextField
						id="outlined-basic"
						label="Tài Khoản"
						name="account"
						onChange={(e) => textChange(e)}
						variant="outlined"
						fullWidth={true}
					/>
				</div>
				<div>
					<TextField
						id="outlined-basic"
						label="Mật khẩu"
						name="pass"
						onChange={(e) => textChange(e)}
						variant="outlined"
						fullWidth={true}
					/>
				</div>
				<div>
					<Button
						variant="contained"
						color="primary"
						fullWidth={true}
						onClick={() => submit()}
					>
						Gửi
					</Button>
				</div>
			</div>
		</div>
	);
}
