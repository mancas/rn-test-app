const childProcess = require('child_process')
const chalk = require('chalk')
const fs = require('fs')
const emoji = require('node-emoji')

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/res/images')
    .filter(file => {
      return file.endsWith('.png')
    })
    .map(file => {
      return file
        .replace('@2x.png', '')
        .replace('@3x.png', '')
        .replace('.png', '')
    })
  return Array.from(new Set(array))
}

const generate = () => {
  console.log(
    '1- Generating images...',
    emoji.get('hand_with_index_and_middle_fingers_crossed'),
  )
  let properties = imageFileNames()
    .map(name => {
      return `${name}: require('./images/${name}.png')`
    })
    .join(',\n  ')
  const string = `
    export const images = {
      ${properties}
    }
  `
  console.log(
    '2- Writing file...',
    emoji.get('hand_with_index_and_middle_fingers_crossed'),
  )
  fs.writeFileSync('src/res/images.ts', string, 'utf8')
  childProcess.execSync(
    './node_modules/.bin/prettier --single-quote --no-semi --write src/res/images.ts',
    {
      cwd: process.env.PWD,
      stdio: 'inherit',
    },
  )
  console.log(emoji.get('sunglasses'), chalk.green('Images ready! :)'))
}

generate()
