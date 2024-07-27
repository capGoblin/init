package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"path/filepath"
	"time"

	"github.com/spf13/cobra"
)

// runCommand executes a shell command in the specified directory
func runCommand(cmdStr string, dir string) error {
	cmd := exec.Command("sh", "-c", cmdStr)
	cmd.Dir = dir // Set the working directory for the command
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

// waitForFile checks if a file exists, retrying for a given duration
func waitForFile(filePath string, timeout time.Duration) error {
	start := time.Now()
	for time.Since(start) < timeout {
		if _, err := os.Stat(filePath); !os.IsNotExist(err) {
			return nil
		}
		time.Sleep(1 * time.Second) // Wait before retrying
	}
	return fmt.Errorf("timeout waiting for file %s", filePath)
}


// writeFile writes content to a file at the specified path
func writeFile(filePath string, content string) error {
	return ioutil.WriteFile(filePath, []byte(content), 0644)
}

// createDirIfNotExist creates a directory if it does not already exist
func createDirIfNotExist(dirPath string) error {
	if _, err := os.Stat(dirPath); os.IsNotExist(err) {
		return os.MkdirAll(dirPath, os.ModePerm)
	}
	return nil
}

func main() {
	var nextName string
	var viteName string
	var shadcn bool
	var mui bool
	var tailwind bool
	var backendGo bool
	var databasePg bool

	var rootCmd = &cobra.Command{
		Use:   "init",
		Short: "Initialize a new project with predefined settings",
		Run: func(cmd *cobra.Command, args []string) {
			if nextName == "" && viteName == "" && !backendGo {
				fmt.Println("Error: Project name is required")
				cmd.Help()
				return
			}

			if viteName != "" {
				// Step 1: Create Vite project
				viteCmdStr := fmt.Sprintf("npm create vite@latest %s -- --template react-ts", viteName)
				fmt.Printf("Executing: %s\n", viteCmdStr)
				if err := runCommand(viteCmdStr, "."); err != nil {
					fmt.Printf("Error creating Vite project: %v\n", err)
					return
				}

				// Ensure the Vite project directory exists
				viteDir := fmt.Sprintf("./%s", viteName)
				if _, err := os.Stat(viteDir); os.IsNotExist(err) {
					fmt.Printf("Error: The directory %s does not exist\n", viteDir)
					return
				}

				// Step 2: Wait for package.json to be created
				packageJSONPath := fmt.Sprintf("%s/package.json", viteDir)
				fmt.Printf("Waiting for %s to be created...\n", packageJSONPath)
				if err := waitForFile(packageJSONPath, 30*time.Second); err != nil {
					fmt.Printf("Error: %v\n", err)
					return
				}



				if tailwind || shadcn {
					// Step 3: Install Tailwind CSS dependencies
					tailwindCmdStr := "npm install -D tailwindcss postcss autoprefixer"
					fmt.Printf("Executing: %s\n", tailwindCmdStr)
					if err := runCommand(tailwindCmdStr, viteDir); err != nil {
						fmt.Printf("Error installing Tailwind CSS: %v\n", err)
						return
					}

					// Step 4: Initialize Tailwind CSS
					initTailwindCmdStr := "npx tailwindcss init -p"
					fmt.Printf("Executing: %s\n", initTailwindCmdStr)
					if err := runCommand(initTailwindCmdStr, viteDir); err != nil {
						fmt.Printf("Error initializing Tailwind CSS: %v\n", err)
						return
					}

					// Step 5: Update tailwind.config.js
					tailwindConfigContent := `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
					tailwindConfigPath := fmt.Sprintf("%s/tailwind.config.js", viteDir)
					if err := writeFile(tailwindConfigPath, tailwindConfigContent); err != nil {
						fmt.Printf("Error writing to tailwind.config.js: %v\n", err)
						return
					}

					// Step 6: Update src/index.css
					indexCSSContent := `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}`
					indexCSSPath := fmt.Sprintf("%s/src/index.css", viteDir)
					if err := writeFile(indexCSSPath, indexCSSContent); err != nil {
						fmt.Printf("Error writing to src/index.css: %v\n", err)
						return
					}
				}

				if shadcn {
					// Step 5: Update tailwind.config.js
					tailwindConfigContent := `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`
					tailwindConfigPath := fmt.Sprintf("%s/tailwind.config.js", viteDir)
					if err := writeFile(tailwindConfigPath, tailwindConfigContent); err != nil {
						fmt.Printf("Error writing to tailwind.config.js: %v\n", err)
						return
					}

					// Step 6: Install class-variance-authority, clsx, and tailwind-merge
					cvaCmdStr := "npm install class-variance-authority clsx tailwind-merge"
					fmt.Printf("Executing: %s\n", cvaCmdStr)
					if err := runCommand(cvaCmdStr, viteDir); err != nil {
						fmt.Printf("Error installing class-variance-authority, clsx, and tailwind-merge: %v\n", err)
						return
					}
										// Step 7: Install @types/node
										typesNodeCmdStr := "npm i -D @types/node"
										fmt.Printf("Executing: %s\n", typesNodeCmdStr)
										if err := runCommand(typesNodeCmdStr, viteDir); err != nil {
											fmt.Printf("Error installing @types/node: %v\n", err)
											return
										}
					
										// Step 8: Update tsconfig.app.json
										tsconfigAppContent := `{
					  "compilerOptions": {
						"composite": true,
						"tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
						"target": "ES2020",
						"useDefineForClassFields": true,
						"lib": ["ES2020", "DOM", "DOM.Iterable"],
						"module": "ESNext",
						"skipLibCheck": true,
					
						/* Bundler mode */
						"moduleResolution": "bundler",
						"allowImportingTsExtensions": true,
						"resolveJsonModule": true,
						"isolatedModules": true,
						"moduleDetection": "force",
						"noEmit": true,
						"jsx": "react-jsx",
					
						/* Linting */
						"strict": true,
						"noUnusedLocals": true,
						"noUnusedParameters": true,
						"noFallthroughCasesInSwitch": true,
					
						"baseUrl": ".",
						"paths": {
						  "@/*": ["./src/*"]
						}
					  },
					  "include": ["src"]
					}`
										tsconfigAppPath := fmt.Sprintf("%s/tsconfig.app.json", viteDir)
										if err := writeFile(tsconfigAppPath, tsconfigAppContent); err != nil {
											fmt.Printf("Error writing to tsconfig.app.json: %v\n", err)
											return
										}
					
										// Step 9: Update tsconfig.json
										tsconfigContent := `{
					  "files": [],
					  "references": [
						{
						  "path": "./tsconfig.app.json"
						},
						{
						  "path": "./tsconfig.node.json"
						}
					  ],
					  "compilerOptions": {
						"baseUrl": ".",
						"paths": {
						  "@/*": ["./src/*"]
						}
					  }
					}`
										tsconfigPath := fmt.Sprintf("%s/tsconfig.json", viteDir)
										if err := writeFile(tsconfigPath, tsconfigContent); err != nil {
											fmt.Printf("Error writing to tsconfig.json: %v\n", err)
											return
										}
					
										// Step 10: Update tsconfig.node.json
										tsconfigNodeContent := `{
					  "compilerOptions": {
						"composite": true,
						"tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
						"skipLibCheck": true,
						"module": "ESNext",
						"moduleResolution": "bundler",
						"allowSyntheticDefaultImports": true,
						"strict": true,
						"noEmit": true,
						"baseUrl": ".",
						"paths": {
						  "@/*": ["./src/*"]
						}
					  },
					  "include": ["vite.config.ts"]
					}`
										tsconfigNodePath := fmt.Sprintf("%s/tsconfig.node.json", viteDir)
										if err := writeFile(tsconfigNodePath, tsconfigNodeContent); err != nil {
											fmt.Printf("Error writing to tsconfig.node.json: %v\n", err)
											return
										}
					
										// Step 11: Update vite.config.ts
										viteConfigContent := `import path from "path";
					import react from "@vitejs/plugin-react";
					import { defineConfig } from "vite";
					
					export default defineConfig({
					  plugins: [react()],
					  resolve: {
						alias: {
						  "@": path.resolve(__dirname, "./src"),
						},
					  },
					});`
										viteConfigPath := fmt.Sprintf("%s/vite.config.ts", viteDir)
										if err := writeFile(viteConfigPath, viteConfigContent); err != nil {
											fmt.Printf("Error writing to vite.config.ts: %v\n", err)
											return
										}
					
										// Step 12: Create components.json
										componentsJSONContent := `{
					  "$schema": "https://ui.shadcn.com/schema.json",
					  "style": "default",
					  "rsc": false,
					  "tsx": true,
					  "tailwind": {
						"config": "tailwind.config.js",
						"css": "app/index.css",
						"baseColor": "slate",
						"cssVariables": true,
						"prefix": ""
					  },
					  "aliases": {
						"components": "@/components",
						"utils": "@/lib/utils"
					  }
					}`
										componentsJSONPath := fmt.Sprintf("%s/components.json", viteDir)
										if err := writeFile(componentsJSONPath, componentsJSONContent); err != nil {
											fmt.Printf("Error writing to components.json: %v\n", err)
											return
										}


															// Step 13: Create src/lib/utils.ts
					utilsTSContent := `import { type ClassValue, clsx } from "clsx"
					import { twMerge } from "tailwind-merge"
					
					export function cn(...inputs: ClassValue[]) {
					  return twMerge(clsx(inputs))
					}`
										utilsTSPath := fmt.Sprintf("%s/src/lib/utils.ts", viteDir)
										if err := createDirIfNotExist(filepath.Dir(utilsTSPath)); err != nil {
											fmt.Printf("Error creating directories for utils.ts: %v\n", err)
											return
										}
										if err := writeFile(utilsTSPath, utilsTSContent); err != nil {
											fmt.Printf("Error writing to src/lib/utils.ts: %v\n", err)
											return
										}
				}

				if mui {
					// Step 14: Install MUI dependencies
					muiCmdStr := "npm install @mui/material @emotion/react @emotion/styled"
					fmt.Printf("Executing: %s\n", muiCmdStr)
					if err := runCommand(muiCmdStr, viteDir); err != nil {
						fmt.Printf("Error installing MUI dependencies: %v\n", err)
						return
					}
				}

				fmt.Printf("Project %s initialized successfully with Vite!\n", viteName)
				return
			}

			if nextName != "" {
				// Default behavior: Create Next.js app
				createCmdStr := fmt.Sprintf("npx create-next-app@latest %s --typescript --eslint --tailwind --app --no-src-dir --no-import-alias", nextName)
				fmt.Printf("Executing: %s\n", createCmdStr)
				if err := runCommand(createCmdStr, "."); err != nil {
					fmt.Printf("Error creating Next.js app: %v\n", err)
					return
				}

				// Ensure the app directory exists
				appDir := fmt.Sprintf("./%s", nextName)
				if _, err := os.Stat(appDir); os.IsNotExist(err) {
					fmt.Printf("Error: The directory %s does not exist\n", appDir)
					return
				}

				// Step 2: Wait for package.json to be created
				packageJSONPath := fmt.Sprintf("%s/package.json", appDir)
				fmt.Printf("Waiting for %s to be created...\n", packageJSONPath)
				if err := waitForFile(packageJSONPath, 30*time.Second); err != nil {
					fmt.Printf("Error: %v\n", err)
					return
				}

				// Step 3: Run Shadcn UI init if --shadcn flag is set
				if shadcn {
					shadcnCmdStr := "npx shadcn-ui@latest init -d"
					fmt.Printf("Executing: %s\n", shadcnCmdStr)
					if err := runCommand(shadcnCmdStr, appDir); err != nil {
						fmt.Printf("Error running shadcn-ui init: %v\n", err)
						return
					}
				}

				// Step 4: Install MUI packages if --mui flag is set
				if mui {
					muiCmdStr := "npm install @mui/material @emotion/react @emotion/styled"
					fmt.Printf("Executing: %s\n", muiCmdStr)
					if err := runCommand(muiCmdStr, appDir); err != nil {
						fmt.Printf("Error installing MUI packages: %v\n", err)
						return
					}
				}

				fmt.Printf("Project %s initialized successfully!\n", nextName)
			}

			if backendGo {
				// Step 1: Create Go project directory
				goDir := "go-backend"
				if err := createDirIfNotExist(goDir); err != nil {
					fmt.Printf("Error creating Go project directory: %v\n", err)
					return
				}

				// Step 2: Initialize Go module
				fmt.Printf("Initializing Go module...\n")
				if err := runCommand("go mod init go-backend", goDir); err != nil {
					fmt.Printf("Error initializing Go module: %v\n", err)
					return
				}

				// Step 3: Create basic Go files
				mainGoContent := `package main

import "fmt"

func main() {
	fmt.Println("Hello, Go backend!")
}
`
				if err := writeFile(filepath.Join(goDir, "main.go"), mainGoContent); err != nil {
					fmt.Printf("Error writing to main.go: %v\n", err)
					return
				}

				// Step 4: Initialize Go module
				if err := runCommand("go mod tidy", goDir); err != nil {
					fmt.Printf("Error running go mod tidy: %v\n", err)
					return
				}

				// Step 5: Create Dockerfile for Go backend
				dockerfileContent := `FROM golang:1.20-alpine

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o main .

EXPOSE 8080

CMD ["./main"]
`
				if err := writeFile(filepath.Join(goDir, "Dockerfile"), dockerfileContent); err != nil {
					fmt.Printf("Error writing to Dockerfile: %v\n", err)
					return
				}

				// Step 6: Add PostgreSQL configuration if requested
				if databasePg {
					fmt.Printf("Adding PostgreSQL configuration...\n")

					// Create a basic configuration file for PostgreSQL
					configContent := `package config

import (
	"os"
)

type Config struct {
	DatabaseURL string
}

func LoadConfig() (Config, error) {
	return Config{
		DatabaseURL: getEnv("DATABASE_URL", "postgres://user:pass@localhost:5432/dbname"),
	}, nil
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}
`
					if err := writeFile(filepath.Join(goDir, "config.go"), configContent); err != nil {
						fmt.Printf("Error writing to config.go: %v\n", err)
						return
					}
				}

				fmt.Println("Go backend initialization completed successfully!")
			}
		},
	}

	rootCmd.Flags().StringVarP(&nextName, "next", "n", "", "Name of the Next.js project")
	rootCmd.Flags().StringVarP(&viteName, "vite", "v", "", "Name of the Vite project")
	rootCmd.Flags().BoolVar(&shadcn, "shadcn", false, "Run shadcn-ui init with -d flag after creating the Next.js app")
	rootCmd.Flags().BoolVar(&mui, "mui", false, "Install MUI packages after creating the Next.js app")
	rootCmd.Flags().BoolVar(&tailwind, "tw", false, "Install Tailwind CSS in a Vite project")
	rootCmd.Flags().BoolVar(&backendGo, "b", false, "Set up a Go backend")
	rootCmd.Flags().BoolVar(&databasePg, "d", false, "Include PostgreSQL database")

	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
