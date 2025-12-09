import type { Template } from "./types";

const challengesExample = `# Challenge Notes

- Name:
- Category:
- Points:
- Source/Event:

## Approach
- Enumeration:
- Exploit path:
- Pitfalls:

## Flag
- Found: [ ] Yes  [ ] No
- Flag:

## Takeaways
- `;

const toolsExample = `# Tools & Scripts

## Tool
- Name:
- Purpose:
- Command/Usage:

## Notes
- `;

const notesExample = `# Notes

## Quick Dump
-

## TODO
- [ ]
`;

export const ctfTemplate: Template = {
    id: "ctf",
    label: "CTF",
    description: "Minimal CTF workspace",
    folders: [
        { name: "challenges", example: challengesExample },
        { name: "tools", example: toolsExample },
        { name: "notes", example: notesExample },
    ],
};
