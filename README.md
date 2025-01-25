# Search test suite

## Setup

Test suite is based on Playwright, you will need a working NodeJS environment (version 22.00 at least).

### Install dependencies

Install project dependencies from `package.json`:

```shell
npm install
```

Install Playwright browsers:

```shell
npx playwright install
```

### Setup URL

Copy file `.env-example` to `.env` and set `URL` environment variable with correct domain.

Alternatively `URL` can be set directly in commandline:

```
URL="https://www.le-domain.net/ringtones-and-wallpapers" npx playwright test
```

### Running tests

Tests are placed in `tests` directory, with `spec.ts` extension.

To run all tests:

```shell
npm run test
```

Or each test can be run separately using script in `package.json`:

Free wallpaper test:

```shell
npm run test:free
```

Paid wallpaper test:

```shell
npm run test:paid
```

Wallpaper download test:

```shell
npm run test:download
```

### Report

Each test run produces HTML report with execution details. To view it run:

```shell
npm run report
```
