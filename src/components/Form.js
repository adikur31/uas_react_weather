import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Kota..."/>
		<input type="text" name="country" placeholder="Negara..."/>
		<button>Dapatkan Cuaca</button>
	</form>
);

export default Form;