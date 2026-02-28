# Token Efficiency Guidelines

Reduce token usage while maintaining quality. Efficiency = maximizing value per token.

## Core Rules

1. **Search before reading** — Use Grep/Glob to find what you need, then Read targeted sections
2. **Read once, reference later** — Don't re-read files you've already seen; reference conversation context
3. **Be concise** — Bullets over paragraphs, explain "why" not "what"
4. **Combine operations** — Use brace expansion (`**/*.{ts,tsx}`) and regex alternation (`useState|useEffect`)
5. **Use agents for complex exploration** — One Explore agent spawn beats 10 manual searches

## File Operations

**Do:**
- `Grep pattern="functionName" path="src/"` then `Read file.ts offset=50 limit=20`
- Use `offset`/`limit` for large files
- Trust earlier reads — only re-read if the file may have changed

**Don't:**
- Read the same large file multiple times
- Read entire files when Grep answers the question
- Read generated files (node_modules, dist)

## Search Operations

**Do:**
- `Glob pattern="**/*.{ts,tsx,js}"` (one search, not three)
- `Grep pattern="import.*(useState|useEffect)" path="src/"` (one search, not two)
- Scope searches to relevant directories and file types

**Don't:**
- Run sequential similar globs/greps that could be combined
- Search the entire codebase when you know the subdirectory

## Responses

**Do:**
- `"Fixed import: './lib/auth' → './lib/supabase'"` (~15 tokens)
- Explain decisions, not actions — tool calls are self-evident

**Don't:**
- Multi-paragraph explanations for simple changes (~100+ tokens wasted)
- Re-explain concepts already established in conversation
- Narrate each tool call before making it

## Code Generation

**Do:**
- Read types/patterns first, generate complete correct code in one pass
- Include all imports, types, and implementation — no placeholders

**Don't:**
- Generate incrementally (signature, then body, then types)
- Guess at types then fix errors — read definitions first

## Planning

**Do:**
- Understand requirements → ask questions → plan → implement
- Reference CLAUDE.md and project docs already in context

**Don't:**
- Trial-and-error coding (generate → error → fix → error → fix)
- Re-establish information that's already known

## Quick Checklist

- [ ] Used Grep before Read when searching
- [ ] Avoided re-reading the same file
- [ ] Combined similar search patterns
- [ ] Scoped searches to relevant directories
- [ ] Kept responses concise
- [ ] Read types/patterns before generating code
- [ ] Referenced earlier context instead of re-reading
