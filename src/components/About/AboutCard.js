import React from 'react'
import Card from 'react-bootstrap/Card'

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am{' '}
						<span className='blue'>ChenYu Geng (Charlie) </span>
						from <span className='blue'> China.</span>
						<br />
						<br />I am currently studying{' '}
						<span className='blue'>
							Master of Science in Information Technology and Management
						</span>{' '}
						at DBU .
						<br />
						<br />I love web development with{' '}
						<span className='blue'> React.js</span>.
						<br />
						<br />I love <span className='blue'>Rock N Roll</span>, and my
						favorite band is <span className='blue'>The Beatles</span>.
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	)
}

export default AboutCard
