import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import * as _ from "lodash";
// import style
import "./style.scss";
//

// import action and types
import * as CalendarTypes from "../../Redux/type/Calendar.type.js";
import * as CommonAction from "../../Redux/actions/common";
import * as CalendarActions from "../../Redux/actions/Calendar";
//

// material icon
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
//

// import other js
import moment from "moment";
//

//react redux
import * as TaskActions from "../../Redux/actions/Task";
//

export default function ShowCalendar({ loading }) {
	const { t, i18n } = useTranslation();
	const date = useSelector((state) => state.common.date);
	const Thisdate = useSelector((state) => state.common.Thisdate);
	const dayFirst = date.clone().startOf("month").day();
	const month = date.month();
	const year = date.year();
	const DateOfMonth = _.range(1, date.daysInMonth() + 1);
	const tasks = useSelector((state) => state.task.Tasks);

	const dispatch = useDispatch();

	React.useEffect(() => {
		console.log("1");
		dispatch(CommonAction.loadingChange(true));
		TaskActions.fectListTaskRequest(dispatch);
		dispatch(CommonAction.loadingChange(false));
		console.log("2");
	}, []);

	const ChangeDate = (data) => dispatch(CalendarActions.ChangeDate(data));
	const ChangeChooseDate = (value, month, year) => {
		const ChooseDate = moment();
		ChooseDate.set("year", year);
		ChooseDate.set("month", month);
		ChooseDate.set("date", value);
		return dispatch(CalendarActions.ChangeChooseDate(ChooseDate));
	};

	const renderEmptyItem = (dayFrist) => {
		const numday = _.range(0, dayFrist);
		return numday.map((value, key) => (
			<Box
				key={key}
				style={{
					width: `${100 / 7}%`,
					textAlign: "center",
					display: "inline-block",
				}}
			></Box>
		));
	};

	const renderCalendarItem = (data, dayFrist, Style) => {
		const Class = Style === "title" ? "CalendarTitle" : "CalendarItem";
		const tyle = Style === "title" ? "text" : "contained";
		return (
			<Box className={Class}>
				{renderEmptyItem(dayFrist)}
				{data.map((value, key) => {
					const taskClone = tasks.filter((item) => {
						return (
							moment(item.date, "LLLL").date() == value &&
							moment(item.date, "LLLL").month() == month &&
							moment(item.date, "LLLL").year() == year
						);
					});
					const stylex =
						taskClone.length > 0 && Style !== "title"
							? {
									width: `${100 / 7}%`,
									textAlign: "left",
									backgroundColor: "rgba(255,80,70,.4)",
							  }
							: { width: `${100 / 7}%`, textAlign: "left" };

					return (
						<Button
							key={key}
							onClick={() => {
								dispatch(
									TaskActions.changeTaskOneDate(taskClone)
								);
								ChangeChooseDate(value, month, year);
							}}
							style={stylex}
							variant={tyle}
						>
							<Link
								style={{ width: "100%", textAlign: "center" }}
								to="/tasks"
							>
								{value}
							</Link>
						</Button>
					);
				})}
			</Box>
		);
	};

	const controlState = (tyle, num) => {
		switch (tyle) {
			case "month":
				date.set("month", month + num);
				ChangeDate(date.toString());
				break;
			case "year":
				date.set("year", year + num);
				const moment = date.toString();
				ChangeDate(date.toString());
				break;
			default:
				return;
		}
	};

	const control = (month, year) => {
		return (
			<Grid style={{ textAlign: "center" }} container>
				<Grid item xs={3}>
					<Button>
						<SkipPreviousRoundedIcon
							onClick={() => controlState("year", -1)}
						/>
					</Button>
					<Button>
						<ArrowLeftIcon
							onClick={() => controlState("month", -1)}
						/>
					</Button>
				</Grid>
				<Grid item xs={6} style={{ fontSize: "30px" }}>
					{(month + 1).toString() + "/" + year.toString()}
				</Grid>
				<Grid item xs={3}>
					<Button>
						<ArrowRightIcon
							onClick={() => controlState("month", 1)}
						/>
					</Button>
					<Button>
						<SkipNextRoundedIcon
							onClick={() => controlState("year", 1)}
						/>
					</Button>
				</Grid>
			</Grid>
		);
	};

	return (
		<Box className="Calendar">
			<Box component="h1" className="title">
				Calendar
			</Box>

			{control(month, year)}
			{renderCalendarItem(t("DateOfWeek").split(","), 0, "title")}

			{renderCalendarItem(DateOfMonth, dayFirst, "item")}
		</Box>
	);
}
