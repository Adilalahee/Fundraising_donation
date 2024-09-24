document.getElementById('donate_btn').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance=getTextValueById('addmoney_balance');
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    const donateText=getTextById('donate_text')
    const div=document.createElement('div');
    div.classList.add('my-2');
    div.classList.add('border-2');
    div.classList.add('border-solid');
    div.classList.add('p-4');
    div.innerHTML=`
    <h4> ${donateAmount} Taka has been donated for ${donateText} </h4>
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

document.getElementById('donate_btn_2').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input1');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance1=getTextValueById('addmoney_balance1');
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    const donateText=getTextById('donate_text')
    const div=document.createElement('div');
    div.classList.add('my-2');
    div.classList.add('border-2');
    div.classList.add('border-solid');
    div.classList.add('p-4');
    div.innerHTML=`
    <h4> ${donateAmount} Taka has been donated for ${donateText} </h4>
    <p> Date: ${new Date().toString()} </p>
    `
    
    document.getElementById('history_transaction').appendChild(div);
    }
    else{
        alert('Sorry')
    }
    const totalBalance=addmoneyBalance1+donateAmount;
    document.getElementById('addmoney_balance1').innerText=totalBalance;   
})
document.getElementById('donate_btn_3').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input2');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance2=getTextValueById('addmoney_balance2');
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    const donateText=getTextById('donate_text2')
    const div=document.createElement('div');
    div.classList.add('my-2');
    div.classList.add('border-2');
    div.classList.add('border-solid');
    div.classList.add('p-4');
    div.innerHTML=`
    <h4> ${donateAmount} Taka has been donated for ${donateText} </h4>
    <p> Date: ${new Date().toString()} </p>
    `
    
    document.getElementById('history_transaction').appendChild(div);
    }
    else{
        alert('Sorry')
    }
    const totalBalance=addmoneyBalance2+donateAmount;
    document.getElementById('addmoney_balance2').innerText=totalBalance;   
})

