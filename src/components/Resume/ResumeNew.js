import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import pdf from '../../Assets/ChenYu_Geng.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const resumeLink =
	'https://raw.githubusercontent.com/ChenYu-G/personal_website/master/src/Assets/ChenYu_Geng.pdf'

function ResumeNew() {
	const [width, setWidth] = useState(1200)

	useEffect(() => {
		setWidth(window.innerWidth)
	}, [])

	return (
		<div>
			<Container fluid className='resume-section'>
				<Container>
					<h1 className='project-heading'>
						My <strong className='blue'>Resume </strong>
					</h1>
				</Container>
				<Particle />
				<Row style={{ justifyContent: 'center', position: 'relative' }}>
					<Button
						variant='primary'
						href={pdf}
						target='_blank'
						style={{ maxWidth: '250px' }}
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>

				<Row className='resume'>
					<Document file={resumeLink} className='d-flex justify-content-center'>
						<Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
					</Document>
				</Row>
			</Container>
		</div>
	)
}

export default ResumeNew
