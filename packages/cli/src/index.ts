/* eslint-disable no-console */
import fs from "fs"
// import clc from "cli-color"
import chalk from "chalk"
import { makeDefaultTheme } from "@horns/theme"

// const info = clc.blue
// const success = clc.green
// const warning = clc.yellow
// const danger = clc.red

const info = chalk.blue
const success = chalk.green
const warning = chalk.yellow
const danger = chalk.red

console.log("args: ", process.argv)

const input = process.argv.length >= 3 ? process.argv[2] : "config.ts"
const output = process.argv.length >= 4 ? process.argv[3] : "theme.json"

console.log(info(`reading theme config from: ${input}`))
console.log(danger("(lol, jk)"))
console.log(info(`writing theme to: ${output}`))
console.log(warning("(fr, fr, no cap)"))

// console.log(`reading theme config from: ${input}`)
// console.log("(lol, jk)")
// console.log(`writing theme to: ${output}`)
// console.log("(fr, fr, no cap)")

fs.writeFileSync(output, JSON.stringify(makeDefaultTheme()))
console.log(success("done"))
// console.log("done")
