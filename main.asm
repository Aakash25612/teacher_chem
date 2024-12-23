; Define data segment
section .data
    msg1 db "Enter first number: $"
    msg2 db "Enter second number: $"
    msg3 db "The result is: $"
    num1 dw 0
    num2 dw 0
    result dw 0

; Define stack segment
section .bss

; Define code segment
section .text
    global _start

_start:
    ; Load data segment
    ; Prompt for the first number
    mov ah, 9
    lea dx, [msg1]
    int 21h

    ; Read the first number
    ; [Placeholder: Add logic to read numbers in NASM]

    ; Prompt for the second number
    mov ah, 9
    lea dx, [msg2]
    int 21h

    ; Read the second number
    ; [Placeholder: Add logic to read numbers in NASM]

    ; Multiply numbers
    ; [Placeholder: Implement multiplication logic in NASM]

    ; Display the result
    mov ah, 9
    lea dx, [msg3]
    int 21h

    ; Exit program
    mov ah, 4Ch
    int 21h
