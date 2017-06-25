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
]

function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let rand = Math.floor(Math.random() * (max - min)) + min;
  return  colors[rand];
}


const PipeTasks = (tasks) => {
    let spawns = [];
    for(let i = 0 ; i < tasks.length; i++) {
        let task = tasks[i];
        let taskConf = PackageUtil.getSpawnParameters(task.command);
        spawns.push(() =>{
            Spawn(
                taskConf.command,
                taskConf.parameters,
                task.tag ||
                task.command, 
                task.color || getRandomColor(0, colors.length -1)
                )           
        })
    }

    return {
        execute: () => {
        for(let i = 0 ; i< spawns.length; i++) {
            spawns[i]();
        }
        }
    }
}

module.exports = PipeTasks;
