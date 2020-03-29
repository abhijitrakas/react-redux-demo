import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
	<ul>
		{articles.map(el => {
			return <li key={`articles-list${el.id}`}>{el.title}</li>;
		} )
}
	</ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
