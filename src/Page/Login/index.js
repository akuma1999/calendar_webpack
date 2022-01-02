import React from "react";
import { TextField, Button } from "@mui/material";

// import style
import "./style.scss";
//

export default function LoginPage() {
	return (
		<div className="login-container">
			<div>
				<p>đăng nhập</p>
				<div>
					<TextField
						id="outlined-basic"
						label="Tài Khoản"
						variant="outlined"
						fullWidth={true}
					/>
				</div>
				<div>
					<TextField
						id="outlined-basic"
						label="Mật khẩu"
						variant="outlined"
						fullWidth={true}
					/>
				</div>
				<div>
					<Button
						variant="contained"
						color="primary"
						fullWidth={true}
					>
						Gửi
					</Button>
				</div>
			</div>
		</div>
	);
}
