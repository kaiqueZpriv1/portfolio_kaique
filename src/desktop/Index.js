/** @format */

import React from "react";
import {
	VerticalSocial,
	ContainerPhoto,
	ContainerText,
	Header,
	Inicial,
	Main,
	Habilidades,
	Details,
	Sobre,
	Portfolio,
	Contatos,
} from "./Styled";
import {
	AiOutlineWhatsApp,
	AiOutlineInstagram,
	AiOutlineMail,
	AiOutlineGithub,
	AiOutlineHtml5,
	AiFillCopyrightCircle,
} from "react-icons/ai";
import logo from "./images/Logo.png";
import detalhe from "./images/details.png";
import { BiLogoCss3, BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { listPortfolio } from "./components/List";
function Index() {
	const linkSocial = {
		whatsapp:
			"https://api.whatsapp.com/send/?phone=933323486&text&type=phone_number&app_absent=0",
		instagram: "https://instagram.com/kaique_developer?igshid=YmMyMTA2M2Y=",
		email: "kakamelo141205@gmail.com",
		github: "https://github.com/kaiqueZpriv1",
	};
	return (
		<Main className='body-main'>
			<Details>
				<img src={detalhe} alt='detalhe' />
			</Details>
			<Header>
				<div className='container-header'>
					<div className='logo'>
						<img src={logo} alt='logoType' />
					</div>
					<button className='button-header'>
						<a href='/'>Contatos</a>
					</button>
				</div>
			</Header>
			<Inicial>
				<VerticalSocial>
					<div className='container-vertical'>
						<AiOutlineWhatsApp size={30} color='#fff' />
						<AiOutlineInstagram size={30} color='#fff' />
						<AiOutlineMail size={30} color='#fff' />
						<AiOutlineGithub size={30} color='#fff' />
					</div>
				</VerticalSocial>
				<div className='container-inicial'>
					<ContainerText>
						<h3 className='subtext'>Olá, eu sou</h3>
						<h1 className='name typing-animation'>Kaique Ferreira</h1>
						<p className='subtext-2'>Desenvolvedor Front-End</p>
						<div className='links-home'>
							<a className='btn-main light' href='/'>
								Sobre mim
							</a>
							<a className='btn-main dark' href='/'>
								Portfólio
							</a>
						</div>
					</ContainerText>
					<ContainerPhoto>
						<img
							className='photo-inicial'
							src='https://via.placeholder.com/300'
							alt='foto inicial'
						/>
					</ContainerPhoto>
				</div>
			</Inicial>
			<Habilidades>
				<div className='container-habilidades'>
					<button className='btn-habilidade'>
						<AiOutlineHtml5 className='icon-habilidade html' />
						<a href='/'>HTML</a>
					</button>
					<button className='btn-habilidade'>
						<BiLogoCss3 className='icon-habilidade css' />
						<a href='/'>CSS</a>
					</button>
					<button className='btn-habilidade'>
						<BiLogoJavascript className='icon-habilidade js' />
						<a href='/'>JAVASCRIPT</a>
					</button>
					<button className='btn-habilidade'>
						<BiLogoReact className='icon-habilidade react' />
						<a href='/'>REACT JS</a>
					</button>
				</div>
			</Habilidades>
			<Sobre>
				<div className='container-sobre'>
					<div className='photo-pessoal'></div>
					<div className='container-sobre-text'>
						<h3 className='name-sobre'>Kaique Ferreira</h3>
						<p className='paragrafo-sobre'>
							Tenho 17 anos e sou um desenvolvedor Front-End na cidade <br /> de
							São Paulo. Estou no meu último ano do ensino médio e <br /> busco
							me formar em Análise e Desenvolvimento de Sistemas.
							<br /> Meu primeiro contato com o desenvolvimento web foi em 2022,
							<br />
							quando comecei a estudar e realizar meus primeiros projetos em
							<br />
							HTML, CSS e JavaScript. Atualmente, estudo e desenvolvo projetos
							<br />
							como freelancer, buscando evoluir e ampliar meus conhecimentos
							<br /> em Front-End.
						</p>
					</div>
				</div>
			</Sobre>
			<Portfolio>
				<h3 className='portfolio-apresentacao'>Portfólio</h3>
				<div className='container-portfolio'>
					{listPortfolio.map((portfolio) => (
						<div className='box-portfolio' key={portfolio.id}>
							<video
								autoPlay
								width='100%'
								height='180'
								controls='controls'
								loop='loop'
								muted='muted'
								src={portfolio.video}></video>
							<h3 className='title-portfolio'>{portfolio.title}</h3>
							<button className='btn-portfolio'>
								<a href={portfolio.url}>Visitar</a>
							</button>
						</div>
					))}
				</div>
			</Portfolio>
			<Contatos>
				<h3 className='apresentacao-contatos'>Contatos</h3>
				<div className='container-contatos'>
					<div className='links-redes-footer'>
						<h3 className='text-link'>Redes Sociais</h3>
						<button className='btn-redes-footer'>
							<a target='_blank' rel='noreferrer' href={linkSocial.whatsapp}>
								WhatsApp
							</a>
						</button>
						<button className='btn-redes-footer'>
							<a target='_blank' rel='noreferrer' href={linkSocial.instagram}>
								Instagram
							</a>
						</button>
						<button className='btn-redes-footer'>
							<a target='_blank' rel='noreferrer' href={linkSocial.email}>
								E-mail
							</a>
						</button>
						<button className='btn-redes-footer'>
							<a target='_blank' rel='noreferrer' href={linkSocial.github}>
								Git-hub
							</a>
						</button>
					</div>
					<div className='links-ancora-footer'>
						<h3 className='text-link'>Atalhos</h3>
						<button className='btn-ancora-footer'>
							<a href={Inicial}>Inicio</a>
						</button>
						<button className='btn-ancora-footer'>
							<a href='/'>Sobre</a>
						</button>
						<button className='btn-ancora-footer'>
							<a href='/'>Portfólio</a>
						</button>
						<button className='btn-ancora-footer'>
							<a href='/'>Contatos</a>
						</button>
					</div>
				</div>
			</Contatos>
			<h3 className='text-footer'>
				2023
				<AiFillCopyrightCircle size={15} />
				<a href={linkSocial.github} target='_blank' rel='noreferrer'>
					@kaiqueZpriv1
				</a>
				All Right Reservad
			</h3>
		</Main>
	);
}

export default Index;
