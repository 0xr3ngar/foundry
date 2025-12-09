import type { Template } from "./types";

const reconExample = `# Recon

## Subdomains
\`\`\`bash
# amass enum -d target.com
\`\`\`

## Endpoints
\`\`\`bash
# gau target.com
\`\`\`

## Interesting
-
`;

const findingsExample = `# Finding Title

## Severity
- [ ] Critical  [ ] High  [ ] Medium  [ ] Low

## Description


## Steps to Reproduce
1.
2.
3.

## Impact


## Evidence
- screenshot: ./screenshot.png
- request/response: ./traffic.txt
`;

const pocExample = `# Proof of Concept

## Request / Payload
\`\`\`http
GET /path HTTP/1.1
Host: target.com
\`\`\`

## Expected vs Observed
- Expected:
- Observed:
`;

const notesExample = `# Notes

## Quick Dump
-

## TODO
- [ ]
`;

export const bugBountyTemplate: Template = {
    id: "bugbounty",
    label: "Bug Bounty",
    description: "Recon and finding-first workflow",
    folders: [
        { name: "recon", example: reconExample },
        { name: "findings", example: findingsExample },
        { name: "poc", example: pocExample },
        { name: "notes", example: notesExample },
    ],
};
