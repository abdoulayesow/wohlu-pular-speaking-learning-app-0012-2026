# Command Accuracy Guidelines

Get it right the first time through verification and pattern-matching.

## Core Rules

1. **Verify before executing** — Check assumptions before running commands
2. **Follow existing patterns** — Match what already works in the codebase
3. **Read definitions first** — Understand types/interfaces before implementing
4. **Use forward slashes** — Always, even on Windows
5. **Test incrementally** — Validate each step before proceeding

## Path Accuracy

**Do:**
- Use forward slashes: `src/components/PhraseCard.tsx`
- Verify paths exist: `Glob pattern="src/components/Phrase*"` then `Read`
- Match exact case from Glob results (Linux is case-sensitive)

**Don't:**
- Use backslashes: `src\components\PhraseCard.tsx`
- Assume paths without checking
- Guess case: `PhraseCard.tsx` vs `phraseCard.tsx`

## Import Accuracy

**Do:**
- Grep for existing imports first: `Grep pattern="import.*supabase" path="src/"`
- Verify module exports (default vs named) before importing
- Match the import style used in similar files

**Don't:**
- Guess import paths without verification
- Mix default/named imports: `import supabase` when module exports `export const supabase`

## Type Safety

**Do:**
- Read interface definitions before implementing
- Check how parent components pass data
- Match property names exactly from existing code

**Don't:**
- Guess interface shapes
- Assume property names without reading type definitions

## Edit Tool

**Do:**
- Read the file immediately before editing
- Copy `old_string` exactly from Read output (including whitespace)
- Include enough surrounding context to make the match unique

**Don't:**
- Change indentation in `old_string` (2 spaces vs 4 spaces = "string not found")
- Edit without reading first
- Use too-short `old_string` that matches multiple locations

## Regex / Grep

**Do:**
- Escape special characters: `Grep pattern="interface\\{\\}"`
- Build patterns incrementally: start simple, add specificity
- Use appropriate scope and file type filters

**Don't:**
- Use unescaped braces/parens in patterns
- Write overly complex regex when simple patterns suffice

## Pre-Execution Checklist

**Read/Edit/Write:**
- [ ] Path uses forward slashes
- [ ] File/directory exists (verified with Glob)
- [ ] Case matches exactly

**Edit specifically:**
- [ ] Recently read the file
- [ ] `old_string` copied exactly from Read output
- [ ] `old_string` is unique in the file

**Imports/Types:**
- [ ] Checked existing imports in similar files
- [ ] Read interface definitions
- [ ] Verified property names exist

## Recovery

When a command fails:
1. Read the error message — it usually tells you exactly what's wrong
2. Verify your assumptions (path exists? correct case? right property name?)
3. Check existing patterns in similar files
4. Fix and move on — don't repeat the same mistake
