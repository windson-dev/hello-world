const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);



const currentHour = 10
let message;

if (currentHour >= 22){
    message = 'Não deveríamos comer nada, é hora de dormir.'
  
} else if (currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D'

} else if (currentHour >= 14 && currentHour < 18){
    message = 'Vamos fazer um bolo pro café da tarde ?'
   
} else if (currentHour >= 11 && currentHour <= 14){
    message = 'Hora do almoço!!!'
    
} else if (currentHour >= 4 && currentHour < 11){
    message = 'Hmmm, cheiro de café recém passado'
}

console.log(message)


let weekDay = 'sabado'

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else if (weekDay === 'sabado' || weekDay === 'domingo'){
    console.log('FINALMENTE, descanso merecido UwU')
}

console.log(!(2 + 2) === 4);

let avaliacao = 'aprovada'

switch (avaliacao){
    case 'aprovada':
    console.log('Parabéns, você foi aprovado(a) !');
    break;

    case 'lista':
    console.log('Você está na lista de espera.')
    break;

    case 'reprovada':
    console.log('Sinto muito, infelizmente você foi reprovado(a).')
    break;

    default:
    console.log('Não se aplica')
}



