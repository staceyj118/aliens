// from data.js
var tableData = data;

// reference to table body
var tbody=d3.select('tbody');

// loop through data & add to table
var addData = data.forEach((sighting)=>{
    var row=tbody.append('tr'); 
    Object.entries(sighting).forEach(([key,value]) => {
        var cell=row.append('td');
        cell.text(value);
    })
}); 

//find rows based on user input

//select button
var button = d3.select('#filter-btn');

//select form
var form = d3.select('#datetime');

//event handlers
button.on('click', () => {
    //prevent page from refreshing
    d3.event.preventDefault();
    //find rows based on user input
    var inputDate=form.property("value").trim();
    var filterData=tableData.filter(tableData=>tableData.datetime === inputDate);
    // Select the input element and get the raw HTML node
    tbody.html('');
    //display user row selected
    let response = {
        filterData
    }
    if(response.filterData.length !==0) {
        addData(filterData);
    }
        else {
            tbody.append('tr').append('td').text("No sightings found")
        }
}
);
