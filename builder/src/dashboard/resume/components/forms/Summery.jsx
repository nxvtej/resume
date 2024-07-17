/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Brain, LoaderCircle } from "lucide-react";

const Summery = ({ enableNext }) => {
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const [summery, setSummery] = useState();
	const [loading, setLoading] = useState(false);
	const params = useParams();

	useEffect(() => {
		summery &&
			setResumeInfo({
				...resumeInfo,
				summery: summery,
			});
	}, [summery]);

	const onSave = (e) => {
		e.preventDefault();
		setLoading(true);
		// Add validation logic here before enabling "Next"
		const data = {
			data: {
				summery: summery,
			},
		};
		console.log(params?.resumeId);
		GlobalApi.UpdateResumeDetails(params?.resumeId, data).then(
			(res) => {
				console.log(res);
				setLoading(false);
				toast("Details updated");
				enableNext(true);
			},
			(error) => {
				console.log("req error");
				setLoading(false);
			}
		);
	};
	return (
		<div>
			<div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
				<h2 className='font-bold text-lg'>Summery</h2>
				<p>Add summery foy your job title</p>

				<form className='mt-7' onSubmit={onSave}>
					<div className='flex justify-between items-end'>
						<label>Add Summery</label>
						<Button
							type='button'
							className='border-primary text-primary gap-2'
							size='sm'
							variant='outline'
						>
							<Brain />
							Generate from AI
						</Button>
					</div>
					<Textarea
						required
						className='mt-3'
						value={summery}
						defaultValue={summery ? summery : resumeInfo?.summery}
						onChange={(e) => setSummery(e.target.value)}
					/>
					<div className='mt-3 flex justify-end'>
						<Button type='submit' disabled={loading}>
							{loading ? <LoaderCircle className='animate-spin' /> : "Save"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Summery;
