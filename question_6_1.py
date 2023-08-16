# Palindrome checker

def is_palindrome(s):
    return s == s[::-1] # slice to start from the end to the beginning, going back one character


def check_if_palindrome():
    user_input = input("Please enter any word: ")

    if is_palindrome(user_input):
        print("The word you entered is a plaindrome!")
    else:
        reversed_order = user_input[::-1]
        print("The word you entered is not a palindrome. The reversed order:", reversed_order)

check_if_palindrome()