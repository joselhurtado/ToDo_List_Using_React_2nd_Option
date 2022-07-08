import React, { useState } from "react";

//TODOlist Function
export default function Home() {
	const [theList, getList] = useState([
		"Learn Javascript",
		"Schedule Mentorships",
		"Practice React"
	]);
	const [userInput, setUserInput] = useState([""]); // First empty userInput

	const handleKeyUp = event => {
		if (event.keyCode == 13 && userInput != "") {
			getList(theList.concat(userInput));
			setUserInput("");
		}
	};
	// handleKeyUp from onKeyUp on input text with event passed as default
	// check if event keycode is 13 (enter) and input is not blank to continue
	// use state getList to add concat version of userInput into theList

	const itemDelete = index => {
		var updatedList = theList.filter(
			(task, taskIndex) => index != taskIndex
		);
		getList(updatedList);
	};
	// create new variable with updated list > filter to check if index matches original index from list. then use getList to update to new list.

	return (
		<div className="container form text-center mt-5">
			<h1>To-Do List</h1>
			<br />

			<div className="container form-group todoList">
				<input
					className="taskInput"
					onChange={event => setUserInput(event.target.value)}
					value={userInput}
					onKeyUp={handleKeyUp}
					placeholder="Add a new task"
					aria-label="Task on the list"
					aria-describedby="basic-addon2"
				/>
				<br />
				<div className="mt-3">
					<ul className="taskGroup container-fluid">
						{theList.map((value, index) => {
							return (
								<li className="list-group-item" key={index}>
									{value}
									<button
										type="button"
										onClick={() => itemDelete(index)}
										className="close">
										X
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}