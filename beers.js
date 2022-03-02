let message = 'beers'
let beers = 99

while (beers > 0) {
    console.log('There are ' + beers + ' ' + message + ' in the wall')
    console.log('Pass one around')
    beers --
    console.log(beers + ' ' + message + ' left in the wall')
}
