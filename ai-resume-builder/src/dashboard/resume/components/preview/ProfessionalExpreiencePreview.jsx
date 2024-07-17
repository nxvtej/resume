import React from "react";

function ProfessionalExpreiencePreview({ resumeInfo }) {
	return (
		<div className='my-6'>
			<h2
				className='text-center font-bold text-sm mb-2'
				style={{
					color: resumeInfo?.themeColor,
				}}
			>
				Professioinal Experiene
			</h2>

			<hr
				style={{
					borderColor: resumeInfo?.themeColor,
				}}
			/>

			{resumeInfo?.experience.map((experience, index) => (
				<div key={index}>
					<h2>{experience?.title}</h2>
					<h2>
						{experience?.companyName},{experience?.city},{experience?.state}
						<span>
							{experience?.startDate}{" "}
							{experience?.currentlyWorking ? "Present" : experience?.endDate}
						</span>
					</h2>
				</div>
			))}
		</div>
	);
}

export default ProfessionalExpreiencePreview;
