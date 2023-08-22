import React, { useEffect, useState } from "react";
import SidePanel from "../Components/Sidebar";
import "../Assets/Css/dashboard.css";
import ListRecords from "../Pages/ListStudents";
import Greetings from "../Components/mainGreetings";
import credentials from "../Db_files/loginCredentials";
import ListProfessors from "./ListProfessors";
import ListCourses from "./ListCourses";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("id") == null) {
			navigate("/login");
		}
	});
	const [choice, setChoice] = useState(1);

	let content;
	if (choice === 2) {
		content = <ListRecords />;
	} else if (choice === 3) {
		content = <ListCourses />;
	} else if (choice === 4) {
		content = <ListProfessors />;
	}

	return (
		<div className="dashboard">
			<SidePanel setChoice={setChoice} />
			<div className="main-content">
				{choice === 1 && (
					<>
						<Greetings {...credentials} />
					</>
				)}
				{choice !== 1 && content}
			</div>
		</div>
	);
}

export default Dashboard;
