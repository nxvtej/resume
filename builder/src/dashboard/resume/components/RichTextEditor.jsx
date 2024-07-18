/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import {
	BtnBold,
	BtnBulletList,
	BtnItalic,
	BtnLink,
	BtnNumberedList,
	BtnStrikeThrough,
	BtnUnderline,
	Editor,
	EditorProvider,
	Separator,
	Toolbar,
} from "react-simple-wysiwyg";

function RichTextEditor({ onRichTextEditorChange }) {
	const [value, setValue] = useState();
	return (
		<div>
			<EditorProvider>
				<Editor
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						onRichTextEditorChange(e);
					}}
				>
					<Toolbar>
						<BtnBold />
						<BtnItalic />
						<BtnUnderline />
						<BtnStrikeThrough />
						<Separator />
						<BtnNumberedList />
						<BtnBulletList />
						<Separator />
						<BtnLink />
					</Toolbar>
				</Editor>
			</EditorProvider>
		</div>
	);
}

export default RichTextEditor;
