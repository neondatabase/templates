type Template = {
	name: string
	slug: string
	css: string[]
	cms: string[]
	type: string[]
	overview?: string
	githubUrl: string
	publisher: string
	framework: string[]
	description: string
}

export const templates: Template[] = [
	{
		name: 'Hybrid Search',
		slug: 'hybrid-search',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js Hybrid Search built with OpenAI.',
		framework: ['Next.js'],
		type: ['Starter'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/hybrid-search-nextjs'
	},
	{
		name: 'Chat with PDF (OpenAI + LlamaIndex)',
		slug: 'chat-with-pdf-llamaindex',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js Chat with PDF chatbot built with OpenAI and LlamaIndex.',
		framework: ['Next.js', 'LlamaIndex'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/llamaindex/chat-with-pdf-nextjs'
	},
	{
		name: 'AI Chatbot (OpenAI + LlamaIndex)',
		slug: 'ai-chatbot-llamaindex',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js AI chatbot built with OpenAI and LlamaIndex.',
		framework: ['Next.js', 'LlamaIndex'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/llamaindex/chatbot-nextjs'
	},
	{
		name: 'RAG Chatbot (OpenAI + LlamaIndex)',
		slug: 'rag-chatbot-llamaindex',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js RAG chatbot built with OpenAI and LlamaIndex.',
		framework: ['Next.js', 'LlamaIndex'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/llamaindex/rag-nextjs'
	},
	{
		name: 'Semantic Search Chatbot (OpenAI + LlamaIndex)',
		slug: 'semantic-search-chatbot-llamaindex',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js Semantic Search chatbot built with OpenAI and LlamaIndex.',
		framework: ['Next.js', 'LlamaIndex'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/llamaindex/semantic-search-nextjs'
	},
	{
		name: 'Reverse Image Search (OpenAI + LlamaIndex)',
		slug: 'reverse-image-search-llamaindex',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js Reverse Image Search Engine built with OpenAI and LlamaIndex.',
		framework: ['Next.js', 'LlamaIndex'],
		type: ['Starter', 'Engine'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/llamaindex/reverse-image-search-nextjs'
	},
	{
		name: 'Chat with PDF (OpenAI + LangChain)',
		slug: 'chat-with-pdf-langchain',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js Chat with PDF chatbot built with OpenAI and LangChain.',
		framework: ['Next.js', 'LangChain'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/langchain/chat-with-pdf-nextjs'
	},
	{
		name: 'AI Chatbot (OpenAI + LangChain)',
		slug: 'ai-chatbot-langchain',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js AI chatbot built with OpenAI and LangChain.',
		framework: ['Next.js', 'LangChain'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/langchain/chatbot-nextjs'
	},
	{
		name: 'RAG Chatbot (OpenAI + LangChain)',
		slug: 'rag-chatbot-langchain',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js RAG chatbot built with OpenAI and LangChain.',
		framework: ['Next.js', 'LangChain'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/langchain/rag-nextjs'
	},
	{
		name: 'Semantic Search Chatbot (OpenAI + LangChain)',
		slug: 'semantic-search-chatbot-langchain',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js Semantic Search chatbot built with OpenAI and LangChain.',
		framework: ['Next.js', 'LangChain'],
		type: ['Starter', 'Chatbot'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/langchain/semantic-search-nextjs'
	},
	{
		name: 'Reverse Image Search (OpenAI + LangChain)',
		slug: 'reverse-image-search-langchain',
		publisher: 'Neon',
		description: 'A full-featured, hackable Next.js Reverse Image Search Engine built with OpenAI and LangChain.',
		framework: ['Next.js', 'LangChain'],
		type: ['Starter', 'Engine'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/ai/langchain/reverse-image-search-nextjs'
	},
	{
		name: 'Astro Boilerplate',
		slug: 'astro-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Astro and Neon in seconds.',
		framework: ['Astro'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-astro'
	},
	{
		name: 'Express Boilerplate',
		slug: 'express-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Express and Neon in seconds.',
		framework: ['Express'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-express'
	},
	{
		name: 'Fastify Boilerplate',
		slug: 'fastify-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Fastify and Neon in seconds.',
		framework: ['Fastify'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-fastify'
	},
	{
		name: 'Hono Boilerplate',
		slug: 'hono-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Hono and Neon in seconds.',
		framework: ['Hono'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-hono'
	},
	{
		name: 'Nest.js Boilerplate',
		slug: 'nestjs-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Nest.js and Neon in seconds.',
		framework: ['Nest.js'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-nestjs'
	},
	{
		name: 'Next.js Boilerplate',
		slug: 'nextjs-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Next.js and Neon in seconds.',
		framework: ['Next.js'],
		type: ['Starter'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-nextjs-get-server-side-props'
	},
	{
		name: 'Node.js Boilerplate',
		slug: 'nodejs-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Node.js and Neon in seconds.',
		framework: ['Node.js'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-nodejs'
	},
	{
		name: 'Python asyncpg Boilerplate',
		slug: 'python-asyncpg-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Python asyncpg and Neon in seconds.',
		framework: ['Python'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-python-asyncpg'
	},
	{
		name: 'Python psycopg2 Boilerplate',
		slug: 'python-psycopg2-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Python psycopg2 and Neon in seconds.',
		framework: ['Python'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-python-psycopg2'
	},
	{
		name: 'Remix Boilerplate',
		slug: 'remix-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Remix and Neon in seconds.',
		framework: ['Remix'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-remix'
	},
	{
		name: 'Solid Start Boilerplate',
		slug: 'solidstart-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Solid Start and Neon in seconds.',
		framework: ['Solid Start'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-solid-start'
	},
	{
		name: 'SvelteKit Boilerplate',
		slug: 'sveltekit-boilerplate',
		publisher: 'Neon',
		description: 'Get started with SvelteKit and Neon in seconds.',
		framework: ['SvelteKit'],
		type: ['Starter'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-sveltekit'
	},
	{
		name: 'Waku Boilerplate',
		slug: 'waku-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Waku and Neon in seconds.',
		framework: ['Waku'],
		type: ['Starter'],
		css: ['TailwindCSS'],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-waku'
	},
	{
		name: 'Angular Boilerplate',
		slug: 'angular-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Angular and Neon in seconds.',
		framework: ['Angular'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-angular'
	},
	{
		name: 'Wasp Boilerplate',
		slug: 'wasp-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Wasp and Neon in seconds.',
		framework: ['Wasp'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-wasp'
	},
	{
		name: 'Analog Boilerplate',
		slug: 'analog-boilerplate',
		publisher: 'Neon',
		description: 'Get started with Analog and Neon in seconds.',
		framework: ['Analog'],
		type: ['Starter'],
		css: [],
		cms: [],
		githubUrl: 'https://github.com/neondatabase/examples/tree/main/with-analog'
	}
]
