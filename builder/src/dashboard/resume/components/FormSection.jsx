/* eslint-disable no-unused-vars */
import React, { act, useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summery from "./forms/Summery";

const FormSection = () => {
	const [activeFormIndex, setActiveFormIndex] = useState(1);
	const [enableNext, setEnableNext] = useState(false);
	return (
		<div>
			<div className='flex items-center justify-between'>
				<Button variant='outline' size='sm' className='flex gap-2'>
					<LayoutGrid />
					Theme
				</Button>
				<div className='flex gap-2'>
					{activeFormIndex > 1 && (
						<Button
							size='sm'
							className='flex
						gap-2 hover:scale-110 transition-all hover:shadow-md 2'
							onClick={() => setActiveFormIndex(activeFormIndex - 1)}
						>
							<ArrowLeft />
						</Button>
					)}
					<Button
						disabled={!enableNext}
						onClick={() => setActiveFormIndex(activeFormIndex + 1)}
						className='flex gap-2 hover:scale-110 transition-all hover:shadow-md '
						size='sm'
					>
						Next <ArrowRight />
					</Button>
				</div>
			</div>
			{/* Perfosnal details */}
			{activeFormIndex == 1 ? (
				<PersonalDetail enableNext={(v) => setEnableNext(v)} />
			) : null}

			{/* summery */}

			{activeFormIndex == 2 ? (
				<Summery enableNext={(v) => setEnableNext(v)} />
			) : null}
			{/* Experienc */}

			{/* Educational Details */}
			{/* skills */}
		</div>
	);
};

export default FormSection;
