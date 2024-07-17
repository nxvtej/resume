/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
// import { error } from "console";
import { LoaderCircle } from "lucide-react";
// import { Input } from "";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function PersonalDetail({ enableNext }) {
	const params = useParams();
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const [formData, setFormData] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log(params);
	}, []);
	const handleInputChange = (e) => {
		enableNext(false);
		// setResumeInfo({...resumeInfo,[e.target.name]:e.target.value})
		// console.log(e.target);
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setResumeInfo({ ...resumeInfo, [name]: value });
	};
	const onSave = (e) => {
		e.preventDefault();
		setLoading(true);
		// Add validation logic here before enabling "Next"
		const data = {
			data: formData,
		};
		GlobalApi.UpdateResumeDetails(params?.resumeId, data).then(
			(res) => {
				console.log(res);
				setLoading(false);
				toast("Details updated");
				enableNext(true);
			},
			(error) => {
				setLoading(false);
			}
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
					<Button type='submit' disabled={loading}>
						{loading ? <LoaderCircle className='animate-spin' /> : "Save"}
					</Button>
				</div>
			</form>
		</div>
	);
}

export default PersonalDetail;