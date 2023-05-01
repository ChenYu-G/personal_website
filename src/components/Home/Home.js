import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.jpg'
import Particle from '../Particle'
import Tilt from 'react-parallax-tilt'
import Type from './Type'

function Home() {
	return (
		<section>
			<Container fluid className='home-section' id='home'>
				<Particle />
				<Container className='home-content'>
					<Row>
						<Col md={7} className='home-header'>
							<h1 style={{ paddingBottom: 15 }} className='heading'>
								Hello 你好
							</h1>

							<h1 className='heading-name'>
								I'M
								<strong className='main-name'> ChenYu Geng</strong>
							</h1>

							<div style={{ padding: 45, textAlign: 'left' }}>
								<h1>I AM A</h1>
								<Type />
							</div>
						</Col>
						<Col md={4} className='myAvtar'>
							<Tilt>
								<img src={myImg} className='img-fluid' alt='avatar' />
							</Tilt>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	)
}

export default Home
