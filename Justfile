set dotenv-load := true
export PATH := "./node_modules/.bin:" + env_var('PATH')

# Run the dev server
run:
    vite

check:
    tsc

install:
    pnpm install