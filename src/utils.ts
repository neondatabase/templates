import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export async function toHTML(md: string) {
	if (!md || md.length < 1) return ''
	return await unified().use(remarkParse).use(remarkRehype).use(rehypeSanitize).use(rehypeStringify).processSync(md).toString()
}

export function getTitle(val?: string) {
	return val ?? 'Find your Template - Neon'
}

export function getDescription(val?: string) {
	return val ?? 'Jumpstart your app development process with pre-built solutions from Neon and our community.'
}

export function getDomain(val?: string) {
	return val ?? 'https://neon.tech/templates'
}
