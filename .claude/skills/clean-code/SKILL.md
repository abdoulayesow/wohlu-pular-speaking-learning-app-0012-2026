---
name: clean-code
description: Analyzes code against clean code standards and produces refactoring recommendations. Use when refactoring, cleaning up code, or checking code quality. Trigger with "clean up", "refactor", "clean code", "code quality".
allowed-tools: Read, Glob, Grep, Bash(pnpm typecheck), Bash(pnpm lint), Bash(pnpm test)
---

# Clean Code Analysis & Refactoring Skill

## Overview

This skill analyzes source code against the project's clean code standards and produces actionable refactoring recommendations. It identifies violations, suggests specific fixes with before/after examples, and grades overall code health.

## When to Use

- User explicitly requests cleanup: "clean up", "refactor", "clean code", "code quality"
- After completing a feature (pre-commit quality check)
- When reviewing code written by others or AI agents
- When a file grows beyond 150 lines

### Auto-Suggest Triggers

Proactively suggest running this skill when:
- A component exceeds 150 lines after edits
- Logic is duplicated across files
- Magic numbers or strings appear in new code
- `any` type is introduced

## Instructions

### Step 1: Identify Target Files

Determine which files to analyze:
- If the user specifies files, use those
- Otherwise, check recent changes: `git diff --name-only`
- For full audit, scan `src/`, `src/components/`, `src/hooks/`, `src/lib/`

### Step 2: Analyze Against Rules

Check each file against the **All Rules** section below. Reference the detailed guidelines in `guidelines/` for codebase-specific patterns and examples.

### Step 3: Check Refactoring Triggers

Review `checklists/refactoring-triggers.md` to identify structural improvements.

### Step 4: Produce Report

Output a structured report using the **Output Format** below.

### Step 5: Suggest Specific Fixes

For each issue, provide:
- File path and line number
- The rule being violated
- Before/after code snippet
- Severity (Critical / High / Medium / Low)

## All Rules

### TypeScript
- Use `unknown` instead of `any`; document exceptions with `// eslint-disable-next-line` + reason
- Use `interface` for object shapes, `type` for unions and intersections
- Use `as const` on constant objects
- Prefer type narrowing (`if ("prop" in obj)`) over type assertions (`as Foo`)
- Use exhaustive switch with `never` for union discrimination
- Type external data as `unknown` at system boundaries (API responses, Supabase queries)
- Always provide initial value for `useRef<T>(undefined)` in strict mode

### React Components
- Keep components under 150 lines; extract sub-components or hooks when they grow
- Define props with `interface ComponentNameProps` directly above the component
- One default export per component file; colocate helpers above the export
- Use functional state updates: `setState(prev => ...)` when new state depends on old
- Prefer Tailwind classes over inline `style={}`; use inline only for dynamic constants
- Never store derived state; compute from props or state directly in render
- Use `key` prop on list items with stable IDs (not array index when list is reordered)

### Custom Hooks
- One hook = one concern; name with `use` prefix describing the concern
- Always clean up side effects: `clearTimeout`, `clearInterval`, `unsubscribe` in cleanup
- Collect all timers in an array/Set and clear all in cleanup (not just the first)
- Return a typed interface: `interface UseHookNameReturn`

### Supabase Client Calls
- Structure: validate input -> call Supabase -> handle errors -> return data
- Use guard clauses with early returns for validation failures
- Check `.error` on every Supabase response before using `.data`
- Use row-level security (RLS) policies; never bypass with service role key in client code
- Type Supabase responses using generated types from the database schema

### Functions & Naming
- Functions do one thing; name with verb-first (`fetchPhrases`, `updateProgress`)
- Max 3 parameters; use options object for more
- Guard clauses at the top; return early for error cases
- Event handlers: `handle` prefix; callback props: `on` prefix
- Booleans: `is/has/should/can` prefix (`isOffline`, `hasAudio`)
- Constants: `UPPER_SNAKE_CASE` with JSDoc comment (`/** Milliseconds before... */`)
- Refs: `nounRef` suffix (`audioRef`, `timerRef`)
- Files: PascalCase for components, camelCase for hooks/utils

### Error Handling
- Validate inputs at system boundaries (Supabase responses, user input); trust internal code
- Use try/catch with rollback for optimistic updates (save `prev`, restore on catch)
- Return structured error responses from Supabase calls
- Never show raw error messages to children — warm, encouraging tone only

### Testing
- Test behavior, not implementation; name tests with "it should..." describing the outcome
- AAA pattern: Arrange (setup/mocks) -> Act (call function) -> Assert (verify result)
- Mock at module boundaries with `vi.mock()`; place mocks before imports
- Use `vi.stubEnv()` / `vi.unstubAllEnvs()` for environment variables
- Cover edge cases: null inputs, empty arrays, duplicate data, offline scenarios
- Mirror source directory structure for test files

### Styling
- Define animations in `index.css` with semantic keyframe names
- Use Tailwind utility classes for layout, spacing, typography
- Use `@theme` directive for custom design tokens (fonts, colors)
- Use constants from `lib/constants.ts` for dynamic/JS-driven values
- Touch targets minimum 48px (MIN_TOUCH_TARGET_PX constant)

### Code Organization
- No barrel exports (`index.ts`); import directly from specific modules
- Colocate component + hook + types when component-specific
- Shared hooks in `hooks/`, shared utilities in `lib/`, shared types in `lib/types.ts`
- Extract to `lib/constants.ts` when a value is used in 2+ files

## Output Format

```markdown
## Clean Code Analysis: [target description]

### Summary
[1-2 sentence overall assessment with letter grade A-F]

### Critical Issues
[Security vulnerabilities, data corruption risks, breaking patterns]

### High Priority
[Logic errors, type safety violations, missing cleanup, structural issues]

### Medium Priority
[Naming violations, missing constants, code organization]

### Recommendations
[Refactoring suggestions with before/after snippets]

### Positive Notes
[Patterns followed well, good practices observed]
```
