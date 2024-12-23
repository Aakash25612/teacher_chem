.data
    num1    dw  0   ; First 3-digit number
    num2    dw  0   ; Second 3-digit number
    result  dw  0   ; Result storage
    msg1    db  'Enter first number (3 digits): $'
    msg2    db  13, 10, 'Enter second number (3 digits): $'
    msg3    db  13, 10, 'Result: $'
    newline db  13, 10, '$'