let colors = require('colors');
module.exports = (cmd, parameters, task) => {
    const { spawn } = require("child_process");
    if(task.stdio && task.stdio === 'inherit') {
        spawn(cmd, parameters, { stdio: 'inherit' });
        return;
    }
    const command = spawn(cmd, parameters);
    task.tag = task.tag || task.command;
    command.stdout.on('data', (data) => {
        var dataStr = data.toString();
        if(dataStr.indexOf("error TS") !== -1) {
            dataStr = dataStr.red;
        }
        console.log(`${task.tag[task.pColor]}: ` + dataStr);
    });
    command.stderr.on('data', (data) => {
        console.error(`${task.tag[task.pColor]}: ` + data.toString().red);
    });
    command.on('close', (code) => {
        console.log(`${task.tag[task.pColor]}: child process exited with code ${code}`);
    });
};