1. npx create-next-app@latest

2. installation npm i @mui/material @emotion/react @emotion/styled lucid-react numeral date-fns axios recharts react-dnd react-dnd-html5-backend gantt-task-react @mui/x-data-grid
3. npm i -D @types/node @types/uuid @types/numeral typescript dependeecy
4. The command `npm i -D @types/node @types/uuid @types/numeral typescript` installs the following development dependencies in your project:

### 1. **`@types/node`**:

- This package contains TypeScript type definitions for Node.js.
- It provides the necessary types for using Node.js core modules (like `fs`, `path`, `http`, etc.) in a TypeScript project.
- **Purpose**: If you're writing TypeScript code that interacts with Node.js, installing `@types/node` ensures that TypeScript understands the types for Node.js-specific functionality, such as `process`, `Buffer`, etc.

### 2. **`@types/uuid`**:

- This package provides TypeScript type definitions for the `uuid` library.
- **Purpose**: If you're using the `uuid` package to generate unique identifiers in your TypeScript code, installing this package ensures that TypeScript recognizes the correct types for `uuid` functions (such as `uuid.v4()`).

### 3. **`@types/numeral`**:

- This package provides TypeScript type definitions for the `numeral` library.
- **Purpose**: If you're using the `numeral` library to format numbers (e.g., adding commas to numbers, formatting currency, etc.), this package ensures that TypeScript understands the types used in the `numeral` functions.

### 4. **`typescript`**:

- This installs TypeScript itself as a development dependency.
- **Purpose**: TypeScript is the language that adds static typing to JavaScript. By installing it, you are enabling the ability to write TypeScript code (`.ts` or `.tsx` files) in your project. You will also get access to TypeScript's compiler (`tsc`) to transpile TypeScript code to JavaScript.

### The `-D` flag (short for `--save-dev`):

- This flag installs the specified packages as **development dependencies**, meaning these packages are only needed during development and not in production (e.g., for compiling or type-checking TypeScript code).
- These packages will be added to the `devDependencies` section of your `package.json` file.

### Summary of what this command does:

- It installs **TypeScript**, and the necessary **type definitions** for `Node.js`, `uuid`, and `numeral` to ensure your TypeScript code works correctly with those libraries and can use them with proper type-checking and IntelliSense support.

--------Summary----- 5.

6. Made changes in tailwind config js adding custom color
7. tsrafce ,To get the component bydefault in vscode ,Whatever u put in layout.js is going to be there for every page so we build dashboard wrapper cointaing sidebar and navbar and imported it into layout.tsx
8. create @/app/(components)/Navbar (so when we put brackets it mean we don't want it to be in our directory) also @ starts from the src directory
9. creating sidebar and navbar
