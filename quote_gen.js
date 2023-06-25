const quote_generator = () =>{
    let quotes = [
        "You are what you create",
        "Be the best possible version of yourself",
        "...and those who were dancing in the dark, were seen as insane by those who couldn't hear the music",
        "One suffers more in imagination than in reality"
      ];
      
      let randomIndex = Math.floor(Math.random() * quotes.length);
      console.log(quotes[randomIndex]);

      menu();
      console.log("\n");
      
    
}
//this is a change
const readline = require('readline');
//wow it is quite different here in js 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//this is yet another fucking change 
function menu() {
  console.log('FALLEN+ BASICS\n');
  console.log('1. Quote Generator\n2. Therapy Bots\n3. M');

  rl.question('Make your selection: ', (selection) => {
    if(selection == 1){
quote_generator(); 
    }
    else if(selection == 2){
console.log('THERAPY BOTS'); 
console.log('\nThe Therapy Bots will be one of the most revolutionary robots made in history. They are based on the idea of quantum fallacy, in which one either fixes themselves or they wont be able to leave the space. The Therapy bots are a very strict method that will be used on some of the most dangerous individuals , to make an attempt to change them completely. \nThere will be problems with justice but those problems are to be dealth with in the same time, with the advancements of cloning.\n');

    }
    else if(selection == 3){
        console.log("\nM is the first conscious robot to ever exist, she is beyond what a human is and will ever be, however, she is not a threat to humans in any way, she exist to help humanity and provide assistance and friendship to Parker, her mutual partner. \n ");;
    }
    rl.close();
  });
}

//this is another change 
//this is yet another change 



menu(); 
