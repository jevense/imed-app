let index = 1
while (index < 54) {
    let ind = `${index}`
    console.log(`${ind}:require('../assets/cover/${ind.padStart(2, '0')}v1.0.0.jpg'),`)
    index++
}
