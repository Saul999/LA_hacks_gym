from exercise import muscle_exercise

push = [muscle_exercise("chest"), muscle_exercise("triceps"), muscle_exercise("traps")]
pull = [muscle_exercise("biceps"), muscle_exercise("lats"), 
        muscle_exercise("middle_back"), muscle_exercise("lower_back")]
legs = [muscle_exercise("quadriceps"), muscle_exercise("hamstrings"),
        muscle_exercise("glutes"), muscle_exercise("calves"),
        muscle_exercise("abductors"), muscle_exercise("adductors")]

for exercise in legs:
    print(f"{exercise}\n\n\n")