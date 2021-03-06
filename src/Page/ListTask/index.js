import moment from "moment";
import React from "react";
import {
	Paper,
	Tabs,
	Tab,
	Modal,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	IconButton,
	Typography,
} from "@mui/material";

// import icon
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//

//import component
import FromModal from "./Form";
//

// redux
import { useDispatch, useSelector } from "react-redux";
import { TaskTypes } from "../../Redux/type/Task";
import * as TaskActions from "../../Redux/actions/Task";
import * as CommonAction from "../../Redux/actions/common";
//
export default function SimpleAccordion({ loading }) {
	const [state, setState] = React.useState(0);
	const [isNew, setIsNew] = React.useState(false);
	const [isEdit, setIsEdit] = React.useState(false);
	const [idChoose, setIdChoose] = React.useState(0);
	const handleChange = (event, newValue) => {
		setState(newValue);
	};

	const dispatch = useDispatch();

	const dateChoose = useSelector((state) => state.common.chooseDate);
	const tasksAll = useSelector((state) => state.task.Tasks);

	const tasks = tasksAll.filter(
		(item) =>
			moment(item.date, "LLLL").date() ==
				moment(dateChoose, "LLLL").date() &&
			moment(item.date, "LLLL").month() ==
				moment(dateChoose, "LLLL").month() &&
			moment(item.date, "LLLL").year() ==
				moment(dateChoose, "LLLL").year()
	);

	const addNew = async (title, text) => {
		dispatch(CommonAction.loadingChange(true));
		const data = { title: title, text: text, date: dateChoose.toString() };
		await TaskActions.addNewTaskRequest(dispatch, data);
		await TaskActions.fectListTaskRequest(dispatch);
		dispatch(CommonAction.loadingChange(false));
		setIsNew(!isNew);
	};

	const editItem = async (id, title, text) => {
		dispatch(CommonAction.loadingChange(true));
		const data = { title: title, text: text, date: dateChoose.toString() };
		await TaskActions.editTaskRequest(dispatch, id, data);
		await TaskActions.fectListTaskRequest(dispatch);
		dispatch(CommonAction.loadingChange(false));
		setIsEdit(!isEdit);
	};

	const deleteItem = async (id) => {
		dispatch(CommonAction.loadingChange(true));
		await TaskActions.deleteTaskRequest(dispatch, id);
		await TaskActions.fectListTaskRequest(dispatch);
		dispatch(CommonAction.loadingChange(false));
	};

	const renderModel = (state, handleClose, title, onsubmit) => {
		return (
			<Modal
				key={title}
				id={title}
				open={state}
				onClose={handleClose}
				aria-labelledby={`simple-modal-${title}`}
				aria-describedby={`simple-modal-description-${title}`}
			>
				<div
					style={{
						backgroundColor: "aqua",
						width: "40%",
						marginLeft: "30%",
						marginTop: "20px",
						padding: 10,
					}}
				>
					<Typography>{title}</Typography>
					<FromModal
						onsubmit={(title, text) => onsubmit(title, text)}
						handleClose={() => handleClose()}
					/>
				</div>
			</Modal>
		);
	};
	return (
		<div style={{ width: "50%", marginLeft: "25%" }}>
			<Paper square>
				<Tabs
					value={state}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChange}
					aria-label="disabled tabs example"
				>
					<Tab label="Ghi ch??" />
					<Tab label="Cu???c h???n" />
				</Tabs>
			</Paper>
			<Paper elevation={3} square variant="elevation">
				{tasks.map((item, index) => (
					<Accordion key={index}>
						<AccordionSummary
							style={{ backgroundColor: "rgba(230,70,70,.4)" }}
							expandIcon={<ExpandMoreIcon />}
							aria-controls={`content-${index}`}
							id={`header-${index}`}
						>
							<Typography style={{ flex: 1 }}>
								{item.title}
							</Typography>

							<IconButton
								onClick={() => {
									setIdChoose(item.id);
									setIsEdit(!isEdit);
								}}
							>
								<EditIcon />
							</IconButton>
							<IconButton
								onClick={() => {
									deleteItem(parseInt(item.id));
								}}
							>
								<DeleteForeverOutlinedIcon />
							</IconButton>
						</AccordionSummary>
						<AccordionDetails style={{ padding: "20px" }}>
							{item.text}
						</AccordionDetails>
						{renderModel(
							isEdit,
							() => setIsEdit(!isEdit),
							"s???a",
							(title, text) => editItem(item.id, title, text)
						)}
					</Accordion>
				))}
			</Paper>
			<div
				style={{
					position: "fixed",
					bottom: 50,
					right: 50,
					zIndex: 1000,
				}}
			>
				<IconButton onClick={() => setIsNew(!isNew)}>
					<ControlPointIcon style={{ fontSize: 50 }} />
				</IconButton>
			</div>

			{renderModel(
				isNew,
				() => setIsNew(!isNew),
				"th??m m???i",
				(title, text) => addNew(title, text)
			)}
		</div>
	);
}
