
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