from collections import Counter;
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

