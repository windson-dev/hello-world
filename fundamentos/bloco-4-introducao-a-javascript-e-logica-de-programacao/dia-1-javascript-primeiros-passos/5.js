const firstSide = 60
const secondSide = 60
const thirdSide = 60

const triangule = firstSide + secondSide + thirdSide

if (triangule === 180){
    console.log(true)
} else if (triangule !== 180) {
    console.log(false)
} else {
    console.log('Angulo errado')
}