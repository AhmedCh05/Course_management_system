import React, { useState } from "react";
import SidePanel from "../Components/Sidebar";
import "../Assets/Css/dashboard.css";
import ListRecords from "../Pages/ListStudents";
import Greetings from '../Components/mainGreetings';
import credentials from '../Db_files/loginCredentials';
import TotalCountCard from "../Components/TotalCountCard";
import ListProfessors from "./ListProfessors";
import ListCourses from "./ListCourses";

function Dashboard() {
  const [choice, setChoice] = useState(1);

  let content;
  if (choice === 2) {
    content = <ListRecords />;
  } else if (choice === 3) {
	content = <ListCourses/>

  } else if (choice === 4) {
    content = <ListProfessors/>
  }

  return (
    <div className="dashboard">
      <SidePanel setChoice={setChoice}/>
      <div className="main-content">
        {choice === 1 && (
          <>
            <Greetings {...credentials} />
            <TotalCountCard/>
          </>
        )}
        {choice !== 1 && content}
      </div>
    </div>
  );
}

export default Dashboard;
