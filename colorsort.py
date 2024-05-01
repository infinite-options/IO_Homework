import random 
from collections import Counter
import copy
import json

f = open('data.json')
data=json.load(f)


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
    # print("move number: ", move_number+1, "color: ", stacks[source][-1], "source: ", source+1, "destination: ", destination+1)
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
        for color, count in color_count.items():
            print(f"{color}: {count}")
        print("Error: There are not exactly four of each color.")

def repeatedPosition(stacks, positions, move):
    new_position=copy.deepcopy(stacks)
    new_position[move[1]].append(new_position[move[0]].pop())
    for position in positions:
        if position==new_position:
            # print("repeated position")
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

def sameColor(colors):
    for i in range(len(colors)-1):
        if colors[i]!=colors[i+1]:
            return False
    return True

def oneDiff(colors):
    for i in range(len(colors)-2):
        if colors[i]!=colors[i+1]:
            return False
    if colors[-1]!=colors[0]:
        return True
    return False

def undoMove(stacks, prev_move, move_number):
    # print("UNDO PREV MOVE")
    source=prev_move[1]
    destination=prev_move[0]
    moveColor(stacks, source, destination, move_number)

# prioritize stacks in order of importance
# 1. stack with 3 of the same color at the base
# 2. stack with 2 of the same color at the base
# 3. stack with only 1 color
# 4. stack that has 2 space above with diff colors
# 5. stack that has 1 space above it with diff colors
# 6. empty stack
# 7. everything else
# least prio
# source is same color and dest is empty
def prioritize_columns(stacks, valid_moves):
    first_prio=[]
    second_prio=[]
    third_prio=[]
    fourth_prio=[]
    fifth_prio=[]
    sixth_prio=[]
    same_colors=[]
    empty_stack=[]
    moves_to_move=[]
    for i in range(len(stacks)):
        if len(stacks[i])==3 and sameColor(stacks[i]):
            first_prio.append(i)
            same_colors.append(i)
        if len(stacks[i])==2 and sameColor(stacks[i]):
            second_prio.append(i)
            same_colors.append(i)
        if(len(stacks[i])==1):
            third_prio.append(i)
            same_colors.append(i)
        if len(stacks[i])==2 and oneDiff(stacks[i])==True:
            fourth_prio.append(i)
        if len(stacks[i])==3 and oneDiff(stacks[i])==True:
            fifth_prio.append(i)
        if len(stacks[i])==0:
            sixth_prio.append(i)
            empty_stack.append(i)
        
    if len(sixth_prio)>0:
        for move in valid_moves:
            for dest in sixth_prio:
                if move[1]==dest:
                    valid_moves.insert(0, valid_moves.pop(valid_moves.index(move)))
    if len(fifth_prio)>0:
        for move in valid_moves:
            for dest in fifth_prio:
                if move[1]==dest:
                    valid_moves.insert(0, valid_moves.pop(valid_moves.index(move)))   
    if len(fourth_prio)>0:
        for move in valid_moves:
            for dest in fourth_prio:
                if move[1]==dest:
                    valid_moves.insert(0, valid_moves.pop(valid_moves.index(move)))
    if len(third_prio)>0:
        for move in valid_moves:
            for dest in third_prio:
                if move[1]==dest:
                    valid_moves.insert(0, valid_moves.pop(valid_moves.index(move)))
    if len(second_prio)>0:
        for move in valid_moves:
            for dest in second_prio:
                if move[1]==dest:
                    valid_moves.insert(0, valid_moves.pop(valid_moves.index(move)))
    if len(first_prio)>0:
        for move in valid_moves:
            for dest in first_prio:
                if move[1]==dest:
                    valid_moves.insert(0, valid_moves.pop(valid_moves.index(move)))
    for move in valid_moves[:]:
        if move[0] in same_colors and move[1] in empty_stack:
            moves_to_move.append(move)
            valid_moves.remove(move)

    valid_moves.extend(moves_to_move)


def createStacks(data):
    for i in range(data["num_stacks"]-2):
        stacks[i]=data["stacks"][i]
    
