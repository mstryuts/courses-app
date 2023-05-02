import { useState } from 'react';
import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import { Formik, Form, Field } from 'formik';
import { BUTTON_TEXT_SEARCH } from 'constants';

const SearchBar = ({ onChange, onClick, inputValue }) => {
	return (
		<>
			<form action='' onSubmit={onClick}>
				<Input value={inputValue} onChange={onChange} />
				<Button buttonText={BUTTON_TEXT_SEARCH} />
			</form>
		</>
	);
};

export default SearchBar;
