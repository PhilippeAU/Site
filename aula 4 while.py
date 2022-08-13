# Declaração do while em python

x = 10
while x > 0:
    
    x-=1
    print(f'(x)')

    print('for com range(5) e break quando i = 2')
    for i in range(5):
        if i == 2:
            break
        print(f'{i}')

i = 0
while(i < 2):

    print(f"{i}")
    i += 2


print('for com range(5) e continue quando i = 2')
    for i in range(5):
        if i == 2:
            continue
        print(f'{i}')        