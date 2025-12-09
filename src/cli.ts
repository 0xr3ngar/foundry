#!/usr/bin/env bun

import path from "node:path";
import process from "node:process";
import { Command, Option } from "commander";
import { generateProject, sanitizeProjectName } from "./generator";
import { promptForInit } from "./prompts";
import { getTemplate, type TemplateId, templates } from "./templates";

const program = new Command();

program
    .name("foundry")
    .description("Locked in. Clean, strong, mission-ready.")
    .version("1.0.0");

program
    .command("list")
    .description("Show available project types")
    .action(() => {
        templates.forEach((template) => {
            const folders = template.folders
                .map((folder) => folder.name)
                .join(", ");
            console.log(
                `${template.id.padEnd(10)} ${template.label} — ${template.description}`,
            );
            console.log(`  folders: ${folders}`);
        });
    });

program
    .command("init")
    .argument("[name]", "Project name")
    .description("Create a new project structure")
    .addOption(
        new Option("-t, --type <type>", "Project type").choices(
            templates.map((template) => template.id),
        ),
    )
    .option(
        "-r, --root <path>",
        "Target directory (defaults to current working directory)",
    )
    .action(async (nameArg, options) => {
        const providedType = options.type as TemplateId | undefined;
        const rootDir = options.root
            ? path.resolve(process.cwd(), options.root)
            : process.cwd();

        let name = nameArg as string | undefined;
        let templateId = providedType;

        // Prompt for missing pieces
        if (!name || !templateId) {
            const answers = await promptForInit(name, templateId);
            name = name ?? answers.name;
            templateId = templateId ?? answers.templateId;
        }

        if (!templateId) {
            throw new Error("Project type is required");
        }

        const template = getTemplate(templateId);
        if (!template) {
            const available = templates.map((t) => t.id).join(", ");
            throw new Error(
                `Unknown template '${templateId}'. Available: ${available}`,
            );
        }

        const projectDir = await generateProject({
            name: name ?? sanitizeProjectName("project"),
            templateId,
            rootDir,
        });

        console.log(`\nCreated ${template.label} project at: ${projectDir}`);
    });

async function run() {
    await program.parseAsync(process.argv);
}

if (import.meta.main) {
    run().catch((error: unknown) => {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`Error: ${message}`);
        process.exitCode = 1;
    });
}
