import React from 'react';

import { connect } from 'react-redux';
import { deleteCard } from '../actions';
import SingleCardWrapper from './SingleCardWrapper';


const SingleCard = (props) => {


	const handleDeleteCard = (e) => {
		e.preventDefault();

        const { id } = props.card;
        props.deleteCard(id);
    };

    return (
	    <SingleCardWrapper>
        	<p>Title: {props.card.title}</p>
            <p>Category: {props.card.category}</p>
            <p>Description: {props.card.description}</p>
            <p>Link: {props.card.link}</p>
            <p>Complete? {props.card.completed}</p>
            <form>
            	<button onClick={handleDeleteCard}>Delete</button>
            </form>

	    </SingleCardWrapper>
    );
};



export default connect(
  null,
  { deleteCard }
)(SingleCard);
