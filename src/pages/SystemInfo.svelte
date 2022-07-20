<script>
    import { writable } from "svelte/store";

    const ipAddress = writable(null);

    setTimeout(async() => {
        // Set Ip Address
        await fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => {
                ipAddress.set(data.ip);
            });
    }, 0)
</script>

<main>
    <h1>SystemInfo</h1>

    <h3>Basic Info</h3>
    <p>userAgent: {navigator.userAgent}</p>
    <p>cookiesEnabled: {navigator.cookieEnabled}</p>
    <p>browserName: {navigator.appName}</p>
    <p>browserLang: {navigator.language}</p>
    <p>browserVersion: {navigator.appVersion}</p>
    <p>browserPlatform: {navigator.platform}</p>
    <p>browserOnline: {navigator.onLine}</p>

    <h3>Broser Window</h3>
    <!-- svelte-ignore missing-declaration -->
    <p>screenWidth: {screen.width}</p>
    <!-- svelte-ignore missing-declaration -->
    <p>screenHeight: {screen.height}</p>
    <!-- svelte-ignore missing-declaration -->
    <p>screenColorDepth: {screen.colorDepth}</p>
    <!-- svelte-ignore missing-declaration -->
    <p>screenAvailWidth: {screen.availWidth}</p>
    <!-- svelte-ignore missing-declaration -->
    <p>screenAvailHeight: {screen.availHeight}</p>
    <!-- svelte-ignore missing-declaration -->
    <p>screenPixelDepth: {screen.pixelDepth}</p>

    <h3>Ip Address</h3>
    <p>ipAddress: {$ipAddress}</p>
</main>

<style></style>