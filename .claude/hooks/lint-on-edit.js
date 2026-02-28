#!/usr/bin/env node
// PostToolUse hook: Run ESLint on .ts/.tsx files after Write or Edit tool calls.
// Returns advisory lint feedback via systemMessage (non-blocking).

const { execSync } = require("child_process");
const path = require("path");

const LINTABLE_EXTENSIONS = [".ts", ".tsx"];

function main() {
  let input = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (chunk) => { input += chunk; });
  process.stdin.on("end", () => {
    try {
      const event = JSON.parse(input);
      const filePath = event?.tool_input?.file_path ?? "";

      if (!filePath) {
        process.exit(0);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      if (!LINTABLE_EXTENSIONS.includes(ext)) {
        process.exit(0);
        return;
      }

      const result = execSync(`pnpm exec eslint --no-warn-ignored "${filePath}" --format compact`, {
        encoding: "utf8",
        timeout: 25_000,
        stdio: ["pipe", "pipe", "pipe"],
      });

      // No lint errors
      process.exit(0);
    } catch (error) {
      // eslint exits non-zero when it finds issues
      const output = (error.stdout ?? "") + (error.stderr ?? "");
      const lines = output.trim().split("\n").filter(Boolean);

      if (lines.length > 0) {
        const response = JSON.stringify({
          systemMessage: `ESLint issues:\n${lines.slice(0, 10).join("\n")}${lines.length > 10 ? `\n... and ${lines.length - 10} more` : ""}`,
        });
        process.stdout.write(response);
      }

      process.exit(0);
    }
  });
}

main();
