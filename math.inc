; Procedure to multiply numbers without MUL
multiply_numbers proc
    push ax
    push bx
    push cx
    
    mov ax, num1
    mov bx, num2
    xor cx, cx      ; Clear result
    
multiply_loop:
    test bx, bx     ; Check if bx is zero
    jz multiply_done
    
    add cx, ax      ; Add num1 to result
    dec bx          ; Decrement counter
    jmp multiply_loop
    
multiply_done:
    mov result, cx
    
    pop cx
    pop bx
    pop ax
    ret
multiply_numbers endp