// retrieve info from samples file and print to console to verify
// function createSelection() {
d3.csv("https://raw.githubusercontent.com/spearjen/TransitData/spearjay/resources/timeSeries2.csv").then(function(data) {

    var titlesArray=data.map(data=>data.title);
    console.log(titlesArray);

    var divsArray=data.map(data=>data.div);
    console.log(divsArray);

    var blurbsArray=data.map(data=>data.blurb);
    console.log(blurbsArray);


// add titlesArray as dropdown selection
var value = document.getElementById("changeViz");
for(index in titlesArray) {
    value.options[value.options.length] = new Option(titlesArray[index], index);
}
})

// change everything on user selection
function indexIdNo(graph) {
    console.log(`graph`)
    d3.csv("https://raw.githubusercontent.com/spearjen/TransitData/spearjay/resources/timeSeries2.csv").then(function(data) {
        
    var dropdownMenu = d3.select("#changeViz");


    // Assign the value of the dropdown menu option to a variable
    var indexNo = graph;
    console.log(indexNo);

    // variables
    var graphId = data[indexNo];
    console.log(graphId);

    var title = graphId.title;
    console.log(title);

    var blurb = graphId.blurb;
    console.log(blurb);

    var div = graphId.div;
    console.log(div);



       // Then, select the  element by class name
        var viz = d3.select(".changeViz");
        var vizBlurb = d3.select(".changeBlurb");
        var vizDiv = d3.select(".tableau");

//         // remove any children from the list to
//         viz.html("");

//         // append stats to the list
//         viz.append("div class ='display-3'").title;
//         viz.append("div class = 'lead'").blurb;
//         viz.append("div id= 'changeViz'").div;

//     });
    });
};
// indexIdNo(0)
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/TotalvsRidership/TotalvsRidership?:language=en&:display_count=y&:origin=viz_share_link";

    var viz = new tableau.Viz(containerDiv, url);
}

initViz(indexNo);

// function initializeViz() {
//     // JS object that points at empty div in the html
//     var placeholderDiv = document.getElementById("tableauViz");
//     // URL of the viz to be embedded
//     var url = "http://public.tableau.com/views/WorldIndicators/GDPpercapitahttps://public.tableau.com/views/TotalvsRidership/TotalvsRidership?:language=en&:display_count=y&:origin=viz_share_link";
//     // An object that contains options specifying how to embed the viz
//     var options = {
//       width: '600px',
//       height: '600px',
//       hideTabs: true,
//       hideToolbar: true,
//     };
//     viz = new tableau.Viz(placeholderDiv, url, options);
//   }