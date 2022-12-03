const { exec } = require("child_process");
const lastCompletedDay = 3;

const main = async () => {
  for (let i = 0; i < 25; i++) {
    const day = i + 1;
    if (day <= lastCompletedDay) {
      await new Promise((resolve) => {
        exec(`node ./${day}/part${1}.js`, (error, stdout, stderr) => {
          console.log(`# --- December ${day} 2022 --- #`);
          console.log(`part 1: ${stdout}`);

          exec(`node ./${day}/part${2}.js`, (error, stdout, stderr) => {
            console.log(`part 2: ${stdout}`);
            resolve();
          });
        });
      });
    }
  }
};

main();
