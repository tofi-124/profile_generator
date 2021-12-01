const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your name? ", (answer) => {
  rl.question("What would you name your boat if you had one? ", (boatName) => {
    rl.question(
      "What’s the most useless talent you have? ",
      (uselessTalent) => {
        rl.question(
          "What celebrity would you rate as a perfect 10? ",
          (celebrity) => {
            rl.question(
              "What is the dumbest way you’ve been injured? ",
              (dumbestWay) => {
                console.log(`${answer} is a fun person who wishes to have a boat named ${boatName}, can do ${uselessTalent}. \n${answer}, out of all the celebrities out there, would rate ${celebrity} 10 out of 10.\n${answer} was also injured ${dumbestWay} doing that!`);
                rl.close();
              }
            );
          }
        );
      }
    );
  });
});

