import React from "react";
import AddResume from "./component/AddResume";

const DashboardPage = () => {
	return (
		<div className='p-10 md:px-20lg:px-32'>
			<h2 className='font-bold text-3xl'>My resume</h2>
			<p>Start creating resume for your next job</p>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
				<AddResume />
			</div>
		</div>
	);
};

export default DashboardPage;
