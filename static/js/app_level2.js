
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
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape");


var button = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");


button.on("click", function(){
    event.preventDefault();

    var filterData = tableData

    var inputDate = inputFieldDate.property("value");
    var inputCity = inputFieldCity.property("value");
    var inputState = inputFieldState.property("value");
    var inputCountry = inputFieldCountry.property("value");
    var inputShape = inputFieldShape.property("value");

    function dateFilter(data) {
        return data.datetime === inputDate
    };
    function cityFilter(data) {
        return data.city === inputCity
    }
    function stateFilter(data) {
        return data.state === inputState
    };
    function countryFilter(data) {
        return data.country === inputCountry
    };
    function shapeFilter(data) {
        return data.shape === inputShape
    };

    if (inputDate !== "") {
        console.log(`Input Date: ${inputDate}`)
        filterData = filterData.filter(dateFilter)
    };
    if (inputCity !== "") {
        console.log(`Input City: ${inputCity}`)
        filterData = filterData.filter(cityFilter)
    };
    if (inputState !== "") {
        console.log(`Input City: ${inputState}`)
        filterData = filterData.filter(stateFilter)
    };
    if (inputCountry !== "") {
        console.log(`Input Country: ${inputCountry}`)
        filterData = filterData.filter(countryFilter)
    };
    if (inputShape !== "") {
        console.log(`Input Shape: ${inputShape}`)
        filterData = filterData.filter(shapeFilter)
    }

    console.log(filterData)
    tbody.html("")
    filterData.forEach(function(ufoData){
        var newRow = tbody.append("tr")
        Object.entries(ufoData).forEach(function([key,value]){
            var cell = tbody.append("td")
            cell.text(value)
        })
    })

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
    inputFieldCity.property("value","");
    inputFieldState.property("value","");
    inputFieldCountry.property("value","");
    inputFieldShape.property("value","");
})