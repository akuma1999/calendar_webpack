import { Route, Routes } from "react-router-dom";
import React from "react";
// import component
import ShowCalendar from "./ShowCalendar/ShowCalendar";
import ListTask from "./ListTask";
import Sigin from "./Sigin";
import Loading from "./loading";
import Login from "./Login";
// import ListTask from './ListTask';
// import ShowCalendar from './ShowCalendar/ShowCalendar';
//

// import style
import "./style.css";
//
export default function Root() {
	const [loading, setLoading] = React.useState(false);
	return (
		<>
			<Routes>
				<Route
					path="/tasks"
					element={<ListTask loading={(v) => setLoading(v)} />}
				/>

				<Route path="/login" element={<Login />} />
				<Route path="/sigin" element={<Sigin />} />
				<Route
					path="/"
					element={<ShowCalendar loading={(v) => setLoading(v)} />}
				/>
			</Routes>
			{/* <Loading loading={loading} /> */}
		</>
	);
}
