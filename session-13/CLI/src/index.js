import chalk from "chalk";
import { GetLogger } from "./logging.js";
import { Program } from "./program.js";

const logger = GetLogger("debug", "program.log");
logger.info("program started");
try {
    const [command, ...args] = process.argv.slice(2);

    let program = new Program(args);

    if (command === "greet") {
        program.greet();
    } else {
        throw new Error("Command not valid. ");
    }
} catch (exc) {
    logger.error(exc);
    console.error(chalk.red.bold(exc.message));
}
