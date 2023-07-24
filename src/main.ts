import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import '../styles/styles.scss'

function setPathLength(pathId: string) {
	const path: SVGGeometryElement = document.getElementById(pathId)
	const length = path.getTotalLength().toString()
	path.style.strokeDasharray = length
	path.style.strokeDashoffset = length
	console.log(path.style.strokeDashoffset)
}

setPathLength('linea1')
setPathLength('linea2')
setPathLength('linea3')

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.activador',
		scrub: true,
		start: '200px 200px',
		end: '100% 50%',
		// markers: true,
	},
})

tl.to(
	'#linea1',
	{
		duration: 2,
		css: {
			strokeDashoffset: 0,
		},
	},
	0
)
	.add('zoomout')
	.to(
		'.secciones',
		{
			z: 0,
			duration: 1,
		},
		'zoomout'
	)
	.from(
		'.about',
		{
			scale: 1.2,
			autoAlpha: 0,
			duration: 1,
		},
		'zoomout'
	)
	.to(
		'#linea2',
		{
			duration: 1,
			css: {
				strokeDashoffset: 0,
			},
		},
		'zoomout'
	)
	.add('scroll')
	.to(
		'#linea3',
		{
			duration: 10,
			css: {
				strokeDashoffset: 0,
			},
		},
		'scroll'
	)
	.to(
		'.secciones',
		{
			y: '-=550vh',
			duration: 10,
		},
		'scroll'
	)
