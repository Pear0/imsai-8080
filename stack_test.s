
    .org 0
begin:
    jmp start

last_input:
    .db 0

put: ; (writes a)
    cma
    out 0xFF
    ret

delay:
    push a
    push de
    lxi de, 0xFFFF
delay_loop:
    dcx de
    mov a, d
    ora e
    jnz delay_loop
    pop de
    pop a
    ret

wait_for_input:
    push a
    push de
wfi_loop:
    lda last_input
    mov d, a
    in 0xFF
    cmp d
    jz wfi_loop
    sta last_input
    call delay
    pop de
    pop a
    ret


start:
    lxi hl, 0x100
    sphl

loop:
 

    mvi a, 0xaf
    call put
    call delay
    mvi a, 0
    call put
    call wait_for_input
    
    jmp loop





















