# 🎄 Advent of Code 2025 - TypeScript

A TypeScript project template for solving Advent of Code puzzles.

## Setup

```bash
npm install
```

## Project Structure

```
├── src/
│   ├── index.ts        # Main runner
│   ├── types.ts        # Shared types
│   ├── day00/          # Demo day
│   │   ├── index.ts    # Solution (exports part1, part2)
│   │   └── day00.test.ts
│   ├── day01/
│   ├── day02/
│   └── ...
├── data/
│   ├── day00/
│   │   └── input.txt
│   ├── day01/
│   │   └── input.txt
│   └── ...
└── ...
```

## Running Solutions

Run a specific day:

```bash
npm run day 1    # Run day 01
npm run day 25   # Run day 25
npm run day 0    # Run demo day 00
```

## Testing

```bash
npm test          # Watch mode
npm run test:run  # Single run
```

## Debugging

### Setting Up Breakpoints

1. Open any `.ts` file in `src/`
2. Click in the gutter (left of line numbers) to set a red breakpoint
3. Press **F5** to start debugging

### Debug Configurations

Three launch configurations are provided in `.vscode/launch.json`:

| Configuration               | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| **Debug Current Day**       | Prompts for day number, runs that day with debugger attached |
| **Debug Day 00 (Demo)**     | Quickly debug the demo day without prompts                   |
| **Debug Current Test File** | Debug the test file you have open                            |

### Debugging Workflow

1. Set breakpoints in your solution (`src/dayXX/index.ts`)
2. Press **F5** or click "Run and Debug" in sidebar
3. Select a debug configuration
4. Use the debug toolbar to:
   - **Continue (F5)** - run to next breakpoint
   - **Step Over (F10)** - execute current line
   - **Step Into (F11)** - enter function calls
   - **Step Out (Shift+F11)** - exit current function
5. Inspect variables in the "Variables" panel or hover over them
6. Use the "Debug Console" to evaluate expressions

### Debugging Tests

1. Open a test file (e.g., `src/day00/day00.test.ts`)
2. Set breakpoints in the test or the solution code
3. Press **F5** and select "Debug Current Test File"

## Linting & Formatting

```bash
npm run lint      # Check for issues
npm run lint:fix  # Auto-fix issues
npm run format    # Format with Prettier
```

## Creating a New Day

### Quick Start (Recommended)

```bash
npm run new 1    # Creates day01 with all files
```

This creates:

- `src/day01/index.ts` - solution file
- `src/day01/day01.test.ts` - test file
- `data/day01/input.txt` - empty input file

Then just paste your puzzle input and start coding!

### Manual Setup

1. **Create the solution folder**: `src/dayXX/` (e.g., `src/day01/`)

2. **Create the solution file**: `src/dayXX/index.ts` with this structure:

```typescript
export function part1(lines: string[]): number | string {
  // Your solution here
  return 0;
}

export function part2(lines: string[]): number | string {
  // Your solution here
  return 0;
}
```

3. **Create the input folder and file**:
   - Create `data/dayXX/` folder
   - Paste your puzzle input into `data/dayXX/input.txt`

4. **Run your solution**:

```bash
npm run day 1
```

5. **(Optional) Add tests**: Create `src/dayXX/dayXX.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { part1, part2 } from "./index.js";

describe("Day 01", () => {
  const sampleInput = ["line1", "line2"];

  it("part1 solves sample", () => {
    expect(part1(sampleInput)).toBe(expectedAnswer);
  });

  it("part2 solves sample", () => {
    expect(part2(sampleInput)).toBe(expectedAnswer);
  });
});
```

### Using the Script vs Template

- **`npm run new <day>`** - Recommended! Automatically creates all files with correct naming
- **`src/template/`** - Manual reference template you can copy if needed

## Tips

- Input is provided as an array of strings (lines)
- Empty lines are preserved in the array
- Return value can be a `number` or `string`
- Use the demo day00 as a reference template
