<script>
    import { writable } from "svelte/store";

    const weather = writable(null);

    setTimeout(async() => {
        // Get Weather
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.50291988848408&lon=-0.1352498484495941&appid=dfca098621cc9ce52fe22728f5fa5dcb");
        const data = await response.json();
        weather.set(data);
    }, 100)
</script>

<main>
    <h1>Weather</h1>

    <h3>London, UK</h3>
    <p>Main {$weather?.weather[0]?.main}</p>
    <p>Description {$weather?.weather[0]?.description}</p>
    <p>Temp {$weather?.main?.temp} &deg;C</p>
    <p>Humidity {$weather?.main?.humidity}</p>
    <p>Pressure {$weather?.main?.pressure}</p>
    <p>Wind Speed {$weather?.wind?.speed}</p>
    <p>Wind Direction {$weather?.wind?.deg}</p>
    <p>Cloudiness {$weather?.clouds?.all}</p>
    <p>Sunrise {new Date($weather?.sys?.sunrise * 1000)}</p>
    <p>Sunset {new Date($weather?.sys?.sunset * 1000)}</p>

</main>

<style></style>