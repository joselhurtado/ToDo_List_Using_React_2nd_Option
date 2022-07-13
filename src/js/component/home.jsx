import React, { useState } from "react";
import Logo from "/src/img/todo-image.png";

export default function Home() { //TODOlist Function

	const [theList, setTheList] = useState([
		"1st Sample Copy",
		"2nd Sample Copy",
		"3rd Sample Copy",
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
			(x, taskIndex) => index != taskIndex
		);
		setTheList(updatedList);
	};	
				
	return (
		<div className="container-fluid card">
			<div className="containerLogo">
				<div className="d-flex justify-content-center align-items-center">
						<div className="d-flex logo align-items-center">
							<img src={Logo} />
							<h1 className="d-flex">ToDo List with React</h1>
						</div>
				</div>
			</div>
			<div className="container-fluid ">
				<input
					className="taskInput"
					onChange={event => setUserInput(event.target.value)}
 					value={userInput}
					onKeyUp={handleKeyUp}
					placeholder="Add a new task here"
					aria-label="Task on the list"
				/>
				<div className="d-flex">
					<ul className="taskGroup container ">
						{theList.map((value, index) => {
							return (
								<li className="list-group-item" key={index}>
									{value}
									<button
										type="button"
										onClick={() => itemDelete(index)}
										className="close">{close}</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
					<div className="footer">
						Made with ❤️ by <a href="https://www.hurtadojose.com">Jose Hurtado</a>
					</div>
		</div>
	);
}