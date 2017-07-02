const PipeTasks = require("./common/PipeTasks");
PipeTasks(
    [
        {command: "build:ts"},
        {command: "sync"}
    ]
).execute();


