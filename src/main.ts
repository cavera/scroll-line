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
	.to(
		'.secciones',
		{
			z: 0,
			duration: 5,
		},
		1
	)
	.from(
		'.content',
		{
			scale: 1.2,
			autoAlpha: 0,
			duration: 5,
		},
		1
	)
	.to(
		'#linea2',
		{
			duration: 1,
			css: {
				strokeDashoffset: 0,
			},
		},
		2
	)
	.to(
		'#linea3',
		{
			duration: 5,
			css: {
				strokeDashoffset: 0,
			},
		},
		3
	)
	.to(
		'.secciones',
		{
			y: '-=300vh',
			duration: 10,
		},
		3
	)
