import requests
import json
import os
from dotenv import load_dotenv

API_KEY = os.environ.get("FITNESS_API_KEY")
print(API_KEY)

muscle_group = ["abdominals",
                "abductors",
                "adductors",
                "biceps",
                "calves",
                "chest",
                "forearms",
                "glutes",
                "hamstrings",
                "lats",
                "lower_back",
                "middle_back",
                "neck",
                "quadriceps",
                "traps",
                "triceps"]


def muscle_exercise(muscle, *training_type):  # Returns set of exercsies related to that muscle group and training
    """
    Gives exercises to related muscle from API Ninjas, filtered by user prefered training_type
    """
    if muscle in muscle_group:
        api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
        response = requests.get(api_url, headers={'X-Api-Key': API_KEY})
        if response.status_code == requests.codes.ok:
            data = json.loads(response.text)
            exercises_list = []
            for exercise in data:
                if training_type and exercise["type"] in training_type:
                    print(json.dumps(exercise, indent=4))
                    exercises_list.append(exercise) 
            #return {muscle: exercises_list}
        else:
            print("Error:", response.status_code, response.text)
    else:
        print("Please choose from the following muscle groups:", muscle_group)

#TODO: Front End, sets and reps, priority exercises, user time availability, gemini implementation
"""
# Input: I want to do [training types] I'm availabe [free days with hours]. Create a workout plan for me
# Output: Sure thing!

"""
muscle_exercise("quadriceps")