def runAlg(stacks):
    move_number=0
    positions=[]    
    prev_moves=[]
    prev_colors=[]
    invalid=False
    while(checkWinner(stacks)==False):
        index=0
        valid_moves=getValidMoves(stacks)
        # print("Valid moves:", valid_moves)
        while not valid_moves:
            prev_move = prev_moves.pop()
            prev_colors.pop()
            undoMove(stacks, prev_move, move_number)
            move_number+=1
            valid_moves=getValidMoves(stacks)
        prioritize_columns(stacks, valid_moves)
        #check if the valid move will be a position that is repeated, if it is then go to next valid move, if there are no more valid moves, then it is invalid
        while(invalid==False and repeatedPosition(stacks,positions,valid_moves[index])==True):
            index+=1
            if index>=len(valid_moves):
                invalid=True
        #if there are no valid moves that are not repeated, then pop the prev move
        if invalid==True:
            prev_move = prev_moves.pop()
            prev_colors.pop()
            undoMove(stacks, prev_move, move_number)
            move_number+=1
            invalid=False
        #if there is a valid move, then move the color to the new stack
        else:
            move=valid_moves[index]
            prev_colors.append(stacks[move[0]][-1])
            moveColor(stacks, move[0], move[1], move_number)
            prev_moves.append(move)
            move_number+=1
            positions.append(copy.deepcopy(stacks))
    for i in range(len(prev_moves)):
        print("move_number:", i+1, "color:", prev_colors[i], "source", prev_moves[i][0]+1, "destination:", prev_moves[i][1]+1)

stacks = [[] for _ in range(data["num_stacks"])]
createStacks(data)         
checkInitial(stacks)
runAlg(stacks)
print("FINAL CONFIGURATION:")
printColors(stacks)


#prev actual example(works)
# stacks[0]=["blue", "green", "orange", "yellow"]
# stacks[1]=["red", "orange", "orange", "teal"]
# stacks[2]=["green", "purple", "red", "yellow"]
# stacks[3]=["orange", "yellow", "blue", "teal"]
# stacks[4]=["teal", "green", "purple", "teal"]
# stacks[5]=["green", "red", "blue", "purple"]
# stacks[6]=["purple", "yellow", "blue", "red"]

#prev actual example(works)
# stacks[0]=["blue", "green", "blue", "teal"]
# stacks[1]=["green", "green", "orange", "teal"]
# stacks[2]=["red", "red", "purple", "red"]
# stacks[3]=["teal", "yellow", "green", "red"]
# stacks[4]=["blue", "orange", "yellow", "purple"]
# stacks[5]=["purple", "blue", "yellow", "yellow"]
# stacks[6]=["purple", "teal", "orange", "orange"]

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

# stacks[0]=["red", "violet", "blue", "pink"]
# stacks[1]=["aqua","sky", "yellow", "aqua"]
# stacks[2]=["white", "brown", "green", "red"]
# stacks[3]=["orange", "pink", "sky", "sky"]
# stacks[4]=["yellow", "brown", "purple", "aqua"]
# stacks[5]=["pink", "green", "pink", "orange"]
# stacks[6]=["white", "yellow", "green", "violet"]
# stacks[7]=["blue", "blue", "yellow", "orange"]
# stacks[8]=["purple", "white", "purple", "blue"]
# stacks[9]=["sky", "violet", "brown", "green"]
# stacks[10]=["red", "red", "brown", "purple"]
# stacks[11]=["aqua", "white", "violet", "orange"]

# stacks[0]=["yellow", "red", "orange", "sky"]
# stacks[1]=["green", "pink", "violet", "purple"]
# stacks[2]=["sky", "violet", "orange", "green"]
# stacks[3]=["purple", "red", "red", "orange"]
# stacks[4]=["yellow", "red", "pink", "yellow"]
# stacks[5]=["green", "blue", "pink", "pink"]
# stacks[6]=["purple", "sky", "blue", "violet"]
# stacks[7]=["blue", "yellow", "sky", "green"]
# stacks[8]=["violet", "blue", "purple", "orange"]

# stacks[0]=["violet", "pink", "orange", "red"]
# stacks[1]=["yellow", "green", "green", "green"]
# stacks[2]=["sky", "orange", "pink", "orange"]
# stacks[3]=["blue", "sky", "red", "violet"]
# stacks[4]=["violet", "sky", "pink", "blue"]
# stacks[5]=["blue", "sky","purple", "green"]
# stacks[6]=["red", "yellow", "pink", "orange"]
# stacks[7]=["yellow", "purple", "violet", "purple"]
# stacks[8]=["yellow", "blue", "red", "purple"]