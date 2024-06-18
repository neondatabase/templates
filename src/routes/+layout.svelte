<script lang="ts">
	import '@/src/app.css'
	import { navigating } from '$app/stores'
	import Seo from '@/src/components/SEO.svelte'
	import Detail from '@/src/components/Loading/Detail.svelte'
	import Listing from '@/src/components/Loading/Listing.svelte'
</script>

<Seo />

<div class="relative flex min-h-screen w-full flex-col bg-white pb-24">
	{#if Boolean($navigating) && $navigating?.to?.url.pathname.includes('/t/')}
		<Detail />
	{:else if Boolean($navigating) && $navigating?.from?.url.pathname !== '/' && $navigating?.to?.url.pathname === '/'}
		<Listing />
	{:else}
		<slot />
	{/if}
</div>
