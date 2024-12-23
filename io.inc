; Procedure to read a 3-digit number
read_number proc
    push bx
    push cx
    
    xor ax, ax  ; Clear AX
    mov cx, 3   ; Counter for 3 digits
    
read_digit:
    mov ah, 01h
    int 21h
    
    sub al, '0'     ; Convert ASCII to number
    mov bl, al
    mov al, 10
    mul ah          ; Multiply current result by 10
    add al, bl      ; Add new digit
    loop read_digit
    
    pop cx
    pop bx
    ret
read_number endp

; Procedure to print a string
print_string proc
    mov ah, 09h
    int 21h
    ret
print_string endp

; Procedure to print a number
print_number proc
    push ax
    push bx
    push cx
    push dx
    
    mov bx, 10      ; Divisor
    xor cx, cx      ; Digit counter
    
convert_loop:
    xor dx, dx
    div bx          ; Divide by 10
    push dx         ; Save remainder
    inc cx          ; Increment counter
    test ax, ax     ; Check if quotient is zero
    jnz convert_loop
    
print_loop:
    pop dx          ; Get digit
    add dl, '0'     ; Convert to ASCII
    mov ah, 02h     ; Print character
    int 21h
    loop print_loop
    
    pop dx
    pop cx
    pop bx
    pop ax
    ret
print_number endp