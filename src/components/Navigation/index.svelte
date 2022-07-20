<script>
    import {Navigator, Pages} from "../../misc/navigator";

    import Button from "./Button.svelte";

    const navigator = Navigator.getInstance();
    let currentPage = navigator.GetPage();
</script>

<main>
    <!-- Could be cleaner but this will do -->
    <div class="Top-navigation"> 
        <Button pageName={Pages.Home} currentPage={currentPage} />
        <Button pageName={Pages.ClickCounter} currentPage={currentPage} />
        <Button pageName={Pages.DynamicInputs} currentPage={currentPage} />
        <Button pageName={Pages.SystemInfo} currentPage={currentPage} />
        <Button pageName={Pages.Weather} currentPage={currentPage} />
        <Button pageName={Pages.Loading} currentPage={currentPage} />
    </div>
</main>

<style>
    .Top-navigation {
        background: rgb(57, 57, 57);
        height: 40px;
        display: flex;
    }

</style>