<script context="module">
    import statenames from '../data/statenames.js';
    import requests from '../data/requests.js';
    export async function preload(page){
        const state = page.params["state"];
        if (statenames.find (s => s.abbreviation === state) === undefined){
            this.error( 404, 'state not found');
            console.log("should get an error");
            return;
        }
        const stats = await requests.stateStats(state); 
        return { state, stats};

    }
</script>
<script>
    import CovidStat from '../components/CovidStat.svelte';
    import CovidChart from '../components/CovidChart.svelte';
    
    
    export let state;
    export let stats;
</script>

<svelte:head>
    <title>
        Covid 19 - {state}.
    </title>
</svelte:head>
<div class="section header">
    <div class="container">
        <h1>
            Covid 19 - {state}.
        </h1>
    </div>
</div>


<CovidStat {...stats}></CovidStat>
<CovidChart></CovidChart>