import { input, select } from "@inquirer/prompts";
import { type TemplateId, templates } from "./templates";

export type InitAnswers = {
    name: string;
    templateId: TemplateId;
};

export async function promptForInit(
    defaultName?: string,
    defaultType?: TemplateId,
) {
    const name = await input({
        message: "Project name",
        default: defaultName?.trim() || "New Project",
        validate: (value) => value.trim().length > 0 || "Name is required",
    });

    const templateId = await select<TemplateId>({
        message: "Project type",
        default: defaultType,
        choices: templates.map((template) => ({
            name: `${template.label} — ${template.description}`,
            value: template.id,
        })),
    });

    return { name, templateId } satisfies InitAnswers;
}
