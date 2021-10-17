from tkinter import *
from tkinter import messagebox
import time
import datetime
import multiprocessing

# Current time clock
def clock():
    CURRENT = time.strftime("%H:%M:%S")
    label1.config(text=CURRENT)
    label1.after(200, clock)

def ring_alarm():
    global input1,input2
    h=input1.get()
    m=input2.get()
    if int(h)==datetime.datetime.now().hour and int(m)==datetime.datetime.now().minute:
        return messagebox.showinfo("It's time to wake up!")
    else:
        return ring_alarm()

root = Tk()
root.title("Alarm Clock")
root.geometry("400x300")
root.configure(bg="gold")
text_font1= ("Boulder", 68, 'bold')
label1 = Label(root, font=text_font1, bg="gold", fg="black", bd=25)
label1.pack()
set_alarm = Button(root,text="Set Alarm",command=ring_alarm, highlightbackground="gold", width = 10)
set_alarm.pack()
hours=Label(root, text="At what hour do you want it to ring?")
hours.pack()
input1 = Entry(root, relief=GROOVE)
input1.pack()
minutes=Label(root, text="At what minute do you want it to ring?")
minutes.pack()
input2 = Entry(root, relief=GROOVE)
input2.pack()
begin=Button(root, text="Start",relief=GROOVE)

def loop():
        root.mainloop()
        return loop()


p1 = multiprocessing.Process(target=clock, args=())
p2 = multiprocessing.Process(target=loop, args=())
p1.start()
p2.start()



