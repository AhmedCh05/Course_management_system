import React from "react";
import { faUserGraduate, faBookOpen, faUserTie,faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../Assets/Css/sidebar.css";

function Sidebar({ setChoice }) {
  return (
    <div className="side-panel">
      <div id="IconOrientation">
      <FontAwesomeIcon title="Home" className="SidebarIcons" icon={faHouse} onClick={() => {setChoice(1)}} />
        <FontAwesomeIcon title="Students" className="SidebarIcons" icon={faUserGraduate} onClick={() => {setChoice(2)}} />
        <FontAwesomeIcon title="Courses" className="SidebarIcons" icon={faBookOpen} onClick={() => setChoice(3)} />
        <FontAwesomeIcon title="Professors" className="SidebarIcons" icon={faUserTie} onClick={() => setChoice(4)} />
      </div>
    </div>
  );
}

export default Sidebar;
