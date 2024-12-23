.model small
.stack 100h

include data.inc
include io.inc
include math.inc

.code
main proc
    mov ax, @data
    mov ds, ax
    
    ; Get first number
    lea dx, msg1
    call print_string
    call read_number
    mov num1, ax
    
    ; Get second number
    lea dx, msg2
    call print_string
    call read_number
    mov num2, ax
    
    ; Multiply numbers
    call multiply_numbers
    
    ; Display result
    lea dx, msg3
    call print_string
    mov ax, result
    call print_number

    ; Exit program
    mov ah, 4ch
    int 21h
main endp

end main