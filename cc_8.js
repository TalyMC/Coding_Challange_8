//Task 1 Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate)
    console.log (`Net Salary: $${netSalary.toFixed(2)}`)
    return netSalary
};//Function to compute net salary

calculateSalary(5000, 500, 0.1); //Output: Net Salary: $ 5000.00
calculateSalary(7000, 1000, 0.15); //Output: Net Salary: $6950.00

//Task 2 Function Expression
function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate)
    console.log (`Net Salary: $${finalPrice.toFixed(2)}`)
    return finalPrice
};

calculateDiscount(100, 0.2); // Output: Final Price: $80.00
calculateDiscount(250, 0.15); // Output: Final Price: $212.50