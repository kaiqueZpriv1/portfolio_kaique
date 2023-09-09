/** @format */

import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	.text-footer {
		font-size: 1.3vw;
		font-weight: 500;
		margin-top: 50px;
		margin-bottom: 10px;
		color: #053b50;
		text-align: center;
		@media (max-width: 400px) {
			font-size: 5vw;
		}
	}
`;

export const Header = styled.header`
	.container-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo img {
		border-radius: 100%;
		width: 50px;
		margin: 10px 0 0 50px;
		@media (max-width: 400px) {
			width: 50px;
			margin: 10px 20px 0 0;
			position: absolute;
			right: 0;
		}
	}
	.button-header {
		margin: 0 50px 0 0;
		padding: 10px;
		border-radius: 5px;
		background: #053b50;
		@media (max-width: 400px) {
			display: none;
		}
	}
	.button-header a {
		font-size: 1.3vw;
		color: #fff;
	}
`;

export const Inicial = styled.section`
	width: 100%;
	display: flex;
	.container-inicial {
		display: flex;
		justify-content: space-around;
		@media (max-width: 400px) {
			width: 390px;
			flex-direction: column;
			justify-content: center;
		}
	}
`;
export const VerticalSocial = styled.div`
	margin-top: 100px;
	background: #053b50;
	height: 300px;
	width: 50px;
	border-radius: 0 5px 5px 0;
	box-shadow: 15px 0 15px #fff;
	.container-vertical {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;
	}
`;
export const ContainerText = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 150px;
	margin-left: 50px;
	margin: 150px 300px 0 100px;
	width: 26em;
	@media (max-width: 400px) {
		margin: 150px 150px 0 50px;
		width: 12em;
	}
	.subtext {
		font-size: 3vw;
		font-weight: 600;
		color: #176b87;
		@media (max-width: 400px) {
			font-size: 8vw;
		}
	}
	.name {
		font-size: 4.5vw;
		color: #053b50;
		border-right: 2px solid rgba(0, 0, 0, 0.75);
		white-space: nowrap;
		overflow: hidden;
		@media (max-width: 400px) {
			font-size: 10vw;
		}
	}
	.typing-animation {
		animation: cursor 500ms infinite normal, typing 4s steps(40) 1s normal both;
	}
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 7.2em;
		}
	}
	@keyframes cursor {
		from {
			border-right-color: rgba(0, 0, 0, 0.75);
		}
		to {
			border-right-color: transparent;
		}
	}
	.subtext-2 {
		color: #176b87;
		font-weight: 600;
		font-size: 1.5vw;
		@media (max-width: 400px) {
			font-size: 4vw;
		}
	}
	.links-home {
		margin-top: 50px;
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
		@media (max-width: 400px) {
			justify-content: space-around;
			gap: 0px;
		}
	}
	.btn-main {
		padding: 10px;
		background: transparent;
		border: 1px solid #053b50;
		border-radius: 5px;
		text-decoration: none;
		font-size: 1.5vw;
		font-weight: 600;
		@media (max-width: 400px) {
			font-size: 4vw;
		}
	}
	.light {
		background: transparent;
		color: #053b50;
	}
	.light:hover {
		background: #053b50;
		transition: 500ms;
		color: #fff;
	}
	.dark {
		background: #053b50;
		color: #fff;
	}
	.dark:hover {
		background: rgba(200, 200, 200, 1);
		transition: 500ms;
		color: #053b50;
	}
`;
export const ContainerPhoto = styled.div`
	padding: 100px 100px 0 0;
	@media (max-width: 400px) {
		padding: 0;
		margin: 100px 0 0 55px;
	}
	.photo-inicial {
		border-radius: 100%;
		box-shadow: 0 0 10px #fff;
		@media (max-width: 400px) {
			width: 200px;
		}
	}
`;

