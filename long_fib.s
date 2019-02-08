;fib
.org 0

init:
	mvi a, 0
	mvi b, 1
	mvi l, 0xFF
fib:
	mov c, a
	add b
	jc init
	xra l
	out 0xff
	xra l
	mov b, c
	mov h, a
	LXI d, 0FFFFh
delay:
	dcx d
	mov a, d
	ora e
	jnz delay
	mov a, h
	jmp fib

