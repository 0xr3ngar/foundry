import type { Template } from "./types";

const notesExample = `# Module Notes

## Concepts Learned
-

## Key Services/Tech
-

## Takeaways
- `;

const commandsExample = `# Commands / One-liners

## Discovery
\`\`\`bash
# example
\`\`\`

## Exploitation
\`\`\`bash
# example
\`\`\`

## Post-exploitation
\`\`\`bash
# example
\`\`\`
`;

const labsExample = `# Labs Walkthrough

## Lab Name
- Goal:
- Steps:
1.
2.
3.

## Results
- Success: [ ] Yes  [ ] No
- Notes:
`;

const cheatsheetExample = `# Cheatsheet

- Command:
- When to use:
- Notes:
`;

export const htbModuleTemplate: Template = {
    id: "htb-module",
    label: "HTB Module",
    description: "Study template for HackTheBox academy modules",
    folders: [
        { name: "notes", example: notesExample },
        { name: "commands", example: commandsExample },
        { name: "labs", example: labsExample },
        { name: "cheatsheets", example: cheatsheetExample },
    ],
};
