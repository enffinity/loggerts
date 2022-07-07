import chalk from 'chalk'

const arrow = chalk.bold.blackBright('>')

export const info = (msg: string) => {
    console.log(`${chalk.bold.blue('INFO')} ${arrow} ${chalk.green(msg)}`);
}

export const err = (msg: string) => {
    console.log(`${chalk.bold.red('ERROR 🌋')} ${arrow} ${chalk.redBright(msg)} `);
}

export const warn = (msg: string) => {
    console.log(`${chalk.bold.yellow('WARN ⚠️')} ${arrow} ${chalk.yellowBright(msg)}`);
}

export const success = (msg: string) => {
    console.log(`${chalk.bold.green("SUCCESS ✅")} ${arrow} ${chalk.greenBright(msg)}`);
}

export const debug = (msg: string) => {
    console.log(`${chalk.bold.yellow('DEBUG')} ${arrow} ${chalk.yellowBright(msg)}`);
}

export const bomb = (msg: string, profanity?: boolean) => {
    console.log(`${chalk.bold.bgRed(`${profanity ? 'OH FUCK IT\'S ALL GONE WRONG' : 'IT\'S ALL GONE WRONG'}`)} ${arrow} ${chalk.redBright(msg)}`);
}

export const custom = (msg: string, title?: string) => {
    console.log(`${chalk.bold.blue(title ? title : 'CUSTOM LOG')} ${arrow} ${chalk.green(msg)}`);
}

export default {
    info,
    err,
    warn,
    success,
    debug,
    bomb,
    custom
}