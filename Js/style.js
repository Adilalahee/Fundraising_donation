// Donation form 1 function
document.getElementById('donate_btn').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance=getTextValueById('addmoney_balance');
    if(isNaN(donateAmount)){
        alert('Please Enter valid number')
        return;
    }
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    const totalBalance=addmoneyBalance+donateAmount;
    document.getElementById('addmoney_balance').innerText=totalBalance;
    // History part
    const donateText=getTextById('donate_text')
    const div=document.createElement('div');
    div.classList.add('my-2');
    div.classList.add('border-2');
    div.classList.add('border-solid');
    div.classList.add('p-4');
    div.innerHTML=`
    <h4 class="font-bold"> ${donateAmount} Taka is donated for ${donateText} </h4>
    <p> Date: ${new Date().toString()} </p>
    `
    
    document.getElementById('history_transaction').appendChild(div);
    }
    else{
        alert('Sorry! You do not have sufficient balance')
    }
      
})
// Donation form 2 function
document.getElementById('donate_btn_2').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input1');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance1=getTextValueById('addmoney_balance1');
    if(isNaN(donateAmount)){
        alert('Please Enter valid number')
        return;
    }
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    const totalBalance=addmoneyBalance1+donateAmount;
    document.getElementById('addmoney_balance1').innerText=totalBalance; 
    // History part
    const donateText=getTextById('donate_text')
    const div=document.createElement('div');
    div.classList.add('my-2');
    div.classList.add('border-2');
    div.classList.add('border-solid');
    div.classList.add('p-4');
    div.innerHTML=`
    <h4 class="font-bold"> ${donateAmount} Taka is donated for ${donateText} </h4>
    <p> Date: ${new Date().toString()} </p>
    `
    
    document.getElementById('history_transaction').appendChild(div);
    }
    else{
        alert('Sorry! You do not have sufficient balance')
    }
     
})
// Donation form 3 function
document.getElementById('donate_btn_3').addEventListener('click',function(){
    const donateAmount=getInputValueById('donate_input2');
    const currentBalance=getTextValueById('current_balance');
    const addmoneyBalance2=getTextValueById('addmoney_balance2');
    if(isNaN(donateAmount)){
        alert('Please Enter valid number')
        return;
    }
    
    if(donateAmount<currentBalance){
        const newbalance=currentBalance-donateAmount;
    document.getElementById('current_balance').innerText=newbalance;
    const totalBalance=addmoneyBalance2+donateAmount;
    document.getElementById('addmoney_balance2').innerText=totalBalance;
    // History part 
    const donateText=getTextById('donate_text2')
    const div=document.createElement('div');
    div.classList.add('my-2');
    div.classList.add('border-2');
    div.classList.add('border-solid');
    div.classList.add('p-4');
    div.innerHTML=`
    <h4 class="font-bold"> ${donateAmount} Taka is donated for ${donateText} </h4>
    <p> Date: ${new Date().toString()} </p>
    `
    
    document.getElementById('history_transaction').appendChild(div);
    }
    else{
        alert('Sorry! You do not have sufficient balance')
    }
   
})

