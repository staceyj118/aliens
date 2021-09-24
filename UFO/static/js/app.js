// from data.js
var tableData = data;

// reference to table body
var tbody=d3.select('tbody');

// loop through data & add to table
data.forEach((sighting)=>{
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
button.on('click', runEnter);
form.on('submit', runEnter);

function runEnter() {

    //prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    $tbody.html('');

    // Get the value property of the input element


    // Use the form input to filter the data by date
}





