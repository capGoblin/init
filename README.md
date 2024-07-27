# init

The init tool is a command-line interface for initializing new web projects with popular frameworks and configurations. It supports both Next.js and Vite projects and includes options for additional configurations like Shadcn UI and MUI (Material-UI).

## Features (so far)

Create Next.js Projects: Quickly bootstrap a new Next.js application with TypeScript, ESLint, Tailwind CSS, and additional configurations. <br>
Create Vite Projects: Set up a new Vite project with React and TypeScript. <br>
Shadcn UI Initialization: Automatically run Shadcn UI setup if needed. <br>
Install MUI Packages: Install Material-UI packages for your project.

## Installation

Ensure you have Go installed on your system.

Clone the repository:

```sh
git clone <repository-url>
cd <repository-directory>
```

Build the CLI tool:

```sh
cd cmd
go build -o next-cli
```

## Usage

### Initialize a Next.js Project

To create a new Next.js project with specific settings, use:

```sh
./init init -n <app-name> [flags]
```

Flags:
--shadcn: Run shadcn-ui init -d after creating the Next.js app.
--mui: Install Material-UI packages (@mui/material, @emotion/react, and @emotion/styled) after creating the Next.js app.

Example:

```sh
./init init -n my-next-app --shadcn --mui
```

### Initialize a Vite Project

To create a new Vite project with React and TypeScript, use:

```sh
./init init -v <app-name> [flags]
```

Flags:
-v, --vite: Create a Vite project with React and TypeScript.
--tw: To add tailwindcss to the vite app
--shadcn: Run Shadcn UI initialization after creating the Next.js app.
--mui: Install MUI packages after creating the Next.js app.

Example:

```sh
./init init -v my-next-app --tw --mui
```
