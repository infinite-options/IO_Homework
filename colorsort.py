import random 
from collections import Counter
import copy


def checkColors(colors):
    if len(colors)==0:
        return True
    if len(colors)!=4:
        return False
    for i in range(len(colors)-1):
        if(colors[i]!=colors[i+1]):
            return False
    return True

def checkWinner(stacks):
    for stack in stacks:
        if checkColors(stack)==False:
            return False
    return True

def moveColor(stacks, source, destination, move_number):
    source=int(source)
    destination=int(destination)
    print("move number: ", move_number+1, "color: ", stacks[source][-1], "source: ", source+1, "destination: ", destination+1)
    stacks[destination].append(stacks[source].pop())

def checkValid(stacks, source, destination):
    if len(stacks[source])==0 or len(stacks[destination])>3:
        return False
    if source!=destination:
        return len(stacks[destination])==0 or stacks[source][-1]==stacks[destination][-1]
    else:
        return False

def printColors(stacks):
    index = 0
    for stack in stacks:
        print(index, stack)
        index += 1

def checkInitial(stacks):
    color_count = Counter()
    for stack in stacks:
        color_count.update(stack)
    if all(count == 4 for count in color_count.values()):
        print("Initial configuration:")
        printColors(stacks)
    else:
        print("Error: There are not exactly four of each color.")

def repeatedPosition(stacks, positions, move):
    new_position=copy.deepcopy(stacks)
    new_position[move[1]].append(new_position[move[0]].pop())
    for position in positions:
        if position==new_position:
            print("repeated position")
            return True
    return False

def getValidMoves(stacks):
    valid_moves=[]
    source=0
    destination=1
    # get all the valid moves and put it in the stack
    while source < num_stacks(stacks)-1:
        if source < num_stacks(stacks) and checkColors(stacks[source])==True:
            source+=1
        else:
            if checkValid(stacks, source, destination)==True:
                valid_moves.append([source, destination])
            if destination < num_stacks(stacks)-1:
                destination +=1
            else:
                source+=1
                destination=0
    return valid_moves

def num_stacks(stacks):
    return len(stacks)

def undoMove(stacks, prev_move, move_number):
    print("UNDO PREV MOVE")
    source=prev_move[1]
    destination=prev_move[0]
    moveColor(stacks, source, destination, move_number)


stacks = [[] for _ in range(9)]

# colors = ["yellow","blue","red","green","purple","black","white","pink","orange"] * 4
# random.shuffle(colors)

# for i in range(len(stacks)-2):
#     for j in range(4):
#         if(len(colors)>0):
#             stacks[i].append(colors.pop())




#prev actual example(works)
# stacks[0]=["blue", "green", "orange", "yellow"]
# stacks[1]=["red", "orange", "orange", "teal"]
# stacks[2]=["green", "purple", "red", "yellow"]
# stacks[3]=["orange", "yellow", "blue", "teal"]
# stacks[4]=["teal", "green", "purple", "teal"]
# stacks[5]=["green", "red", "blue", "purple"]
# stacks[6]=["purple", "yellow", "blue", "red"]

#prev actual example(works)
stacks[0]=["blue", "green", "blue", "teal"]
stacks[1]=["green", "green", "orange", "teal"]
stacks[2]=["red", "red", "purple", "red"]
stacks[3]=["teal", "yellow", "green", "red"]
stacks[4]=["blue", "orange", "yellow", "purple"]
stacks[5]=["purple", "blue", "yellow", "yellow"]
stacks[6]=["purple", "teal", "orange", "orange"]

#prev actual example(works)
# stacks[0]=["blue", "green", "orange", "orange"]
# stacks[1]=["red", "blue", "green", "blue"]
# stacks[2]=["blue", "red", "yellow", "orange"]
# stacks[3]=["red", "orange", "yellow", "green"]
# stacks[4]=["yellow", "red", "yellow", "green"]

# prev actual example(works)
# stacks[0]=["yellow", "orange", "orange", "orange"]
# stacks[1]=["red", "yellow", "green", "orange"]
# stacks[2]=["green", "red", "yellow", "red"]
# stacks[3]=["blue", "green", "red", "green"]
# stacks[4]=["blue", "blue", "blue", "yellow"]

# prev actual example
# stacks[0]=["green", "white", "red", "green"]
# stacks[1]=["purple", "black", "purple", "purple"]
# stacks[2]=["blue", "orange", "yellow", "pink"]
# stacks[3]=["green", "red", "yellow", "white"]
# stacks[4]=["orange", "blue", "purple", "black"]
# stacks[5]=["red", "green", "pink", "white"]
# stacks[6]=["black", "pink", "orange", "orange"]
# stacks[7]=["pink", "white", "red", "blue"]
# stacks[8]=["yellow", "black", "yellow", "blue"]

# simple stack for dev(works)
# stacks[0]=["blue", "yellow", "red", "red"]
# stacks[1]=["blue", "yellow", "blue", "yellow"]
# stacks[2]=["red", "blue", "yellow", "red"]

def bruteForce(stacks):
    move_number=0
    positions=[]
    prev_moves=[]
    invalid=False
    while(checkWinner(stacks)==False):
        index=0
        valid_moves=getValidMoves(stacks)
        # print("Valid moves:", valid_moves)
        while not valid_moves:
            prev_move = prev_moves.pop()
            undoMove(stacks, prev_move, move_number)
            move_number+=1
            valid_moves=getValidMoves(stacks)
        #check if the valid move will be a position that is repeated, if it is then go to next valid move, if there are no more valid moves, then it is invalid
        while(invalid==False and repeatedPosition(stacks,positions,valid_moves[index])==True):
            index+=1
            if index>=len(valid_moves):
                invalid=True
        #if there are no valid moves that are not repeated, then pop the prev move
        if invalid==True:
            prev_move = prev_moves.pop()
            undoMove(stacks, prev_move, move_number)
            move_number+=1
            invalid=False
        #if there is a valid move, then move the color to the new stack
        else:
            move=valid_moves[index]
            moveColor(stacks, move[0], move[1], move_number)
            prev_moves.append(move)
            move_number+=1
            positions.append(copy.deepcopy(stacks))
                       
checkInitial(stacks)
bruteForce(stacks)
print("FINAL CONFIGURATION:")
printColors(stacks)