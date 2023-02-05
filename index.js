
document.querySelector('#loan-form').addEventListener('submit', function(e){
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    const A = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle * A * calculatedInterest) / (A - 1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    } else {
        showError('Please check your inputs');
    }
}

