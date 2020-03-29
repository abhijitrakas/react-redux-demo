import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

function mapDispatchToProps( dispatch ) {
	return {
		addArticle: article => dispatch(addArticle(article))
	};
}

export function ConnectedForm(props) {

	const [ title, setTitle ] = useState( '' );
	const [ id, setId ] = useState( 1 );

	function handleSubmit(event) {
		event.preventDefault();
		props.addArticle({ title, id });
		setId( id + 1 );
		setTitle( '' );
	}

	function handleTitleChange(event) {
		setTitle(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={handleTitleChange}
				/>
			</div>
			<button type="submit">SAVE</button>
		</form>
	);
}

const Form = connect(
	null,
	mapDispatchToProps
)(ConnectedForm);

export default Form;
