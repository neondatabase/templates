type Template = {
	name: string
	slug: string
	templateImageUrl: string
	overview?: string
	githubUrl: string
	publisher: string
	description: string
	css: string[]
	cms: string[]
	type: string[]
	framework: string[]
}

export const templates: Template[] = [
	{
		name: 'Node.js Boilerplate',
		slug: 'nodejs-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Node.js and Neon in seconds.',
		framework: ['Node.js'],
		templateImageUrl: 'https://neon.tech/images/social-previews/index.jpg',
		type: ['Starter'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-nextjs-server-components'
	}
]
