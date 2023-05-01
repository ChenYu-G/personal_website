import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
	DiGithubBadge,
	DiSass,
} from 'react-icons/di'

import {
	SiJavascript,
	SiNextdotjs,
	SiOpenai,
	SiTailwindcss,
	SiFigma,
} from 'react-icons/si'

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<SiJavascript />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiSass />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiReact />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiTailwindcss />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiOpenai />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiNextdotjs />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiGit />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<DiGithubBadge />
			</Col>
			<Col xs={4} md={2} className='tech-icons'>
				<SiFigma />
			</Col>
		</Row>
	)
}

export default Techstack
