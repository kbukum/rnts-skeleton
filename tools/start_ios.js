const PipeTasks = require("./common/PipeTasks");
PipeTasks(
    [
        {command: "debug"},
        {command: "dev"},
        {command: "ios"}
    ]
).execute();


