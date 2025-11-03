# Ask user for their name
name = input("What is your name? ")

# Ask user for their current age
age = input("How old are you? ")

# Get the current year
from datetime import date
current_year = date.today().year

# Calculate birth year and age in five years
birth_year = current_year - age
age_in_five_years = age + 5

# Display the results
print(f"\nWelcome to the practical world, {name}!")
print(f"Your current age is {age}.")
print(f"You were born in {birth_year}.")
print(f"In five years, you will be {age_in_five_years} years old.")


