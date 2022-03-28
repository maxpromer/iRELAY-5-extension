from machine import Pin, I2C
import os
import _thread
from time import sleep

ADDR = 0x38

machine = uname().machine
if ("KidBright32" in machine) or ("KidMotor V4" in machine):
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=100000)
elif "Mbits" in machine:
    i2c1 = I2C(0, scl=Pin(21), sda=Pin(22), freq=100000)
else:
    i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=100000)

data = 0

def set(ch, value):
    global data
    if value:
        data |= 1 << (ch - 1)
    else:
        data &= (1 << (ch - 1)) ^ 0xFF
    i2c1.writeto(ADDR, bytes([ data ^ 0xFF ]))

def set_all(value):
    global data
    if value:
        data = 0xFF
    else:
        data = 0x00
    i2c1.writeto(ADDR, bytes([ data ^ 0xFF ]))

def set_on_auto_off(ch, time):
    def threadOnOff():
        set(ch, True)
        sleep(time)
        set(ch, False)
    _thread.start_new_thread(threadOnOff, ())

i2c1.writeto(ADDR, b'\xFF')
