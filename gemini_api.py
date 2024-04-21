# -*- coding: utf-8 -*-
"""gemini.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1YW5nj1MgzFs2qo-aYsVxe-v1GYNE_AH8
"""

import pandas as pd
import os
from dotenv import load_dotenv

load_dotenv(".env")

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

muscles = ["biceps",
                "calves",
                "chest",
                "forearms",
                "glutes",
                "hamstrings",
                "lats",
                "lower_back",
                "middle_back",
                "quadriceps",
                "traps",
                "triceps"]

muscles_input = ", ".join(muscles)

#print(muscles_input)
training = "power lifting"
days = {
    'Sunday': 0,
    'Monday': 0,
    'Tuesday': 120,
    'Wednsday': 0,
    'Thursday': 120,
    'Friday': 0,
    'Saturday': 0
}

import google.generativeai as genai

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-1.5-pro-latest')

# AI_PROMPT = f"""Can you create a workout routine Monday for {days['monday']} mins, 
#             Tuesday for {days['tuesday']} mins, 
#             Wednesday for {days['wednsday']} mins, 
#             Thursday for {days['thursday']} mins,
#             Friday for {days['thursday']} mins, using all these muscles groups {muscles_input} ?"""

AI_PROMPT = f"""
            You are a {training} coach, can you create a workout routine 
            Monday for {days['Monday']} mins, 
            Tuesday for {days['Tuesday']} mins, 
            Wednesday for {days['Wednsday']} mins, 
            Thursday for {days['Thursday']} mins,
            Friday for {days['Friday']} mins, using only these muscles groups {muscles_input}?
            For the output, there will be 7 rows, with each row representing a day in {days.keys()}. Based
            on the day, each row will have a series of exercises corresponding to that day and availability.
            Each exercise will be in the format of: Exercise Name: X Sets of Y Reps. 
            For example, row 1 would represent Sunday and if Sunday is not 0 minutes, the row could possibly look like this:
            Exercise 1 Name: X Sets of Y Reps, Exercise 2 Name: X Sets of Y Reps, . . . , Exercise N Name: X Sets of Y Reps
            """

response = model.generate_content(AI_PROMPT)

#print(response.text)
#print("done")

with open('results.txt', 'w', encoding="utf-8") as file:
    gemini_output = response.text
    print(gemini_output)
    print("done")
    file.write(gemini_output)