/** 
program to check passwords
- at least 8 characters
- at least one number
- at least one letter

ex:
1234qwer -> accept (pass)
12345678 -> reject (pass)
qwertyui -> reject (fail)
123qwe   -> reject (pass)



 */
let password = "123qwe"
basic.showString(password)
// len is length
if (password.length < 8) {
    basic.showString("Reject")
}

//  list of letters
//  you're welcome
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//  list of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let letter_in_password = false
let number_in_password = false
for (let character of password) {
    if (letters.indexOf(character) >= 0) {
        letter_in_password = true
    }
    
}
if (letter_in_password == false) {
    basic.showString("reject")
}

basic.showString("Accept")
