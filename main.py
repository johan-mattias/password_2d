'''
program to check passwords
- at least 8 characters
- at least one number
- at least one letter

ex:
1234qwer -> accept (pass)
12345678 -> reject (pass)
qwertyui -> reject (fail)
123qwe   -> reject (pass)


'''

''' password = "123qwe"

basic.show_string(password) '''

passwords = ["1234qwer","12345678","qwertyui","123qwe",]
passed_tests = [True, False, False, False]

basic.show_string( run_tests(passwords, passed_tests))

def run_tests(passwords, passed_tests):
    test_output = []
    for password in passwords:
        test_output.append(check_password(password))
    
    passed = True
    for index in range(len(passed_tests)):
        if passed_tests[index] != test_output[index]:
            print("Fail test case #"+ index+ ": Result "+ test_output[index] + " expected"+ passed_tests[index])
            passed = False

    return "pass" if passed == True else "fail"
    


def check_password(password: str):
    #len is length
    if(len(password) < 8):
        return False

    # list of letters
    # you're welcome
    letters = ['a', 'b', 'c', 'd', 
            'e', 'f', 'g', 'h', 
            'i', 'j', 'k', 'l', 
            'm', 'n', 'o', 'p', 
            'q', 'r', 's', 't', 
            'u', 'v', 'w', 'x', 
            'y', 'z']

    # list of numbers
    numbers = [1, 2, 3, 4, 5, 
            6, 7, 8, 9, 0]

    letter_in_password = False
    number_in_password = False

    for character in password:
        if(character in letters):
            letter_in_password = True

    for num_character in password:
        num_char = int(num_character)
        if(num_char in numbers):
            number_in_password = True

    if(letter_in_password == False):
        return False

    if(number_in_password == False):
        return False

    return True
