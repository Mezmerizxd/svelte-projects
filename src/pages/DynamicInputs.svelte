<script>
    import { writable } from "svelte/store";

    const input1 = writable(null);
    const input2 = writable(null);

    const inputNum1 = writable(0);
    const inputNum2 = writable(0);
</script>

<main>
    <h1>Dynamic Inputs</h1>

    <input type="text" name="input1" id="input1" placeholder="Input 1" bind:value={$input1}>
    <input type="text" name="input2" id="input2" placeholder="Input 2" bind:value={$input2}>
    <br />
    <input type="number" name="inputNum1" id="inputNum1" bind:value={$inputNum1}>
    x
    <input type="number" name="inputNum2" id="inputNum2" bind:value={$inputNum2}>

    <h3>Output</h3>
    <p>Input 1: {$input1}</p>
    <p>Input 2: {$input2}</p>
    <p>Maths: {$inputNum1 * $inputNum2}</p>
</main>

<style></style>