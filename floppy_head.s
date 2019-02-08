

    .org 0
begin:
    jmp start

delay:
    push a
    push de
    lxi de, 0x4FFF
delay_loop:
    dcx de
    mov a, d
    ora e
    jnz delay_loop
    pop de
    pop a
    ret

inc_track:
    push a
    mvi a, 0x43
    out 0xf8
    pop a
    call delay
    ret

dec_track:
    push a
    mvi a, 0x63
    out 0xf8
    pop a
    call delay
    ret

start:
    lxi hl, 0x100
    sphl

outer_loop:

    mvi a, 50
loop:
    call inc_track
    dcr a
    jnz loop
    
    mvi a, 50
loop2:
    call dec_track
    dcr a
    jnz loop2

    jmp outer_loop

