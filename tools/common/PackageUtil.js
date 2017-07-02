const packageJson = require("../../package.json");


const getSpawnParameters = (name) => {
    let command = packageJson.scripts[name];
    if(!command) {
        throw new Error(name + " not found scripts tag which defined in package.json")
    }
    let args = command.split(" ");
    let headCommand = args[0];
    let parameters;
    if(headCommand == "node" || headCommand == "react-native") {
        parameters = args.slice(1);
    } else {
        headCommand = "npm";
        parameters = ["run"].concat(name);
    }
    return {
        command: headCommand,
        parameters: parameters
    }
}

module.exports = {
    getSpawnParameters: getSpawnParameters
}