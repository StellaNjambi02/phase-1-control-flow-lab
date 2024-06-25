let feet=400;
function scuberGreetingForFeet(feet){
  let result;
  if (feet<2500){ 
  if (feet<=400 ){
   
    result="This one is on me!"
   
  }
  else if(feet<2000 && feet >400)
    {result='That will be twenty bucks.';
         
    }

  else if(feet>=2000 ){
    result='I will gladly take your thirty bucks.';
  }
  return result;
}
  else{
    result=('No can do.');
  }
  return result;

}
// Write your code here!
 
// }
let destination;
function ternaryCheckCity(destination){
  // Write your code here!
  const city=(destination==='NYC')?'Ok, sounds good.':"No go.";
  return city;

}
// ternaryCheckCity('NYC');
 let tip;
 function switchOnCharmFromTip(tip){
   
  switch(tip)
  {
    case 'generous':
      return('Thank you so much.')
      break;
  
    case 'not as generous':
    return('Thank you.')
    break;

default:
  return('Bye.');
  break;
  }
  }