const { exec } = require("child_process");
const lastCompletedDay = 8;

const main = async () => {
  for (let i = 0; i < 25; i++) {
    const day = i + 1;
    if (day <= lastCompletedDay) {
      await new Promise((resolve) => {
        console.time("time");
        exec(`node ./${day}/part${1}.js`, (error, stdout, stderr) => {
          console.log(`# --- December ${day} 2022 --- #`);
          console.timeEnd("time");
          console.log(`part 1: ${stdout}`);

          console.time("time");
          exec(`node ./${day}/part${2}.js`, (error, stdout, stderr) => {
            console.timeEnd("time");
            console.log(`part 2: ${stdout}`);
            resolve();
          });
        });
      });
    }
  }
};

main();
