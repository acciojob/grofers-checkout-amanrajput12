const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", () => {
    let prices = document.querySelectorAll(".price");
    let sum = 0;

    // Calculate sum of all prices
    prices.forEach(price => {
        sum += Number(price.innerText);
    });

    // Get the table
    let table = document.querySelector("table");

    // Remove previous total row if it exists
    let existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create new row
    let totalRow = document.createElement("tr");
    totalRow.id = "ans";

    // Create a single cell spanning both columns
    let totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";
    totalCell.innerText = `Total Price: Rs ${sum}`;

    // Append cell to row and row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
});
