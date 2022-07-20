<script lang="ts">
    import { writable } from "svelte/store";

    const isLoading = writable(false);
    const isLoading2 = writable(false);

    const startLoading = async(bool: any) => {
        bool.set(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        bool.set(false);
    }
</script>

<main>
    <h1>Loading</h1>

    {#if $isLoading}
        <div class="loading"></div>
    {:else if $isLoading2}
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    {/if}

    <button on:click={() => startLoading(isLoading)}>Start Loading</button>
    <button on:click={() => startLoading(isLoading2)}>Start Loading 2</button>
</main>

<style>
    .loading {
        border: 16px solid #d3d3d3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    }
    .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: rgb(75, 132, 255) transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
    }
    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }

</style>