$(document).ready(function() {
    // Function to calculate tax
    function calculateTax(age, income, extraIncome, deductions) {
        let totalIncome = income + extraIncome - deductions;
        let tax = 0;
        if (totalIncome > 800000) {
            if (age === "<40") {
                tax = 0.3 * (totalIncome - 800000);
            } else if (age === "≥40 &lt;60") {
                tax = 0.4 * (totalIncome - 800000);
            } else if (age === "≥60") {
                tax = 0.1 * (totalIncome - 800000);
            }
        }
        return tax;
    }

    // Function to display modal with tax result
    function displayResult(tax) {
        $('#resultBody').html(`<p>Tax to be paid: ${tax} Lakhs</p>`);
        $('#resultModal').modal('show');
    }

    // Function to validate form inputs
    function validateInputs() {
        let isValid = true;
        $('#ageError, #incomeError, #extraIncomeError, #deductionsError').hide();
        if ($('#age').val() === '') {
            $('#ageError').show();
            isValid = false;
        }
        if ($('#income').val() === '') {
            $('#incomeError').show();
            isValid = false;
        }
        if ($('#extraIncome').val() === '') {
            $('#extraIncomeError').show();
            isValid = false;
        }
        if ($('#deductions').val() === '') {
            $('#deductionsError').show();
            isValid = false;
        }
        return isValid;
    }

    // Event listener for form submission
    $('#calculateBtn').click(function() {
        if (validateInputs()) {
            let age = $('#age').val();
            let income = parseFloat($('#income').val());
            let extraIncome = parseFloat($('#extraIncome').val());
            let deductions = parseFloat($('#deductions').val());
            let tax = calculateTax(age, income, extraIncome, deductions);
            displayResult(tax);
        }
    });
});
