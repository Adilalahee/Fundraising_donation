document.getElementById('donate_btn').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance=getTextValueById('addmoney_balance');
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    const div=document.createElement('div');
    div.classList.add('my-2');
    div.classList.add('border-2');
    div.classList.add('border-solid');
    div.classList.add('p-4');
    div.innerHTML=`
    <h4> ${donateAmount} Taka has been donated </h4>
    <p> Date: ${new Date().toString()} </p>
    `
    
    document.getElementById('history_transaction').appendChild(div);
    }
    else{
        alert('Sorry')
    }
    const totalBalance=addmoneyBalance+donateAmount;
    document.getElementById('addmoney_balance').innerText=totalBalance;   
})

