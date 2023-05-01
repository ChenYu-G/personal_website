import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					'Front-end Developer',
					'React Developer',
					'UX Designer',
					'ChatGPT Prompt Engineering',
					'MERN Stack Developer',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 55,
			}}
		/>
	)
}

export default Type
