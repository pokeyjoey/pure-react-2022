import React from 'react'
import ReactDOM from 'react-dom'

/*function MyThing() {
	return (
		<div className="book">
			<div className="title">The Title</div>
			<div className="author">The Author</div>



			<ul className="stats">
				<li className="rating">    5 stars    </li>
				<li className="isbn">12-345678-910</li>
			</ul>



		</div>)
}*/

function Greeting() {
	let username = "root";
	//let username = undefined;
	//let username = null;
	//let username = false;
	
	return ( 
		<>
			<div>
				{username == (undefined || null) ? 'Not logged in' : 'Hello ' + username}
			</div>
			<div>
				This is another element
			</div>
		</>
	)
}

//ReactDOM.render(<MyThing />, document.querySelector('#root'))
ReactDOM.render(<Greeting />, document.querySelector('#root'))
