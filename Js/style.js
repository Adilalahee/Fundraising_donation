document.getElementById('donate_btn').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance=getTextValueById('addmoney_balance');
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    }
    else{
        alert('Sorry')
    }
    const totalBalance=addmoneyBalance+donateAmount;
    document.getElementById('addmoney_balance').innerHTML=totalBalance;   
})

