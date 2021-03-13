<script context="module">
    import requests from "../data/requests";

    export async  function preload(){
        try {
            const usStats = await requests.usStats();
            
            const historicUS = await requests.historicUS();

            console.log(historicUS);

            return {usStats, historicUS};

            
        } catch (error) {
            console.log(error);            
        }
    }
</script>

<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    export let usStats;
    console.log(usStats, "usStats");
</script>
<svelte:head>
    <title>
        Covid 19 us tracker.
    </title>
</svelte:head>
<div class="section header">
    <div class="container">
        <h1>
            Covid US Tracker.
        </h1>
    </div>
</div>
<CovidStat {...usStats}></CovidStat>
<CovidChart></CovidChart>
<TableContainer></TableContainer>

