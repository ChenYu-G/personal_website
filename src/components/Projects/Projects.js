import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import chenyugpt from '../../Assets/Projects/chenyugpt.png'
import restaurant from '../../Assets/Projects/restaurant.png'
import portfolio from '../../Assets/Projects/portfolio.png'
import travel_advisor from '../../Assets/Projects/travel_advisor.png'

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='blue'>Works </strong>
				</h1>
				<br />
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={travel_advisor}
							isBlog={false}
							title='Travel Advisor'
							description='A React application to make restaurant, hotels, and attractions recommmadition. Using Google Map Api to get and display the map, using rapid api (travel_advisor) to fetch all the data.'
							ghLink='https://github.com/ChenYu-G/travel-advisor'
							// demoLink='./'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={chenyugpt}
							isBlog={false}
							title='ChenyuGPT'
							description='A clone of ChatGPT, use React.js with openAI API.'
							ghLink='https://github.com/ChenYu-G/ChenyuGPT'
							// demoLink='./'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={restaurant}
							isBlog={false}
							title='Rock Restaurant'
							description='A UI project to build a website for a rock restaurant using React.js.'
							ghLink='https://github.com/ChenYu-G/Rock-Restaurant'
							// demoLink='./'
						/>
					</Col>

					<Col md={4} className='project-card'>
						<ProjectCard
							imgPath={portfolio}
							isBlog={false}
							title='Portfolio'
							description='Using Next.js to build a responsive portfolio website.'
							ghLink='https://github.com/ChenYu-G/next-simple-portifolio'
							// demoLink='./'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Projects
