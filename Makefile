APP_DIR := app
NPM := npm --prefix $(APP_DIR)

.PHONY: help install dev build run start lint clean

help:
	@printf "Available targets:\n"
	@printf "  make install  Install dependencies from the lockfile\n"
	@printf "  make dev      Start the development server\n"
	@printf "  make build    Create a production build\n"
	@printf "  make run      Build and start the production server\n"
	@printf "  make start    Start the existing production build\n"
	@printf "  make lint     Run ESLint\n"
	@printf "  make clean    Remove generated Next.js output\n"

install:	
	$(NPM) ci

dev:
	$(NPM) run dev

build:
	$(NPM) run build

run: build
	$(NPM) run start

start:
	$(NPM) run start

lint:
	$(NPM) run lint

clean:
	rm -rf $(APP_DIR)/.next