import * as core from "@actions/core";
import { IActionInput } from "./action-input.interface";
import { GITHUB_VERSION_NAME } from "../../domain/enums/github/github-version-name.enum";
import { GITHUB_INPUT } from "../../domain/enums/github/github-input.enum";
import { PLATFORM } from "../../domain/enums/platform.enum";

export class ActionInput implements IActionInput {
    public token: string;
    public platform: PLATFORM;
    public versionName: GITHUB_VERSION_NAME;

    constructor() {
        this.token = core.getInput(GITHUB_INPUT.TOKEN);
        this.platform = core.getInput(GITHUB_INPUT.PLATFORM) as PLATFORM;
        this.versionName = core.getInput(
            GITHUB_INPUT.VERSION_NAME
        ) as GITHUB_VERSION_NAME;
    }
}
