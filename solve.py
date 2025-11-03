# 1b(a)

# Solving the system of equations using the substitution method:
#
#     ax + by = c   ...(1)
#     dx + ey = f   ...(2)
#
# Step 1: From equation (1), express y in terms of x:
#     ax + by = c
#     => by = c - ax
#     => y = (c - ax) / b   ...(3)
#
# Step 2: Substitute equation (3) into equation (2):
#     dx + e[(c - ax) / b] = f
#
# Step 3: Eliminate the denominator by multiplying through by b:
#     b(dx) + e(c - ax) = bf
#
# Step 4: Expand the brackets:
#     bdx + ec - eax = bf
#
# Step 5: Collect like terms in x:
#     x(bd - ea) = bf - ec
#
# Step 6: Solve for x:
#     x = (bf - ec) / (bd - ea)
#
# Step 7: Substitute x back into equation (3) to find y:
#     y = (c - ax) / b
#
# Therefore:
#     x = (bf - ec) / (bd - ea)
#     y = (c - ax) / b







# 1b(b)
# Program to solve the system of equations:
#     ax + by = c
#     dx + ey = f
#
# Using the substitution/elimination method:
#     x = (bf - ec) / (bd - ea)
#     y = (c - ax) / b

# Request user input for coefficients
a = float(input("Enter the value of a: "))
b = float(input("Enter the value of b: "))
c = float(input("Enter the value of c: "))
d = float(input("Enter the value of d: "))
e = float(input("Enter the value of e: "))
f = float(input("Enter the value of f: "))

# Calculate the determinant (denominator)
denominator = (b * d) - (e * a)

# Check to avoid division by zero (parallel lines)
if denominator == 0:
    print("\nThe equations have no unique solution (they may be parallel or identical).")
else:
    # Compute x and y
    x = (b * f - e * c) / denominator
    y = (c - a * x) / b

    # Display the results
    print("\nResults:")
    print(f"x = {x:.4f}")
    print(f"y = {y:.4f}")
