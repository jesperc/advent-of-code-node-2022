const executeCommand = (command, path) => {
    switch (command.name) {
        case "ls":
            return path;
        case "cd":
            switch (command.param) {
                case "..":
                    const segments = path.split("/")
                    segments.pop()
                    return segments.join("/")
                case "/":
                    return ""
                default: 
                    return path === "" ? command.param : `${path}/${command.param}`
            }
        default: throw "invalid command"
  }
};

module.exports = executeCommand;
