<script>
    import { writable } from "svelte/store";

    const count = writable(0);
</script>

<main>
    <h1>Click Counter</h1>
    <p>{$count}</p>
    <button on:click={count.set($count+1)}>Increase</button>
    <button on:click={count.set($count-1)}>Decrease</button>
</main>

<style></style>