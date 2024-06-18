<script lang="ts">
	class Item {
		name: string
		slug: string
		publisher: string
		description: string
		blurDataURL?: string
	}

	export let loading: Boolean = false
	export let item: Item | null = null
	export let index: number | null = null
</script>

{#if !loading}
	{#if item}
		<a href={'/t/' + item.slug} class="group flex flex-col overflow-hidden rounded bg-white shadow-md duration-300 hover:shadow-2xl md:max-w-sm">
			<div class="relative bg-[#0b0c10] px-4 py-2">
				{#if item.publisher === 'Neon'}
					<div class="absolute bottom-0 right-0 z-50 m-2 rounded-full bg-white/50 p-2">
						<img src="https://cdn.svgporn.com/logos/neon-icon.svg" class="size-[20px]" loading="lazy" alt="Neon" />
					</div>
				{/if}
				<img
					alt={item.name}
					loading={index && index < 1 ? 'eager' : 'lazy'}
					fetchpriority={index && index < 1 ? 'high' : 'low'}
					src={`https://neon.tech/docs/og?title=${btoa(item.name)}`}
					class="aspect-video w-full transform-gpu object-cover transition will-change-auto"
				/>
			</div>
			<div class="flex flex-col p-3">
				<div class="text-md font-bold text-black">{item.name}</div>
				<p class="mt-1 line-clamp-3 w-full text-sm text-gray-500">
					{item.description}
				</p>
			</div>
			<div class="mt-auto flex flex-row items-center justify-between p-3">
				<div class="flex flex-row items-center text-sm font-light text-gray-500 gap-x-1">
					<span>by</span>
					{#if item.publisher === 'Neon'}
						<img src="https://cdn.svgporn.com/logos/neon-icon.svg" class="size-[12px]" loading="lazy" alt="Neon" />
					{/if}
					<span>{item.publisher}</span>
				</div>
				<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] fill-gray-500 group-hover:fill-black">
					<path
						d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
					/>
				</svg>
			</div>
		</a>
	{/if}
{:else}
	<div class="group flex flex-col overflow-hidden rounded bg-white shadow-md duration-300 hover:shadow-2xl md:max-w-sm">
		<div class="aspect-video w-full transform-gpu animate-pulse bg-gray-400 object-cover transition will-change-auto" />
		<div class="flex flex-col p-3">
			<div class="text-md w-full animate-pulse bg-gray-400 py-1 font-bold text-black" />
			<div class="text-md mt-2 w-full animate-pulse bg-gray-400 py-1 font-bold text-black" />
		</div>
		<div class="mt-auto flex flex-row items-center justify-between p-3">
			<div class="flex flex-row items-center space-x-3 text-sm font-light text-gray-500">
				<span>by</span>
				<div class="w-[30px] animate-pulse bg-gray-400 py-1" />
			</div>
			<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px] fill-gray-500 group-hover:fill-black">
				<path
					d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
				/>
			</svg>
		</div>
	</div>
{/if}
