export type TemplateId = "ctf" | "htb" | "pentest" | "bugbounty" | "htb-module";

export type TemplateFolder = {
    name: string;
    example: string;
    children?: TemplateFolder[];
};

export type Template = {
    id: TemplateId;
    label: string;
    description: string;
    folders: TemplateFolder[];
};
