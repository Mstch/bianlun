/**
 * index
 * @author oldj
 * @blog https://oldj.net
 */

'use strict'

const path = require('path')
const exec = require('child_process').exec
function tryToGetFonts(s) {

    let a = s.split('\n')
    if (a[0].includes('Microsoft')) {
        a.splice(0, 3)
    }
    console.log('杀杀杀')
    console.log(a)
    a = a.map(i => {

        i = i
            .split('\t')[0]
            .split(path.sep)
        i = i[i.length - 1]

        if (!i.match(/^[\w\s]+$/)) {
            i = ''
        }

        i = i
            .replace(/^\s+|\s+$/g, '')
            .replace(/(Regular|常规)$/i, '')
            .replace(/^\s+|\s+$/g, '')

        if (i.includes(' ')) {
            i = `"${i}"`
        }

        return i
    })

    return a.filter(i => i)
}

export default () => new Promise((resolve, reject) => {
    let fn = path.join(__dirname, 'fontlist.vbs')
    //let c = fs.readFileSync(path.join('for_win', 'fonts.vbs'), 'utf-8')
    //fs.writeFileSync(fn, c, 'utf-8')

    let cmd = `cscript "${fn}"`
    exec(cmd, {
        encoding: "GBK"
    }, (err, stdout, stderr) => {
        let fonts = []
        console.log(stdout)
        if (err) {
            reject(err)
            return
        }

        if (stdout) {
            //require('electron').dialog.showMessageBox({message: 'stdout: ' + stdout})
            fonts = fonts.concat(tryToGetFonts(stdout))
        }
        if (stderr) {
            //require('electron').dialog.showMessageBox({message: 'stderr: ' + stderr})
            fonts = fonts.concat(tryToGetFonts(stderr))
        }

        fonts.sort()
        resolve(fonts)
    })
})