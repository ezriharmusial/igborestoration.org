<script>
	import { fade } from 'svelte/transition';
	import { user, username as storedUsername } from "~lib/gun";

	let username
	let password

	// Login
	function login() {
		user.auth(username, password, ({err}) => {
			if(err){
				alert(err)
			} else {
				user.get('alias').on(v => storedUsername.set(v))
			}
		})
	}

	// Register
	function register() {
		user.create(username, password, ({err}) => {
			if(err){
				alert(err)
			} else {
				login()
			}
		})
	}
</script>

<div in:fade>


	<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
		Sign in <span class="portrait:hidden">to converse with everybody</span>
	</h1>
	<form class="space-y-4 md:space-y-6">
		<div>
			<label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
			<input type="username" name="username" id="username" minlength="3" maxlength="16" bind:value={username} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required>
		</div>
		<div>
			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
			<input type="password" name="password" id="password" bind:value={password} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex items-start">
				<div class="flex items-center h-5">
					<input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
				</div>
				<div class="ml-3 text-sm">
					<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
				</div>
			</div>
			<!-- <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> -->
		</div>

		<div class="flex gap-4">
			<button type="button" on:click={register} class="w-full text-red-600 bg-red-50 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-red-800">Register</button>
			<button type="button" on:click={login} class="w-full text-white bg-red-600  hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
		</div>
		<!-- <p class="text-sm font-light text-gray-500 dark:text-gray-400">
			Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
		</p> -->
	</form>

</div>