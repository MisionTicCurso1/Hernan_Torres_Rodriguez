
function get(){
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let start = document.getElementById('start').value;
    let returns = document.getElementById('returns').value;
    let adults = document.getElementById('adults').value;
    let child = document.getElementById('child').value;
    console.log(
        `From: ${from} \n`,
        `To: ${to} \n`,
        `Start: ${start} \n`,
        `Return: ${returns} \n`,
        `Adults: ${adults} \n`,
        `Child: ${child} \n`,
        'Buscando Viajes...'
    )
}