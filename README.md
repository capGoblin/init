# init

The init tool is a command-line interface for initializing new web projects with popular frameworks and configurations. It supports both Next.js and Vite projects and includes options for additional configurations like Shadcn UI and MUI (Material-UI), and can also set up backend projects using Node.js or Go with optional PostgreSQL integration.

## Features (so far)

### Frontend Initialization:

- Next.js Projects: Bootstrap a new Next.js application with TypeScript, ESLint, Tailwind CSS, and additional configurations like Shadcn UI and MUI.
- Vite Projects: Set up a new Vite project with React and TypeScript, with optional Shadcn UI integration.

### Backend Initialization:

- Go Projects: Create a new Go backend project, optionally with PostgreSQL integration.
- Node.js Projects: Set up a new Node.js backend project, optionally with PostgreSQL integration.

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
go build -o init
```

## Usage

### Initialize a Next.js Project

To create a new Next.js project with specific settings, use:

```sh
./init init -f next [flags]
```

Flags:
--shadcn: Run shadcn-ui init -d after creating the Next.js app.
--mui: Install Material-UI packages (@mui/material, @emotion/react, and @emotion/styled) after creating the Next.js app.

Example:

```sh
./init init -f next --shadcn --mui
```

### Initialize a Vite Project

To create a new Vite project with React and TypeScript, use:

```sh
./init init -f vite [flags]
```

Flags:
--vite: Create a Vite project with React and TypeScript.
--tw: To add tailwindcss to the vite app
--shadcn: Run Shadcn UI initialization after creating the Next.js app.
--mui: Install MUI packages after creating the Next.js app.

Example:

```sh
./init init -f -vite --tw --mui
```

### Initialize a Node.js Backend

To create a new Node.js backend project with optional PostgreSQL support, use:

```sh
./init init -b node [flags]
```

Flags:
--pg: Include PostgreSQL database integration.

Example:

```sh
./init init -b node --pg
```

### Initialize a Go Backend

To create a new Go backend project with optional PostgreSQL support, use:

```sh
./init init -b go [flags]
```

Flags:
--pg: Include PostgreSQL database integration.

Example:

```sh
./init init -b go --pg
```

### Initialize both frontend and backend in a single command:

```sh
./init init -f vite --shadcn -b go --pg
./init init -f next --mui -b node --pg
```

### Additionally, the CLI can be installed as a Node package on any platform, including Linux. For this to work, you will need to have [Node JS](https://nodejs.org/en) installed on your machine.

```sh
npm install --global @capgoblin/init
```

The starter template code was used from [this GitHub repository](https://github.com/leoMirandaa/shadcn-landing-page)
