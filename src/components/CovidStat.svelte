<script>
    export let cases;
    export let deaths;
    export let recoverd;
    export let ventilator;
    export let hospitalized;
    export let icu;
    export let tested;
    export let updated;
</script>


<style>
    .columns{
        border: solid 1px black;        
        }
</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Cases: {cases}</h2>
            <h2 class="is-3 column">Deaths: {deaths}</h2>
            <h2 class="is-3 column">Recoverd: {recoverd}</h2>
            <h2 class="is-3 column">Updated: {updated}</h2>
        </div>
    </div>
    <div class="container">
        <div class="columns">
            <h2 class="is-3 column">Tested: {tested}</h2>
            <h2 class="is-3 column">Hospitalized: {hospitalized}</h2>
            <h2 class="is-3 column">Total ICU: {icu}</h2>
            <h2 class="is-3 column">Total Ventilator: {ventilator}</h2>
        </div>
    </div>
</div>