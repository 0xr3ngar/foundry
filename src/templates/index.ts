import { bugBountyTemplate } from "./bugbounty";
import { ctfTemplate } from "./ctf";
import { htbTemplate } from "./htb";
import { htbModuleTemplate } from "./htb-module";
import { pentestTemplate } from "./pentest";
import type { Template, TemplateId } from "./types";

export const templates: Template[] = [
    ctfTemplate,
    htbTemplate,
    pentestTemplate,
    bugBountyTemplate,
    htbModuleTemplate,
];

const templateMap = new Map<TemplateId, Template>(
    templates.map((template) => [template.id, template]),
);

export function getTemplate(id: TemplateId) {
    return templateMap.get(id);
}

export type { Template, TemplateFolder, TemplateId } from "./types";
