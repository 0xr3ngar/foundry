import type { Template } from "./types";

const reconExample = `# Recon Notes

## Target
- IP/Domain:
- Scope:

## Nmap
\`\`\`bash
# command used
\`\`\`

## Findings
| Port | Service | Version | Notes |
|------|---------|---------|-------|
|      |         |         |       |
`;

const exploitExample = `# Exploitation

## Entry Point
- Service/Endpoint:
- Vulnerability:

## Plan
1. 
2. 
3. 

## Payloads / Commands
\`\`\`bash
# payload or exploit command
\`\`\`

## Results
- Shell obtained: [ ] Yes  [ ] No
- Proof (whoami, id):
`;

const lootExample = `# Loot

## Credentials
| Username | Password | Source | Access |
|----------|----------|--------|--------|
|          |          |        |        |

## Flags / Hashes
- user.txt:
- root.txt:

## Interesting Files
- 
`;

const notesExample = `# Notes

## Quick Dump
- 

## TODO
- [ ] 
`;

export const htbTemplate: Template = {
    id: "htb",
    label: "HackTheBox / TryHackMe",
    description: "Recon-to-exploit flow",
    folders: [
        { name: "recon", example: reconExample },
        { name: "exploit", example: exploitExample },
        { name: "loot", example: lootExample },
        { name: "notes", example: notesExample },
    ],
};
