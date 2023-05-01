import React, { useState, useEffect } from 'react'
import Preloader from '../src/components/Pre'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/ResumeNew'
import Footer1 from './components/Footer1'

import './style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	const [load, updateLoad] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoad(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div>
			<Preloader load={load} />
			<Home />
			<About />
			<Projects />
			<Resume />
			<Footer1 />
		</div>
	)
}

export default App
