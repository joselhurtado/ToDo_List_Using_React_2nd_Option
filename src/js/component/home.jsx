import React, { useState } from "react";

export default function Home() { //TODOlist Function

	const [theList, setTheList] = useState([
	]);

	const [userInput, setUserInput] = useState([""]); // First empty userInput

	const handleKeyUp = event => {
		console.log("event", event);
		if (event.keyCode == 13 && userInput != "") { 	// handleKeyUp from onKeyUp on input text with event passed as default
			setTheList(theList.concat(userInput)); 	// check if event keycode is 13 (enter) and input is not blank to continue
			setUserInput(""); 
		}
	};
		
	let close = "X"; //Close Icon Variable for Lists
	const itemDelete = index => {
		var updatedList = theList.filter( 				// create new variable with updated list > filter to check if index matches original index from list. then use getList to update to new list.
			(close, taskIndex) => index != taskIndex
		);
		setTheList(updatedList);
	};	
				
	return (
		<div className="container card text-center">
			<h1>To-Do List</h1>
			<br />
			<div className="container">
				<input
					className="taskInput"
					onChange={event => setUserInput(event.target.value)}
					value={userInput}
					onKeyUp={handleKeyUp}
					placeholder="Add a new task here"
					aria-label="Task on the list"
				/>
				<br />
				<div className="container">
					<ul className="taskGroup container">
						{theList.map((value, index) => {
							return (
								<li className="list-group-item" key={index}>
									{value}
									<button
										type="button"
										onClick={() => itemDelete(index)}
										className="close">
										{close}
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