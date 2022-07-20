<script lang="ts">
    export let pageName: string;
    export let currentPage: string;

    import {Navigator} from "../../misc/navigator";

    const navigator = Navigator.getInstance();

    const c = (data) => {
        navigator.ChangePage(data.target.innerText);
        currentPage = data.target.innerText;
    }
</script>

<button class="{currentPage === pageName ? 'selected' : 'default'}" on:click={c}>{pageName}</button>

<style>
    button {
        background: rgb(57, 57, 57);
        border: none;
        padding: 5px 10px;
        margin: 2px 5px;
        cursor: pointer;
        transition: 0.15s;
        
    }
    button:hover {
        background: rgb(42, 42, 42);
    }

    .default {
        color: rgb(200, 200, 200);
    }
	.selected {
		color: white;
	}
</style>