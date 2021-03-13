import format from './format';
import moment from  'moment';

function parseStats (data) {
    return{
        cases:format.number(data.positive),
        deaths:format.number(data.death),
        recovered:format.number(data.recovered),
        ventilator:format.number(data.onVentilatorCurrently),
        hospitalized:format.number(data.hospitalized),
        icu:format.number(data.inIcuCurrently),
        tested:format.number(data.totalTestResults),
        updated:moment(data.lastModified).format('LLLL')
    }
}

function usStats(data){
    const [usStatRaw] = data;
    return parseStats(usStatRaw);    
}
function stateStats (state, data){
    const stateRawdata = data.find(s => s.state === state);
    return parseStats(stateRawdata);
}

function parseHistoric(historicData){
    return [
        {
            label:'Cases',
            key: 'positive',
            color: 'rgb(100,0,200)'
        },
        {
            label:'Recoverd',
            key: 'recoverd',
            color: 'rgb(100,100,200)'
        },
        {
            label:'Total Tested',
            key: 'totalTestResults',
            color: 'rgb(10,30,100)'
        },
        {
            label:'Hospitalized',
            key: 'hospitalizedCurrently',
            color: 'rgb(20,100,230)'
        },
        {
            label:'Deaths',
            key: 'death',
            color: 'rgb(255,99,130)'
        }
    ].reduce((prev, next) => {
        if ( historicData.filter((d) => d[next.key] !== null).length > 4)
        {
            prev.push(parseChart(historicData, next.key, next.label, next.color));
        }
        return prev;

    }, []);
}


function historicUS(historicData){
    return parseHistoric(historicData);    
}

function parseChart(historicData, key, label, color){
    const chartdata = historicData.map( data => {
        return {
            x: moment(data.date, 'YYYYMMDD'), 
            y: data[key] || 0,
        }
    });

    return {
        label,
        data: chartdata,
        fill: false,
        borderColor: color
    }

}

export default {
    usStats,
    stateStats,
    historicUS,
}