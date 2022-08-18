document.getElementById("btn-deposit").addEventListener('click',function(){
    const depositField = document.getElementById("deposit-field");
    const depositFieldString = depositField.value ;
    const depositdAmount = parseFloat(depositFieldString);
    depositField.value= "";
    if(isNaN(depositdAmount)){
        alert('please enter valid number')
        return;
    }
    const depositTotalElement = document.getElementById("deposit-total");
    const depositTotalElementString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalElementString);
    depositTotalElement.innerText = depositdAmount + depositTotal ;
    
    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalElementString= balanceTotalElement.innerText;
    const balaceTotal = parseFloat(balanceTotalElementString);
    const updateBalanceTotal = depositdAmount + balaceTotal;
    balanceTotalElement.innerText= updateBalanceTotal;


})

document.getElementById("btn-withdrow").addEventListener('click', function() {

    const withdrowField = document.getElementById("withdrow-field");
    const withdrowFieldString = withdrowField.value;
    const withdrowAmount = parseFloat(withdrowFieldString);
    withdrowField.value= "";
    if(isNaN(withdrowAmount)){
        alert('please enter valid number')
        return;
    }

    const withdrowTotalElement = document.getElementById("withdrow-total");
    const withdrowTotalElementString= withdrowTotalElement.innerText;
    const withdrowTotal= parseFloat(withdrowTotalElementString);
    
   
    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalElementString= balanceTotalElement.innerText;
    const balaceTotal = parseFloat(balanceTotalElementString);
    if( withdrowAmount > balaceTotal){
        alert('Do not have enough money');
        return;
    }
    const withdrowTotalAmount= withdrowAmount + withdrowTotal;
    withdrowTotalElement.innerText= withdrowTotalAmount;

    const updateBalanceTotal = balaceTotal - withdrowAmount;
    balanceTotalElement.innerText= updateBalanceTotal;
})