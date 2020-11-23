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
/**  password = "123qwe"

basic.show_string(password) 
 */
let passwords = ["1234qwer", "12345678", "qwertyui", "123qwe"]
let passed_tests = [true, false, false, false]
basic.showString(run_tests(passwords, passed_tests))
function run_tests(passwords: string[], passed_tests: boolean[]): string {
    let test_output = []
    for (let password of passwords) {
        test_output.push(check_password(password))
    }
    let passed = true
    for (let index = 0; index < passed_tests.length; index++) {
        if (passed_tests[index] != test_output[index]) {
            console.log("Fail test case #" + index + ": Result " + test_output[index] + " expected" + passed_tests[index])
            passed = false
        }
        
    }
    return passed == true ? "pass" : "fail"
}

function check_password(password: string): boolean {
    let num_char: number;
    // len is length
    if (password.length < 8) {
        return false
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
    for (let num_character of password) {
        num_char = parseInt(num_character)
        if (numbers.indexOf(num_char) >= 0) {
            number_in_password = true
        }
        
    }
    if (letter_in_password == false) {
        return false
    }
    
    if (number_in_password == false) {
        return false
    }
    
    return true
}

