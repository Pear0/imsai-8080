; 8 bit fibonacci

    .org 0
begin:
    
    mvi a, 0
    mvi b, 1    ; b = fib
    mvi d, 0xff ; d = 1111 1111   
                ; h = last a
    mvi l, 0    ; l = last user input
loop:
    mov c, a
    add b       ; a = a + b
    mov b, c
    xra d       ; Invert A
    out 0xff
    xra d       ; Restore A

    mov h, a
waiter:
    in 0xff
    sub l
    jz waiter
    add l
    mov l, a
    
    mov a, h
    jmp loop
    
    

