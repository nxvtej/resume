/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { useParams } from "react-router-dom";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "../../../../service/GlobalApi";
import { toast } from "sonner";

const formField = {
	title: "",
	companyName: "",
	city: "",
	state: "",
	startDate: "",
	endDate: "",
	workSummary: "",
};

function Experience() {
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const params = useParams();

	const [experinceList, setExperinceList] = useState([formField]);
	const [loading, setLoading] = useState(false);

	const handleRichTextEditor = (e, name, index) => {
		const newEntries = experinceList.slice();
		newEntries[index][name] = e.target.value;

		setExperinceList(newEntries);
	};

	useEffect(()=>{
        resumeInfo?.Experience?.length>0&&setExperinceList(resumeInfo?.Experience)
        
    },[])


	useEffect(() => {
		console.log(experinceList);
		setResumeInfo({
			...resumeInfo,
			Experience: experinceList,
		});
	}, [experinceList]);

	const handleChange = (index, event) => {
		const newEntries = experinceList.slice();
		const { name, value } = event.target;

		newEntries[index][name] = value;
		setExperinceList(newEntries);
	};

	const AddNewExperience = () => {
		setExperinceList([...experinceList, formField]);
	};
	const RemoveExperience = () => {
		setExperinceList((experinceList) => experinceList.slice(0, -1));
	};

	const onSave = () => {
		setLoading(true);
		const data = {
			data: {
				Experience: experinceList.map(({ id, ...rest }) => rest), //just  to remove the id as i dont have it in database defined for each one
			},
		};

		console.log(typeof data);
		console.log(data);

		GlobalApi.UpdateResumeDetails(params?.resumeId, data).then(
			(res) => {
				console.log(res);
				setLoading(false);
				toast("Details updated !");
			},
			(error) => {
				setLoading(false);
			}
		);
	};

	return (
		<div>
			<div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
				<h2 className='font-bold text-lg'>Professional Experience</h2>
				<p>Add Your previous Job experience</p>

				<div>
					{experinceList.map((item, index) => (
						<div key={index}>
							<div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
								<div>
									<label className='text-xs'>Position Title</label>
									<Input
										name='title'
										onChange={(event) => handleChange(index, event)}
										defaultValue={item?.title}
									/>
								</div>
								<div>
									<label className='text-xs'>Company Name</label>
									<Input
										name='companyName'
										onChange={(event) => handleChange(index, event)}
										defaultValue={item?.companyName}
									/>
								</div>
								<div>
									<label className='text-xs'>City</label>
									<Input
										name='city'
										onChange={(event) => handleChange(index, event)}
										defaultValue={item?.city}
									/>
								</div>
								<div>
									<label className='text-xs'>State</label>
									<Input
										name='state'
										onChange={(event) => handleChange(index, event)}
										defaultValue={item?.state}
									/>
								</div>
								<div>
									<label className='text-xs'>Start Date</label>
									<Input
										type='date'
										name='startDate'
										onChange={(event) => handleChange(index, event)}
										defaultValue={item?.startDate}
									/>
								</div>
								<div>
									<label className='text-xs'>End Date</label>
									<Input
										type='date'
										name='endDate'
										onChange={(event) => handleChange(index, event)}
										defaultValue={item?.endDate}
									/>
								</div>
								<div className='col-span-2'>
									<RichTextEditor
										index={index}
										defaultValue={item?.workSummary}
										onRichTextEditorChange={(event) =>
											handleRichTextEditor(event, "workSummary", index)
										}
									/>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<Button
							variant='outline'
							onClick={AddNewExperience}
							className='text-primary'
						>
							{" "}
							+ Add More Experience
						</Button>
						<Button
							variant='outline'
							onClick={RemoveExperience}
							className='text-primary'
						>
							{" "}
							- Remove
						</Button>
					</div>

					<Button
						disabled={loading}
						onClick={() => {
							onSave();
						}}
					>
						{loading ? <LoaderCircle className='animate-spin' /> : "Save"}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Experience;
/*

import GlobalApi from "../../../../service/GlobalApi";

	
	useEffect(() => {
		resumeInfo?.Experience.length > 0 &&
			setExperinceList(resumeInfo?.Experience);
	}, []);

	


*/
