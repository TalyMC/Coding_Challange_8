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

calculateDiscount(100, 0.2); //Output: Final Price: $80.00
calculateDiscount(250, 0.15); //Output: Final Price: $212.50

//Task 3 Arrow Function
let calculateServiceFee = (amount, serviceType) => {
    let fee;
    if (serviceType === "Premium") {
        fee = amount * 0.15; //"Premium" rating gets a 15% fee
    }
    else if (serviceType === "Standard"){
        fee = amount * 0.1; // "Standard" rating gets a 10% fee
    }
    else if (serviceType === "Basic") {
        fee = amount * 0.05; //"Basic" rating gets a 5% fee
    }
    console.log (`Service Fee: $${fee.toFixed(2)}`)
    return fee;
};

calculateServiceFee(200, "Premium"); //Output: Service Fee: $30.00
calculateServiceFee(500, "Standard"); //Output: Service Fee: $50.00

//Task 4 Parameter and Arguments
function calculateRentalCost(days, carType, insurance = false) {
    let rentalRate = 0;
    if (carType === "Economy") {
        rentalRate = 40 * days; // $40 per day
    } 
    else if (carType === "Standard") {
        rentalRate = 60 * days; // $60 per day
    } 
    else if (carType === "Luxury") {
        rentalRate = 100 * days; // $100 per day
    } 
    if (insurance) rentalRate += 20 * days;
    console.log (`Total Rental Cost: $${rentalRate}`)
    return rentalRate
};

calculateRentalCost(3, "Economy", true); //Ouput: Total Rental Cost: $180
calculateRentalCost(5, "Luxury", false); //Output: Total Rental Cost: $500

//Task 5 Returning Values
function calculateLoanPayment(principal, rate, time) {
    const totalPayment = principal + (principal * rate * time)
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
    
    return totalPayment;
};
calculateLoanPayment(1000, 0.05, 2); //Output: Total Payment $1100.00
calculateLoanPayment(5000, 0.07, 3); //Output: Total Payment $6050.00

//Task 6 Higher-Order Function