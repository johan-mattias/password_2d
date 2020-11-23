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

password = "123qwe"

basic.show_string(password)

#len is length
if(len(password) < 8):
    basic.show_string("Reject")

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

if(letter_in_password == False):
    basic.show_string("reject")

basic.show_string("Accept")
