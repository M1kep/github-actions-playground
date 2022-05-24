// Inclusive
const checkUntil = 10

for (let i = 0; i <= checkUntil; i++) {
    envValue = process.env[`SECRET`]
    console.log(`Value is ${i}: ${envValue == i && envValue !== ''}`)
}