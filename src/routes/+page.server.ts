import type { Seo } from '@/src/classes'
import { templates } from '@/src/data/templates'
import { getDescription, getTitle } from '@/src/utils'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
	// Create SEO Object
	const seo: Seo = {
		title: getTitle(),
		description: getDescription(),
		domain: url.origin,
		pathname: url.pathname
	}

	let searchParam = url.searchParams.get('search')
	let keyNameParam = url.searchParams.get('keyName')

	try {
		if (keyNameParam?.length > 0) {
			keyNameParam = JSON.parse(decodeURIComponent(keyNameParam))
		}
	} catch (e) {
		// @ts-ignore
		console.log(e.message || e.toString())
		keyNameParam = null
	}

	let filteredTemplates = templates.map((i) => ({
		...i
	}))

	if (searchParam) {
		filteredTemplates = filteredTemplates.filter(
			(i) =>
				i.cms.map((i) => i.toLowerCase()).includes(searchParam.toLowerCase()) ||
				i.css.map((i) => i.toLowerCase()).includes(searchParam.toLowerCase()) ||
				i.type.map((i) => i.toLowerCase()).includes(searchParam.toLowerCase()) ||
				i.framework.map((i) => i.toLowerCase()).includes(searchParam.toLowerCase()) ||
				i.name.toLowerCase().includes(searchParam.toLowerCase()) ||
				i.description.includes(searchParam.toLowerCase())
		)
	}

	if (keyNameParam) {
		const keys = Object.keys(keyNameParam)
		keys.forEach((i) => {
			if (keyNameParam[i]?.length < 1) delete keyNameParam[i]
		})
		if (Object.keys(keyNameParam).length > 0) {
			filteredTemplates = filteredTemplates.filter((i) => {
				for (const j of Object.keys(keyNameParam)) {
					if (i[j] && i[j].length > 0) {
						for (const eachAttr of i[j]) {
							if (keyNameParam[j].includes(eachAttr)) {
								return true
							}
						}
					}
				}
				return false
			})
		}
	}

	return {
		seo,
		templates: filteredTemplates
	}
}
