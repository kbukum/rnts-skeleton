let colors = require('colors');
module.exports = (cmd, parameters, tag, pColor) => {
    const spawn = require('child_process').spawn;
    const command = spawn(cmd, parameters);
    command.stdout.on('data', (data) => {
        var dataStr = data.toString();
        if(dataStr.indexOf("error TS") != -1) {
            dataStr = dataStr.red;
        }
        console.log(`${tag[pColor]}: ` + dataStr);
    });
    command.stderr.on('data', (data) => {
        console.error(`${tag[pColor]}: ` + data.toString().red);
    });
    command.on('close', (code) => {
        console.log(`${tag[pColor]}: child process exited with code ${code}`);
    });
}