# Foundry CLI

Locked in. Clean, strong, mission-ready. A Bun + TypeScript CLI to scaffold minimal, structured folders for CTFs, HackTheBox boxes/modules, pentests, and bug bounty work—with helpful `example.md` scaffolds in every folder.

## Quick Start

Install deps, build, and run locally:

```bash
bun install
bun run build
bun link
foundry list
foundry init "My HTB Box" --type htb
```

Or run in dev/watch while iterating:
```bash
bun run dev -- init "My Project" --type ctf
```

## Commands

- `foundry list` — Show available templates
- `foundry init [name] --type <id> [--root <path>]` — Create a project (prompts for missing args)
  - If `name` or `--type` is omitted, an interactive wizard asks for them.

## Templates (minimal with structured example.md)

| id          | Purpose                              | Folders                                |
|-------------|--------------------------------------|----------------------------------------|
| `ctf`       | CTF challenges                       | challenges/, tools/, notes/            |
| `htb`       | HackTheBox / TryHackMe boxes         | recon/, exploit/, loot/, notes/        |
| `htb-module`| HTB Academy study modules            | notes/, commands/, labs/, cheatsheets/ |
| `pentest`   | EPT/IPT engagements                  | notes/, EPT/{evidence,scans,scope}, IPT/{...} |
| `bugbounty` | Bug bounty recon/findings workflow   | recon/, findings/, poc/, notes/        |

Each folder gets an `example.md` with checklists/tables/code blocks to guide note-taking (e.g., recon commands, creds tables, lab steps, PoCs).

## Examples

List templates:
```bash
foundry list
```

Quick create (no prompts):
```bash
foundry init "Demo Pentest" --type pentest --root ./output
```

Interactive (prompts for missing pieces):
```bash
foundry src/cli.ts init
```

## Development Scripts

```bash
bun run dev          # Watch mode entrypoint (src/cli.ts)
bun run start        # Run once (src/cli.ts)
bun run build        # Build to dist/cli.js

bun run typecheck    # TypeScript
bun run biome:check  # Format + lint
bun run biome:format # Format only
bun run biome:lint   # Lint only
bun run knip         # Unused code/deps
bun run check        # typecheck + biome + knip
bun run test         # Tests (none yet)
```

## Project Structure

```
.
├── src/
│   ├── cli.ts            # CLI entrypoint (Commander)
│   ├── prompts.ts        # Interactive wizard (inquirer)
│   ├── generator.ts      # Folder/file generation
│   └── templates/        # Template definitions + example.md content
├── biome.json
├── knip.json
├── tsconfig.json
├── package.json
└── bun.lock
```

## License

MIT

