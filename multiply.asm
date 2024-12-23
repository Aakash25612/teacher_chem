section .data
    num1    dd  0
    num2    dd  0
    result  dd  0
    msg1    db  'Enter first number (3 digits): ', 0
    msg2    db  10, 'Enter second number (3 digits): ', 0
    msg3    db  10, 'Result: ', 0
    newline db  10, 0
    fmt_in  db  '%d', 0
    fmt_out db  '%d', 10, 0

section .text
    global main
    extern printf
    extern scanf

main:
    ; Print first prompt
    push msg1
    call printf
    add esp, 4

    ; Read first number
    push num1
    push fmt_in
    call scanf
    add esp, 8

    ; Print second prompt
    push msg2
    call printf
    add esp, 4

    ; Read second number
    push num2
    push fmt_in
    call scanf
    add esp, 8

    ; Multiply numbers
    mov eax, [num1]
    mov ebx, [num2]
    mov ecx, 0      ; Clear result

multiply_loop:
    test ebx, ebx   ; Check if ebx is zero
    jz multiply_done
    add ecx, eax    ; Add num1 to result
    dec ebx         ; Decrement counter
    jmp multiply_loop

multiply_done:
    mov [result], ecx

    ; Print result message
    push msg3////
    call printf
    add esp, 4

    ; Print the result
    push dword [result]
    push fmt_out
    call printf
    add esp, 8

    ; Exit program
    mov eax, 0
    ret