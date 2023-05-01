import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
	return (
		<Container fluid className='home-about-section' id='about'>
			<Container>
				<Row>
					<Col md={12} className='home-about-social'>
						<h1>Connect ME</h1>
						<p>
							Feel free to <span className='blue'>connect </span> me with
						</p>
						<ul className='home-about-social-links'>
							<li className='social-icons'>
								<a
									href='https://github.com/ChenYu-G'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<AiFillGithub />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='https://www.linkedin.com/in/chenyu-geng-6bb2ba241/'
									target='_blank'
									rel='noreferrer'
									className='icon-colour  home-social-icons'
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className='social-icons'>
								<a
									href='mailto:cgeng.charlie@gmail.com'
									target='_blank'
									rel='noreferrer'
									className='icon-colour home-social-icons'
								>
									<AiOutlineMail />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}
export default Home2
