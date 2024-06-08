<script>
	import { username, ui } from './../../lib/gun.js';

	function login() {
		// username.set(`Nwa Ibgo`);
		// avatar.set( createAvatar(initials, {
		// 	size: 48,
		// 	radius: 50,
		// 	fontWeight: 400,
		// 	backgroundColor: "#F87171",
		// 	backgroundType: "gradientLinear",
		// 	seed: 'Igbo Restoration',
		// 	// ... other options
		// }));

		$ui.dialogue = true;
	}
</script>

{#if $username === ''}
<button class="text-white bg-red-600  hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" on:click={login}>Join us</button>
{:else}
<div class="flex items-center mr-4">
	<button type="button" on:click={() => $ui.dialogue = !ui.dialogue } class="w-8 h-8 my-2 rounded-full overflow-hidden aspect-auto object-fill text-white" >
		<img class="aspect-square" src={`https://api.dicebear.com/8.x/initials/svg?backgroundColor=F87171&backgroundType=gradientLinear&fontWeight=400&radius=50&seed=${$username}`} alt="avatar" />'
	</button>
</div>
{/if}