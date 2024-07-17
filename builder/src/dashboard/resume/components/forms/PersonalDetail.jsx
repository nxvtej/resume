/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import { Input } from "";
import React, { useContext } from "react";

function PersonalDetail({ enableNext }) {
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const handleInputChange = (e) => {
		enableNext(false);
		// setResumeInfo({...resumeInfo,[e.target.name]:e.target.value})
		// console.log(e.target);
		const { name, value } = e.target;
		setResumeInfo({ ...resumeInfo, [name]: value });
	};
	const onSave = (e) => {
		e.preventDefault();
		// Add validation logic here before enabling "Next"

		enableNext(true);

		// Show validation errors to the user
		// console.log("failed");
	};

	// Form validation function (example, replace with your specific logic)
	const isValidForm = (data) => {
		return (
			data.firstName &&
			data.jobTitle &&
			data.address &&
			data.phone &&
			data.email
		);
	};
	return (
		<div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
			<h2 className='font-bold text-lg'>Personal Details</h2>
			<p>Get started with the basic info</p>

			<form onSubmit={onSave}>
				<div className='grid grid-cols-2 mt-5 gap-3'>
					<div>
						<label className='text-xs'>First Name</label>
						<Input name='firstName' required onChange={handleInputChange} />
					</div>
					<div>
						<label className='text-xs'>Last Name</label>
						<Input name='lastName' onChange={handleInputChange} />
					</div>
					<div className='col-span-2'>
						<label className='text-xs'>Job Title</label>
						<Input name='jobTitle' required onChange={handleInputChange} />
					</div>
					<div className='col-span-2'>
						<label className='text-xs'>Address</label>
						<Input name='address' required onChange={handleInputChange} />
					</div>

					<div className='col-span-1'>
						<label className='text-xs'>Phone</label>
						<Input name='phone' required onChange={handleInputChange} />
					</div>
					<div className='col-span-1'>
						<label className='text-xs'>Email</label>
						<Input name='email' required onChange={handleInputChange} />
					</div>
				</div>
				<div className='mt-3 flex justify-end'>
					<Button type='submit'>Save</Button>
				</div>
			</form>
		</div>
	);
}

export default PersonalDetail;
