const PackageUtil = require("./PackageUtil");
const Spawn  = require("./Spawn");

let colors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "grey"
];

function getRandomColor() {
  let min = Math.ceil(0);
  let max = Math.floor(colors.length -1 );
  let rand = Math.floor(Math.random() * (max - min)) + min;
  return  colors[rand];
}

const spawn = (task, taskConf) => {
    if(task.interval) {
        setTimeout(() => {
            Spawn(
                taskConf.command,
                taskConf.parameters,
                task
            )
        }, task.interval);
    } else {
        Spawn(
            taskConf.command,
            taskConf.parameters,
            task
        )
    }
};

const PipeTasks = (tasks) => {
    let spawns = [];
    for(let i = 0 ; i < tasks.length; i++) {
        let task = tasks[i];
        let taskConf = PackageUtil.getSpawnParameters(task.command);
        task.pColor = task.pColor || getRandomColor();
        spawns.push((props) =>{
            spawn(task, taskConf)
        })
    }

    return {
        execute: (props) => {
        for(let i = 0 ; i< spawns.length; i++) {
            spawns[i](props);
        }
        }
    }
}

module.exports = PipeTasks;
