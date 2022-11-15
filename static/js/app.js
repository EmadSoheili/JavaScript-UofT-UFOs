
// Import data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");


function buildTable(data) {
    // Clear existing data
    tbody.html("")
}

// Loop through data
data.forEach((dataRow) => {
    
    // Append a row (tr: table row)
    let row = tbody.append("tr");

    // Loop through each object of data (each object contains some key-value pairs)
    Object.values(dataRow).forEach((val) => {
        
        // Append a cell for data (td: table data)
        let cell = row.append("td");
        
        // Put the values of the key-value pair in each cell 
        cell.text(val);
    });
});


function handleClick() {

    // Grabe the datetime value
    let date = d3.select("#datetune").property("value");

    // Set a default filter
    let filteredData = tableData;

    // Check if a date added as a filter
    if (date) {
        // Filter data based on the entered date
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Create the table based on filtered or original data
    buildTable(filteredData);
}

// Tell JS to listen to the click and execute the handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);