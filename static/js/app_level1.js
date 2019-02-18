
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    var newRow = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]){
        var cell = tbody.append("td");
        cell.text(value);
    });
});

var inputFieldDate = d3.select("#datetime");
var button = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");


button.on("click", function(){
    event.preventDefault();

    var inputDate = inputFieldDate.property("value");
    function dateFilter(data) {
        return data.datetime === inputDate
    };
    var filterData = tableData.filter(dateFilter);
    console.log(filterData);
    tbody.html("");
    filterData.forEach(function(ufoData){
        var newRow = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key,value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});
clear.on("click", function(){
    d3.event.preventDefault();
    tbody.html("");
    tableData.forEach(function(ufoData) {
        var newRow = tbody.append("tr");
        Object.entries(ufoData).forEach(function([key, value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    inputFieldDate.property("value","");
})