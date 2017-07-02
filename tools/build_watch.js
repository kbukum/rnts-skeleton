const PipeTasks = require("./common/PipeTasks");
PipeTasks(
    [
        {command: "build:ts:watch"},
        {command: "sync:watch"}
    ]
).execute();


