function showSectionById(id){
    document.getElementById('donate_form').classList.add('hidden');
    document.getElementById('history_form').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');

}
document.getElementById('button_donate').addEventListener('click',function(){
    showSectionById('donate_form');
})
document.getElementById('button_history').addEventListener('click',function(){
    showSectionById('history_form');
})
