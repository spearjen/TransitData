// make the list
var graphNames = ["Total Federal Funding", "State of Good Repair Funding", "Split Funding","Total Funding vs. Ridership","Total Sales vs. Ridership", "Rail vs. Ridership","Bus vs. Ridership","Funding per State","Transit Data"];

var graphsArray = ["<div class = 'changeViz'> <p>Click through menu for state specific funding numbers</p> <div class='tableauPlaceholder' id='viz1606632863209' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Fe&#47;FederalFundingperState&#47;FederalFunding&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='FederalFundingperState&#47;FederalFunding' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Fe&#47;FederalFundingperState&#47;FederalFunding&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606632863209');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> </div>",
"<div class = 'changeViz'> <p>Year over year federal commitment to public transportation</p> <div class='tableauPlaceholder' id='viz1606633731938' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;To&#47;TotalFederalFunding&#47;Total&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='TotalFederalFunding&#47;Total' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;To&#47;TotalFederalFunding&#47;Total&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633731938');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> </div>",
"<div class = 'changeViz'> <p>State of Good Repair funding is focused on fixed rail projects</p> <div class='tableauPlaceholder' id='viz1606633758908' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;St&#47;StateofGoodRepairFunding&#47;StateofGoodRepair&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='StateofGoodRepairFunding&#47;StateofGoodRepair' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;St&#47;StateofGoodRepairFunding&#47;StateofGoodRepair&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633758908');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> </div>",
"<div class = 'changeViz'> <p>Ridership numbers by category compared with total volume car sales year over year</p> <div class='tableauPlaceholder' id='viz1606633530052' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sa&#47;SalesvsRidership&#47;SalesvsRidership&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='SalesvsRidership&#47;SalesvsRidership' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sa&#47;SalesvsRidership&#47;SalesvsRidership&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633530052');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> </div>",
"<div class = 'changeViz'> <p>Rail ridership year over year compared with rail funding programs</p> <div class='tableauPlaceholder' id='viz1606633581123' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ra&#47;RailvsRidership&#47;RailvsRidership&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='RailvsRidership&#47;RailvsRidership' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ra&#47;RailvsRidership&#47;RailvsRidership&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633581123');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> </div>",
"<div class = 'changeViz'> <p>Bus ridership year over year compared with bus funding programs</p> <div class='tableauPlaceholder' id='viz1606633639756' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bu&#47;BusvsRidership&#47;BusvsRidership&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='BusvsRidership&#47;BusvsRidership' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bu&#47;BusvsRidership&#47;BusvsRidership&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633639756');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> </div>",
"<div class = 'changeViz'> <p>Total Ridership(Bus,Rail) year over year compared with total federal funding</p> <div class='tableauPlaceholder' id='viz1606633560235' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;To&#47;TotalvsRidership&#47;TotalvsRidership&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='TotalvsRidership&#47;TotalvsRidership' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;To&#47;TotalvsRidership&#47;TotalvsRidership&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633560235');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement) </div>;                </script>",
"<div class = 'changeViz'> <p>Summary of how federal funding programs change over time</p> <div class='tableauPlaceholder' id='viz1606633674251' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ca&#47;CategorySplitFunding&#47;FundingCategory&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='CategorySplitFunding&#47;FundingCategory' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ca&#47;CategorySplitFunding&#47;FundingCategory&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633674251');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}                     var scriptElement = document.createElement('script') </div>;                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>",
"<div class = 'changeViz'> <p>Federal funding for financing bus and bus facilities capital projects</p> <div class='tableauPlaceholder' id='viz1606633814277' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bu&#47;BusBusFacilitiesFunding&#47;Bus&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='BusBusFacilitiesFunding&#47;Bus' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bu&#47;BusBusFacilitiesFunding&#47;Bus&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1606633814277');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> </div>"
];

// add graphsNames as dropdown selection
var value = document.getElementById("selGraph");
for(name in graphNames) {
    value.options[value.options.length] = new Option(graphNames);
}

// change everything on user selection
// function graphId(sample) {
//     console.log(`sample`)
//     d3.json("../../samples.json").then((data)=>{

        
    var dropdownMenu = d3.select("#selGraph");

    // Assign the value of the dropdown menu option to a variable
    var indexNo = sample;
    // var indexNo = dropdownMenu.property("value");
    console.log(indexNo);

    // demographics
    var PtId = data.metadata[indexNo];
    console.log(PtId);

    var id = PtId.id;
    console.log(id);

    var bbType = PtId.bbtype;
    console.log(bbType);

    var ethnicity = PtId.ethnicity;
    console.log(ethnicity);

    var gender = PtId.gender;
    console.log(gender);

    var age = PtId.age;
    console.log(age);

    var location = PtId.location;
    console.log(location);

    // bellybutton info
    var bbInfo = data.samples[indexNo];
    console.log(bbInfo);

    var otuIds=bbInfo.otu_ids.slice(0,10).reverse();
    var otuIdsAll=bbInfo.otu_ids;
    console.log(otuIds);
    console.log(otuIdsAll);

    // turn otu ids into OTU [number]
    var otuIdBarArray = []
    var otuIdBar = otuIds.forEach(element => otuIdBarArray.push(`OTU ${element}`));
    console.log(otuIdBarArray);


    // turn otu ids into OTU [number]
    var otuIdBarArrayAll = []
    var otuIdBarAll = otuIdsAll.forEach(element => otuIdBarArrayAll.push(`OTU ${element}`));
    console.log(otuIdBarArrayAll);

    var sampleValues=bbInfo.sample_values.slice(0,10).reverse();
    var sampleValuesAll=bbInfo.sample_values;
    console.log(sampleValues);
    console.log(sampleValuesAll);

    var otuLabels=bbInfo.otu_labels.slice(0,10).reverse();
    var otuLabelsAll=bbInfo.otu_labels;
    console.log(otuLabels);
    console.log(otuLabelsAll);

    // bar graph
    var trace1={
        type: "bar",
        x: sampleValues,
        y: otuIdBarArray,
        orientation: "h",
        text: otuLabels,
    };

    var data = [trace1];

    var layout = {
        title: `Belly Button Bacteria (OTU) by Values`,
        height: 600,
        width: 1000,

    };

    Plotly.newPlot("bar",data,layout);

    var trace2 = {
        x: otuIdsAll,
        y: sampleValuesAll,
        mode: 'markers',
        text: otuLabelsAll,
        marker: {
            color: otuIdsAll,
            size: sampleValuesAll,
            colorscale: 'Earth'
        }
      };
      
      var data = [trace2];
      
      var layout = {
        title: `Belly Button Bacteria (OTU) by Values`,
        showlegend: false,
        height: 1000,
        width: 1400,

      };
      
      Plotly.newPlot('bubble', data, layout);

       // Then, select the unordered list element by class name
        var list = d3.select(".summary");

        // remove any children from the list to
        list.html("");

        // append stats to the list
        list.append("li").text(`ID: ${id}`);
        list.append("li").text(`BB Type: ${bbType}`);
        list.append("li").text(`Ethnicity: ${ethnicity}`);
        list.append("li").text(`Gender: ${gender}`);
        list.append("li").text(`Age: ${age}`);
        list.append("li").text(`Loc: ${location}`);

    // });
;
graphId(0)