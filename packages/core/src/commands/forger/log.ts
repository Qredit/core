import { flags } from "@oclif/command";
import { AbstractLogCommand } from "../../shared/log";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class LogCommand extends AbstractLogCommand {
    public static description: string = "Show the forger log";

    public static examples: string[] = [`$ qredit forger:log`];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        error: flags.boolean({
            description: "only show error output",
        }),
        lines: flags.integer({
            description: "number of lines to tail",
            default: 15,
        }),
    };

    public getClass() {
        return LogCommand;
    }

    public getSuffix(): string {
        return "forger";
    }
}
