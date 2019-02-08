
    .org 0
begin:
    mvi a, 0xCA
    out 0x03
    mvi a, 0x27
    out 0x03
loop:
    mvi a, 97
    out 0x02
    jmp loop


