import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
    getTemplate,
    templates,
    type TemplateFolder,
    type TemplateId,
} from "./templates";

export type GenerateOptions = {
    name: string;
    templateId: TemplateId;
    rootDir?: string;
};

export function sanitizeProjectName(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return "project";
    const safe = trimmed
        .replace(/[^\w.-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    return safe || "project";
}

async function writeExampleFile(dir: string, content: string) {
    const filePath = path.join(dir, "example.md");
    const normalized = `${content.trimEnd()}\n`;
    await writeFile(filePath, normalized, "utf8");
}

async function createFolderTree(folder: TemplateFolder, baseDir: string) {
    const folderPath = path.join(baseDir, folder.name);
    await mkdir(folderPath, { recursive: true });
    await writeExampleFile(folderPath, folder.example);

    if (!folder.children) return;
    for (const child of folder.children) {
        await createFolderTree(child, folderPath);
    }
}

export async function generateProject(options: GenerateOptions) {
    const { name, templateId, rootDir } = options;
    const template = getTemplate(templateId);
    if (!template) {
        const available = templates.map((t) => t.id).join(", ");
        throw new Error(
            `Unknown template '${templateId}'. Available: ${available}`,
        );
    }

    const projectName = sanitizeProjectName(name);
    const targetRoot = rootDir ?? process.cwd();
    const projectDir = path.join(targetRoot, projectName);

    await mkdir(targetRoot, { recursive: true });
    await mkdir(projectDir, { recursive: false }).catch(
        (error: NodeJS.ErrnoException) => {
            if (error.code === "EEXIST") {
                throw new Error(
                    `Target directory already exists: ${projectDir}`,
                );
            }
            throw error;
        },
    );

    for (const folder of template.folders) {
        await createFolderTree(folder, projectDir);
    }

    return projectDir;
}
