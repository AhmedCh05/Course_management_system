import React from "react";
import {
	faUserGraduate,
	faBookOpen,
	faUserTie,
	faHouse,
	faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Assets/Css/sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar({ setChoice }) {
	const navigate = useNavigate();
	return (
		<div className="side-panel">
			<div id="IconOrientation">
				<FontAwesomeIcon
					title="Home"
					className="SidebarIcons"
					icon={faHouse}
					onClick={() => {
						setChoice(1);
					}}
				/>
				<FontAwesomeIcon
					title="Students"
					className="SidebarIcons"
					icon={faUserGraduate}
					onClick={() => {
						setChoice(2);
					}}
				/>
				<FontAwesomeIcon
					title="Courses"
					className="SidebarIcons"
					icon={faBookOpen}
					onClick={() => setChoice(3)}
				/>
				<FontAwesomeIcon
					title="Professors"
					className="SidebarIcons"
					icon={faUserTie}
					onClick={() => setChoice(4)}
				/>
				<FontAwesomeIcon
					title="Log out"
					className="SidebarIcons"
					icon={faPowerOff}
					onClick={() => {
						localStorage.removeItem("authenticate");
						localStorage.removeItem("id");
						alert("Logging Out");
						navigate("/login");
					}}
				/>
			</div>
		</div>
	);
}

export default Sidebar;
