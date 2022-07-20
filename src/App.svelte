<script lang="ts">	
	import {Navigator, Pages} from "./misc/navigator";

	// Components
	import Navigation from "./components/Navigation/index.svelte";

	// Pages
	import Home from "./pages/Home.svelte";
	import ClickCounter from "./pages/ClickCounter.svelte";
	import DynamicInputs from "./pages/DynamicInputs.svelte";
	import SystemInfo from "./pages/SystemInfo.svelte";
	import Weather from "./pages/Weather.svelte";
	import Loading from "./pages/Loading.svelte";

	const nav = Navigator.getInstance();
	const page = nav.page;
</script>

<main>
	<title>{$page}</title>

	<Navigation />

	<div class="Page-container">
		{#if $page === Pages.Home}
			<Home />
		{:else if $page === Pages.ClickCounter}
			<ClickCounter />
		{:else if $page === Pages.DynamicInputs}
			<DynamicInputs />
		{:else if $page === Pages.SystemInfo}
			<SystemInfo />
		{:else if $page === Pages.Weather}
			<Weather />
		{:else if $page === Pages.Loading}
			<Loading />
		{/if}
	</div>
</main>

<style>
	.Page-container {
		padding: 0 8px;
	}
</style>