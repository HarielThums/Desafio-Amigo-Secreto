import styled from "styled-components";

export const BodyContainer = styled.div`
	font-size: 30px;
	color: #333;
	padding: 20px;
	margin: 15px;
	margin-left: 13%;
	margin-right: 13%;
	overflow: hidden;
	text-align: center;
	border-radius: 10px;
	border-style: groove;

	display: flex;
	flex-direction: column;
	min-width: 300px;

	input {
		margin-left: 10px;
		width: 25%;
		margin: normal;
		padding: 5px;
		font-size: 18px;
		border-radius: 5px;
		border: 0;
		border-style: hidden;
		background-color: #c9c9c9;
	}

	button {
		width: 120px;
		margin: 10px 15px;
		padding: 5px;
		color: #fff;
		background-color: #1b998b;
		text-align: center;
		font-size: 20px;
		border-radius: 5px;
		border-style: hidden;
		cursor: pointer;
	}
	button.remover {
		width: 40px;
		margin: 0px 10px;
		background-color: #ff3333;
	}

	li {
		display: block;
		list-style-type: none;
		margin: 0;
		box-sizing: border-box;
		height: 25%;
		font-size: 25px;
		margin-top: 10px;
	}
	li:nth-child(odd) {
		clear: both;
		float: left;
		width: 50%;
	}

	#error {
		width: 10%;
		color: #ff3333;
		margin-bottom: 15px;
		border: 1px solid #ff3333;
		padding: 10px;
		width: 100%;
		text-align: center;
		border-radius: 5px;
	}
	#success {
		color: #1b998b;
		margin-bottom: 15px;
		border: 1px solid #1b998b;
		padding: 10px;
		width: 100%;
		text-align: center;
		border-radius: 5px;
	}
`;
