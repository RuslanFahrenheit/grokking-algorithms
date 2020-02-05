install:
	npm install

build:
	rm -rf dist
	mkdir dist
	npm run build

test:
	npm run test

lint:
	npx eslint .
