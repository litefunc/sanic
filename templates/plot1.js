<script>
//$(document).ready(function(){
  //var i = 1;
  //$("#div7 input").click(function(){
  {% for l in d.L %}
    $("#div9").append('<div id = graphdiv'+{{l[0]|safe}}+'></div>');
    //alert(i);

    new Dygraph(document.getElementById("graphdiv"+{{l[0]|safe}}),
              {{l[2]|safe}},
              {
                labels: {{l[3]|safe}},
                //title:{{l[6]|safe}},
                axes: {
                    x: {
                        valueFormatter: Dygraph.dateString_,
                        axisLabelFormatter: Dygraph.dateAxisFormatter,
                        ticker: Dygraph.dateTicker
                    }
              },
              //showRangeSelector: true,
              legend: 'follow',
              labelsSeparateLines:true,
              connectSeparatedPoints:false
              });
    //$('body').append('<div id = graphdiv'+i+'></div>');

              //new Dygraph(document.getElementById("graphdiv"+i),
              //  [
              //    [1,10,100],
              //    [2,20,80],
              //    [3,50,60],
              //    [4,70,80]
              //  ],
              //  {
              //    labels: [ "x", "A", "B" ],
              //    showRangeSelector: true,
              //    valueRange: [20, 100],
              //    showRoller: true,
              //    rollPeriod: 15
              //  });
      //$('#graphdiv'+i).append(i);
      //i+=1;

      {% endfor %}
      $( function(){
        $('#tabs a[href="#tabs-3"]').click();
        //  alert('#tabs a[href='+{{d.tab|safe}}+']');
        //$('#tabs a[href='+{{d.tab|safe}}+']').click();
      });
  //});  
//});  
  
</script>

