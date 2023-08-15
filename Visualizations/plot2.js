(async () => {

  const mapData = await fetch(
    'https://code.highcharts.com/mapdata/countries/us/us-all-all.topo.json'
  ).then(response => response.json());

  Highcharts.getJSON(
    'https://raw.githubusercontent.com/anthonymoub/My_projects/main/percent_high_med_potential.json',
    function (data) {

      // Add state acronym for 
      
      mapData.objects.default.geometries.forEach(g => {
        const properties = g.properties;
        if (properties['hc-key']) {
          properties.name = properties.name + ', ' +
            properties['hc-key'].substr(3, 2).toUpperCase();
        }
      });

      document.getElementById('container').innerHTML = 'Rendering map...';

      // Create the map
      setTimeout(function () { // Otherwise innerHTML doesn't update
        Highcharts.mapChart('container', {
          chart: {
            map: mapData,
            height: '80%'
          },

          title: {
            text: 'Buildings with High Energy Potential',
            align: 'center'
          },

          accessibility: {
            description: 'Demo showing a large dataset.'
          },

          legend: {
            layout: 'vertical',
            align: 'right',
            margin: 0,
            backgroundColor: ( // theme
              Highcharts.defaultOptions &&
              Highcharts.defaultOptions.legend &&
              Highcharts.defaultOptions.legend.backgroundColor
            ) || 'rgba(255, 255, 255, 0.85)'
          },

          mapNavigation: {
            enabled: true
          },
          
        colorAxis: {
          min: 0,
          max: 50,
          tickInterval: 5,
          stops: [[0, '#E6F2F8'], [0.65, '#1C3E5F'], [1, '#0F1E36']],
          labels: {
            format: '{value}'
          }

          },

          plotOptions: {
            mapline: {
              showInLegend: false,
              enableMouseTracking: false
            }
          },

          series: [{
            data: data,
            joinBy: ['hc-key', 'code'],
            name: 'Buildings with High Energy Potential',
tooltip: {
  headerFormat: '<span style="font-size: 14px">{point.key}</span><br/>',
  pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.value:,.0f}%</b><br/>Number of buildings: {point.tot_build} buildings'
},
            borderWidth: 0.5,

            shadow: false,
            accessibility: {
              enabled: false
            }
          }, {
            type: 'mapline',
            name: 'State borders',
            color: 'white',
            shadow: false,
            borderWidth: 2,
            accessibility: {
              enabled: false
            }
          }]
        });
      }, 0);
    }
  );

})();