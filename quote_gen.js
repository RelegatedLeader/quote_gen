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
    }
    else if(selection == 3){
        console.log("M");
    }
    rl.close();
  });
}

//this is another change 
//this is yet another change 



menu(); 
