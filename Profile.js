const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name or nickname? ', (name) => {
  const name1 = name;
  
  rl.question('What\'s your hobby? ', (hobby) => {
    const hobby1  = hobby;

    rl.question('What music do you listen to? ', (music) => {
      const music1 = music;


      rl.question('What\'s your favourite time of the day? ', (timeOfDay) => {
        const timeofday1  = timeOfDay;
  
        
        rl.question('What\'s your favourite food? ', (food) => {
          const food1 = food;
    
          
          rl.question('What\'s your favourite sport? ', (sport) => {
            const sport1 = sport;
      

            rl.question('What\'s your superpower? ', (power) => {
              const power1 = power;
        
              console.log(`My name is ${name1} and my hobby is ${hobby1}. I like to listen ${music1} and my favourite time of the day is ${timeOfDay}. \nMy favourite food is ${food1} and I like to play ${sport1}. My superpower is ${power1}.`);

              rl.close();
            });
          });

        });

      });

    });
  
  });
});
