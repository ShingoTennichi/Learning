import random

class shisen_syou():
    def __init__(self):
        self.board = self.make_board()
        self.clear = self.check_clear()

def make_board():
    global l1, l2, l3, l4, l5, l6, l7, l8, l_all
    # make each charactors
    charactors = [i for i in range(0,34)] * 4

    # make board
    top = ['  ' for _ in range(19)]
    l1 = ['  ' for _ in range(2)]
    l2 = ['  ' for _ in range(2)]
    l3 = ['  ' for _ in range(2)]
    l4 = ['  ' for _ in range(2)]
    l5 = ['  ' for _ in range(2)]
    l6 = ['  ' for _ in range(2)]
    l7 = ['  ' for _ in range(2)]
    l8 = ['  ' for _ in range(2)]
    bottom = ['  ' for _ in range(19)]

    random.shuffle(charactors)
    while charactors:
        if len(l1) != 19:
            l1.insert(1,charactors.pop())
        elif len(l2) != 19:
            l2.insert(1,charactors.pop())
        elif len(l3) != 19:
            l3.insert(1,charactors.pop())
        elif len(l4) != 19:
            l4.insert(1,charactors.pop())
        elif len(l5) != 19:
            l5.insert(1,charactors.pop())
        elif len(l6) != 19:
            l6.insert(1,charactors.pop())
        elif len(l7) != 19:
            l7.insert(1,charactors.pop())
        elif len(l8) != 19:
            l8.insert(1,charactors.pop())

    # for checking if clear or not
    l_all = ["",l1, l2, l3, l4, l5, l6, l7, l8]

    # show created board
    print("  " + "  " + "  " + "C1" + " " + "C2" + " " + "C3" + " " + "C4" + " " + "C5" + " " + "C6" + " " + "C7" + " " + "C8" + " " + "C9" + "C10" + "C11" + "C12" + "C13" + "C14" + "C15" + "C16" + "C17" )
    print("  " + "|" + top[0] + "|" + top[1] + "|" + top[2] + "|" + top[3] + "|" + top[4] + "|" + top[5] + "|" + top[6] + "|" + top[7] + "|" + top[8] + "|" + top[9] + "|" + top[10] + "|" + top[11] + "|" + top[12] + "|" + top[13] + "|" + top[14] + "|" + top[15] + "|" + top[16] + "|" + top[17] + "|" + top[18] + "|")
    print("L1" + "|" + str(l1[0]) + "|" + str(l1[1]).zfill(2) + "|" + str(l1[2]).zfill(2) + "|" + str(l1[3]).zfill(2) + "|" + str(l1[4]).zfill(2) + "|" + str(l1[5]).zfill(2) + "|" + str(l1[6]).zfill(2) + "|" + str(l1[7]).zfill(2) + "|" + str(l1[8]).zfill(2) + "|" + str(l1[9]).zfill(2) + "|" + str(l1[10]).zfill(2) + "|" + str(l1[11]).zfill(2) + "|" + str(l1[12]).zfill(2) + "|" + str(l1[13]).zfill(2) + "|" + str(l1[14]).zfill(2) + "|" + str(l1[15]).zfill(2) + "|" + str(l1[16]).zfill(2) + "|" + str(l1[17]).zfill(2) + "|" + str(l1[18]) + "|")
    print("L2" + "|" + str(l2[0]) + "|" + str(l2[1]).zfill(2) + "|" + str(l2[2]).zfill(2) + "|" + str(l2[3]).zfill(2) + "|" + str(l2[4]).zfill(2) + "|" + str(l2[5]).zfill(2) + "|" + str(l2[6]).zfill(2) + "|" + str(l2[7]).zfill(2) + "|" + str(l2[8]).zfill(2) + "|" + str(l2[9]).zfill(2) + "|" + str(l2[10]).zfill(2) + "|" + str(l2[11]).zfill(2) + "|" + str(l2[12]).zfill(2) + "|" + str(l2[13]).zfill(2) + "|" + str(l2[14]).zfill(2) + "|" + str(l2[15]).zfill(2) + "|" + str(l2[16]).zfill(2) + "|" + str(l2[17]).zfill(2) + "|" + str(l2[18]) + "|")
    print("L3" + "|" + str(l3[0]) + "|" + str(l3[1]).zfill(2) + "|" + str(l3[2]).zfill(2) + "|" + str(l3[3]).zfill(2) + "|" + str(l3[4]).zfill(2) + "|" + str(l3[5]).zfill(2) + "|" + str(l3[6]).zfill(2) + "|" + str(l3[7]).zfill(2) + "|" + str(l3[8]).zfill(2) + "|" + str(l3[9]).zfill(2) + "|" + str(l3[10]).zfill(2) + "|" + str(l3[11]).zfill(2) + "|" + str(l3[12]).zfill(2) + "|" + str(l3[13]).zfill(2) + "|" + str(l3[14]).zfill(2) + "|" + str(l3[15]).zfill(2) + "|" + str(l3[16]).zfill(2) + "|" + str(l3[17]).zfill(2) + "|" + str(l3[18]) + "|")
    print("L4" + "|" + str(l4[0]) + "|" + str(l4[1]).zfill(2) + "|" + str(l4[2]).zfill(2) + "|" + str(l4[3]).zfill(2) + "|" + str(l4[4]).zfill(2) + "|" + str(l4[5]).zfill(2) + "|" + str(l4[6]).zfill(2) + "|" + str(l4[7]).zfill(2) + "|" + str(l4[8]).zfill(2) + "|" + str(l4[9]).zfill(2) + "|" + str(l4[10]).zfill(2) + "|" + str(l4[11]).zfill(2) + "|" + str(l4[12]).zfill(2) + "|" + str(l4[13]).zfill(2) + "|" + str(l4[14]).zfill(2) + "|" + str(l4[15]).zfill(2) + "|" + str(l4[16]).zfill(2) + "|" + str(l4[17]).zfill(2) + "|" + str(l4[18]) + "|")
    print("L5" + "|" + str(l5[0]) + "|" + str(l5[1]).zfill(2) + "|" + str(l5[2]).zfill(2) + "|" + str(l5[3]).zfill(2) + "|" + str(l5[4]).zfill(2) + "|" + str(l5[5]).zfill(2) + "|" + str(l5[6]).zfill(2) + "|" + str(l5[7]).zfill(2) + "|" + str(l5[8]).zfill(2) + "|" + str(l5[9]).zfill(2) + "|" + str(l5[10]).zfill(2) + "|" + str(l5[11]).zfill(2) + "|" + str(l5[12]).zfill(2) + "|" + str(l5[13]).zfill(2) + "|" + str(l5[14]).zfill(2) + "|" + str(l5[15]).zfill(2) + "|" + str(l5[16]).zfill(2) + "|" + str(l5[17]).zfill(2) + "|" + str(l5[18]) + "|")
    print("L6" + "|" + str(l6[0]) + "|" + str(l6[1]).zfill(2) + "|" + str(l6[2]).zfill(2) + "|" + str(l6[3]).zfill(2) + "|" + str(l6[4]).zfill(2) + "|" + str(l6[5]).zfill(2) + "|" + str(l6[6]).zfill(2) + "|" + str(l6[7]).zfill(2) + "|" + str(l6[8]).zfill(2) + "|" + str(l6[9]).zfill(2) + "|" + str(l6[10]).zfill(2) + "|" + str(l6[11]).zfill(2) + "|" + str(l6[12]).zfill(2) + "|" + str(l6[13]).zfill(2) + "|" + str(l6[14]).zfill(2) + "|" + str(l6[15]).zfill(2) + "|" + str(l6[16]).zfill(2) + "|" + str(l6[17]).zfill(2) + "|" + str(l6[18]) + "|")
    print("L7" + "|" + str(l7[0]) + "|" + str(l7[1]).zfill(2) + "|" + str(l7[2]).zfill(2) + "|" + str(l7[3]).zfill(2) + "|" + str(l7[4]).zfill(2) + "|" + str(l7[5]).zfill(2) + "|" + str(l7[6]).zfill(2) + "|" + str(l7[7]).zfill(2) + "|" + str(l7[8]).zfill(2) + "|" + str(l7[9]).zfill(2) + "|" + str(l7[10]).zfill(2) + "|" + str(l7[11]).zfill(2) + "|" + str(l7[12]).zfill(2) + "|" + str(l7[13]).zfill(2) + "|" + str(l7[14]).zfill(2) + "|" + str(l7[15]).zfill(2) + "|" + str(l7[16]).zfill(2) + "|" + str(l7[17]).zfill(2) + "|" + str(l7[18]) + "|")
    print("L8" + "|" + str(l8[0]) + "|" + str(l8[1]).zfill(2) + "|" + str(l8[2]).zfill(2) + "|" + str(l8[3]).zfill(2) + "|" + str(l8[4]).zfill(2) + "|" + str(l8[5]).zfill(2) + "|" + str(l8[6]).zfill(2) + "|" + str(l8[7]).zfill(2) + "|" + str(l8[8]).zfill(2) + "|" + str(l8[9]).zfill(2) + "|" + str(l8[10]).zfill(2) + "|" + str(l8[11]).zfill(2) + "|" + str(l8[12]).zfill(2) + "|" + str(l8[13]).zfill(2) + "|" + str(l8[14]).zfill(2) + "|" + str(l8[15]).zfill(2) + "|" + str(l8[16]).zfill(2) + "|" + str(l8[17]).zfill(2) + "|" + str(l8[18]) + "|")
    print("  " + "|" + bottom[0] + "|" + bottom[1] + "|" + bottom[2] + "|" + bottom[3] + "|" + bottom[4] + "|" + bottom[5] + "|" + bottom[6] + "|" + bottom[7] + "|" + bottom[8] + "|" + bottom[9] + "|" + bottom[10] + "|" + bottom[11] + "|" + bottom[12] + "|" + bottom[13] + "|" + bottom[14] + "|" + bottom[15] + "|" + bottom[16] + "|" + bottom[17] + "|" + bottom[18] + "|")


def num_input():
    global num_input1, num_input2, num_input3, num_input4
    num_input1 = int(input("Which line do you choose? 1 to 8: ",))
    num_input2 = int(input("Which column do you choose? 1 to 17: ",))
    num_input3 = int(input("Which line do you choose? 1 to 8: ",))
    num_input4 = int(input("Which column do you choose? 1 to 17: ",))


def check_clear():
    global l1, l2, l3, l4, l5, l6, l7, l8, l_all, num_input1, num_input2, num_input3, num_input4
    if l1.count("  ") == 19 and l2.count("  ") == 19 and l3.count("  ") == 19 and l4.count("  ") == 19 and l5.count("  ") == 19 and l6.count("  ") == 19 and l7.count("  ") == 19 and l8.count("  ") == 19:
        print("Finish!")
        pass

    num_input()

    # refuse same choice
    if num_input1 == num_input3 and num_input2 == num_input4:
        print("You can not choose exactly same charctor. Please choose again.")
        return check_clear()

    first_choice = l_all[num_input1][num_input2]
    print(first_choice)
    second_choice = l_all[num_input3][num_input4]
    print(second_choice)

    # check algorizm

    # show current board
    # repeat until clear

if __name__ == "__main__":
    game = shisen_syou()