export const Habilidades = styled.div`
	margin: 140px 0 0 0;
	@media (max-width: 400px) {
		position: relative;
		bottom: 250px;
		margin: 90px 0 0 0;
	}
	.container-habilidades {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40px;
		@media (max-width: 400px) {
			gap: 50px 160px;
			margin: 0 0 0 50px;
			display: grid;
			grid-template-columns: 100px 100px;
		}
	}
	.btn-habilidade {
		display: flex;
		align-items: center;
		@media (max-width: 400px) {
		}
	}
	.btn-habilidade:hover {
		transform: scale(1.1);
	}
	.btn-habilidade a {
		font-size: 1.2vw;
		font-weight: 600;
		color: rgba(20, 20, 20, 0.5);
		@media (max-width: 400px) {
			font-size: 4vw;
			display: none;
		}
	}
	.btn-habilidade a:hover,
	.icon-habilidade:hover {
		color: #053b50;
		text-shadow: 0 0 20px #fff;
	}
	.icon-habilidade {
		color: rgba(20, 20, 20, 0.5);
		font-size: 1.2vw;
		@media (max-width: 400px) {
			font-size: 40px;
		}
	}
	.html {
		color: #ec6231;
	}
	.css {
		color: #264de4;
	}
	.js {
		color: #f0db4f;
	}
	.react {
		color: #62dafd;
	}
`;

export const Details = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	transform: rotate(180deg);
	@media (max-width: 400px) {
		display: none;
	}
`;

export const Sobre = styled.div`
	margin-top: 150px;
	@media (max-width: 400px) {
		margin-top: 0;
	}
	.container-sobre {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		@media (max-width: 400px) {
			display: flex;
			flex-direction: column;
		}
	}
	.photo-pessoal {
		width: 250px;
		height: 230px;
		border-radius: 5px;
		border: 1px solid #000;
		@media (max-width: 400px) {
			display: none;
		}
	}
	.container-sobre-text {
		margin-left: 50px;
		display: flex;
		flex-direction: column;
		gap: 15px;
		@media (max-width: 400px) {
			text-align: center;
			margin: 0;
		}
	}
	.name-sobre {
		font-size: 2.5vw;
		color: #053b50;
		@media (max-width: 400px) {
			font-size: 9vw;
		}
	}
	.paragrafo-sobre {
		font-size: 1.3vw;
		color: #176b87;
		@media (max-width: 400px) {
			font-size: 5vw;
			margin: 0 20px;
		}
	}
`;

export const Portfolio = styled.div`
	margin-top: 150px;
	@media (max-width: 400px) {
		margin-top: 100px;
	}
	.portfolio-apresentacao {
		font-size: 4vw;
		color: #053b50;
		text-align: center;
		margin-bottom: 80px;
		@media (max-width: 400px) {
			font-size: 8vw;
		}
	}
	.container-portfolio {
		display: grid;
		grid-template-columns: 350px 350px;
		align-self: center;
		margin: 0 0 0 350px;
		@media (max-width: 400px) {
			margin: 0;
			grid-template-columns: 400px;
		}
	}
	.box-portfolio {
		text-align: center;
		margin: 0 40px 30px 40px;
		@media (max-width: 400px) {
			margin: 20px 0 0 0;
		}
	}
	.video-portfolio {
		width: 100%;
	}
	.title-video {
		font-size: 2vw;
		@media (max-width: 400px) {
			font-size: 7vw;
		}
	}
	.btn-portfolio {
		padding: 10px 20px;
		border: 1px solid #000;
		border-radius: 5px;
		background: #053b50;
		@media (max-width: 400px) {
			padding: 10px 30px;
		}
	}
	.btn-portfolio a {
		font-size: 1vw;
		font-weight: 500;
		color: #fff;
		@media (max-width: 400px) {
			font-size: 5vw;
		}
	}
`;

export const Contatos = styled.div`
	margin-top: 100px;
	@media (max-width: 400px) {
		margin-top: 80px;
	}
	.apresentacao-contatos {
		font-size: 4vw;
		color: #053b50;
		text-align: center;
		margin-bottom: 80px;

		@media (max-width: 400px) {
			font-size: 10vw;
			margin-left: 90px;
			margin-bottom: 30px;
			border-bottom: 2px solid #053b50;
			width: 200px;
		}
	}
	.container-contatos {
		display: flex;
		justify-content: space-around;
		align-items: center;
		@media (max-width: 400px) {
			justify-content: center;
			flex-direction: column;
			gap: 30px;
		}
	}
	.links-redes-footer,
	.links-ancora-footer {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	.text-link {
		font-size: 2vw;
		color: #053b50;
		font-weight: 600;
		@media (max-width: 400px) {
			font-size: 7vw;
		}
	}
	.btn-redes-footer,
	.btn-ancora-footer {
		background: transparent;
	}
	.btn-redes-footer a,
	.btn-ancora-footer a {
		font-size: 1.5vw;
		color: #053b50;
		@media (max-width: 400px) {
			font-size: 5vw;
		}
	}
`;
