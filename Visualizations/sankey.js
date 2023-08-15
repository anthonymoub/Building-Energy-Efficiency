Highcharts.chart('sankey', {

    title: {
        text: 'Total Site Energy Use of Different Fuel Types (GJ)'
    },
  
  tooltip: {
        pointFormatter: function() {
            return this.from + ' to ' + this.to + ': ' + this.options.label;
        }
    },
      plotOptions: {
        sankey: {
            colors: ['#519DF9', '#492CAC', '#4F3DB9', '#687BB1', '#99E1DC', '#C55CF5']
        }
    },

    series: [{
        keys: ['from', 'to', 'weight', 'label'],
        data: [
   
       ['Electricity', 'Electric', 661531101.14, '661.53 M'],
       ['Electricity', 'Geothermal', 19197402.02, '19.20 M'],
       ['Electricity', 'Heat Pump', 547818477.19, '547.82 M'],
       ['Electricity', 'Solar', 13111774.14, '13.11 M'],
       ['Gas', 'Baseboard', 289374752.05, '289.37 M'],
       ['Gas', 'Convection', 11452586.81, '11.45 M'],
       ['Gas', 'Forced Air', 4296021244.95, '4296.02 M'],
       ['Gas', 'Gravity', 39202331.94, '39.20 M'],
       ['Gas', 'Hot Water', 1495332185.75, '1495.33 M'],
       ['Gas', 'Steam', 59739209.66, '59.74 M'],
       ['Gas', 'Vent', 31939896.56, '31.94 M'],
       ['Oil', 'Baseboard', 240861851.66, '240.86 M'],
       ['Oil', 'Convection', 12265730.45, '12.27 M'],
       ['Oil', 'Forced Air', 2763631310.16, '2763.63 M'],
       ['Oil', 'Gravity', 76631946.76, '76.63 M'],
       ['Oil', 'Hot Water', 1495340730.71, '1495.34 M'],
       ['Oil', 'Steam', 209228519.84, '209.23 M'],
       ['Oil', 'Vent', 4134929.89, '4.13 M'],
       ['Wood', 'Wood Burning', 21273821.68, '21.27 M']],
        type: 'sankey',
        name: ''
    }]

});