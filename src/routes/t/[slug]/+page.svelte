<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data

	$: template = data?.template
	$: name = template?.name
	$: description = template?.description
	$: framework = template?.framework
	$: type = template?.type
	$: css = template?.css
	$: cms = template?.cms
	$: publisher = template?.publisher
	$: overview = template?.overview
	$: githubUrl = template?.githubUrl
</script>

<div class="flex w-full flex-col items-center">
	<div class="z-10 flex w-full flex-row flex-wrap gap-10 px-10 md:flex-nowrap lg:max-w-6xl xl:px-0">
		<div class="mt-24 flex w-full flex-col md:w-1/3">
			<a aria-label="Back To Homepage" href="/" class="max-w-max border-b pb-0.5 text-black/50 hover:text-black"> &#x2190; Back To Templates </a>
			{#if name && name.length > 0}
				<h1 class="mt-8 text-2xl font-bold text-black md:text-4xl">
					{name}
				</h1>
			{/if}
			{#if description && description.length > 0}
				<h1 class="mt-8 text-lg font-light text-black md:text-xl">
					{description}
				</h1>
			{/if}
			{#if framework && framework.length > 0}
				<div class="mt-8 flex flex-row items-center justify-between border-t pt-2">
					<span class="text-sm font-semibold text-gray-600"> Framework </span>
					<span class="text-gray-600">
						{framework.map((i) => i.trim()).join(', ')}
					</span>
				</div>
			{/if}
			{#if type && type.length > 0}
				<div class="mt-4 flex flex-row items-center justify-between border-t pt-2">
					<span class="text-sm font-semibold text-gray-600"> Use Case </span>
					<span class="text-gray-600">
						{type.map((i) => i.trim()).join(', ')}
					</span>
				</div>
			{/if}
			{#if css && css.length > 0}
				<div class="mt-4 flex flex-row items-center justify-between border-t pt-2">
					<span class="text-sm font-semibold text-gray-600"> CSS </span>
					<span class="text-gray-600">
						{css.map((i) => i.trim()).join(', ')}
					</span>
				</div>
			{/if}
			{#if cms && cms.length > 0}
				<div class="mt-4 flex flex-row items-center justify-between border-t pt-2">
					<span class="text-sm font-semibold text-gray-600"> CMS </span>
					<span class="text-gray-600">
						{cms.map((i) => i.trim()).join(', ')}
					</span>
				</div>
			{/if}
			{#if publisher && publisher.length > 0}
				<div class="mt-4 flex flex-row items-center justify-between border-t pt-2">
					<span class="text-sm font-semibold text-gray-600"> Publisher </span>
					<span class="text-gray-600">
						{publisher}
					</span>
				</div>
			{/if}
			<div class="flex w-full flex-col lg:flex-row justify-between">
				{#if githubUrl && githubUrl.length > 0}
					<div class="mt-8 flex flex-col gap-y-8">
						<a href={`https://vercel.com/new/clone?repository-url=${githubUrl}&env=DATABASE_URL`}>
							<img src="https://vercel.com/button" alt="Deploy with Vercel" loading="lazy" />
						</a>
						<a href={`https://app.netlify.com/start/deploy?repository=${githubUrl}#DATABASE_URL`}>
							<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" loading="lazy" />
						</a>
						<a href={`https://render.com/deploy?repo=${githubUrl}#DATABASE_URL`}>
							<img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" loading="lazy" />
						</a>
					</div>
					<a
						target="_blank"
						href={githubUrl}
						aria-label="View Repo URL"
						class="mt-8 rounded border h-max bg-white px-6 py-2 text-center text-sm duration-300 hover:border-black sm:w-auto"
					>
						View Repo
					</a>
				{/if}
			</div>
		</div>
		<div class="flex w-full flex-col md:w-2/3 md:border-l md:pl-10">
			{#if name?.length > 0}
				<div class="bg-[#0b0c10] px-5 py-3 md:mt-24">
					<img alt={'Thumbnail - ' + name} src={`https://neon.tech/docs/og?title=${btoa(name)}`} class="aspect-video w-full rounded object-cover shadow" />
				</div>
			{/if}
			{#if overview && overview.length > 0}
				<div class="prose my-8">
					{@html overview}
				</div>
			{/if}
		</div>
	</div>
</div>
