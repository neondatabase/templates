import { join } from 'path'
import { redirect } from '@sveltejs/kit'
import { readFileSync, existsSync } from 'fs'
import { getTitle, toHTML } from '@/src/utils'
import { templates } from '@/src/data/templates'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, params }) => {
	const slug = params.slug

	const findTemplate = templates.find((i) => i.slug === params.slug)

	// If such a template data exists, otherwise redirect to home page
	if (!findTemplate) throw redirect(307, '/')

	const overviewPath = join(process.cwd(), 'markdowns', slug + '.md')
	if (existsSync(overviewPath)) {
		findTemplate['overview'] = await toHTML(readFileSync(overviewPath, 'utf8'))
	}

	// Create the template data
	const template = {
		blurImageURL: '',
		...findTemplate
	}

	// Create social shareable image URL
	const socialImage = new URL('/og', url.origin)
	if (template.name) socialImage.searchParams.set('text', template.name)
	if (template.description) socialImage.searchParams.set('description', template.description)
	if (template.demoUrl) socialImage.searchParams.set('image', (template.demoUrl))

	// Create SEO Object
	const seo = {
		title: template.name + ' - ' + getTitle(),
		description: template.description,
		domain: url.origin,
		pathname: url.pathname,
		image: socialImage.toString(),
		preloads: template?.demoUrl ? [{ url: (template.demoUrl), as: 'image' }] : []
	}

	return {
		seo,
		slug,
		template
	}
}
