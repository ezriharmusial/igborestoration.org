<script>
	import { ui, username} from "~lib/gun";
	import Login from "./Login.svelte";
	import Profile from "./Profile.svelte";
	import { fade } from "svelte/transition";
</script>

{#if $ui.dialogue}
<section class="fixed top-0 left-0 z-10 w-screen min-h-screen overflow-hidden" transition:fade>
	<button on:click={() => $ui.dialogue = false} title="Close Dialogue" class="absolute left-0 top-0 w-full h-full text-right text-black/40 hover:text-black/80 focus:text-black font-black text-xl bg-white/80 backdrop-blur dark:bg-gray-900">X</button>
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

		<div class="w-full relative bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<button on:click={() => $ui.dialogue = false} title="Close Dialogue" class="absolute right-4 top-4 text-black/40 hover:text-black/80 focus:text-black font-black text-xl">X</button>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				{#if !$username}
				<Login />
				{:else}
				<Profile />
				{/if}
			</div>
		</div>
	</div>
</section>
{/if}