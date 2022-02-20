def water_left(astronauts, water_left, days_left):
    for argument in [astronauts, water_left, days_left]:
        try:
            # If argument is an int, the following operation will work
            argument / 10
        except TypeError:
            # TypError will be raised only if it isn't the right type 
            # Raise the same exception but with a better error message
            raise TypeError(f"Los argumentos deben ser int, pero se recibió: '{argument}'")
    daily_usage = astronauts * 11
    total_usage = daily_usage * days_left
    total_water_left = water_left - total_usage
    if total_water_left < 0:
      raise RuntimeError(f"No hay habrá agua para {astronauts} astronautas después de {days_left} días!")
    return f"Total water left after {days_left} days is: {total_water_left} liters"


def alert_navigation_system(err):
  print("Houston tenemos un problema meme:", err)


try:
    water_left(5, "100", 2)
except RuntimeError as err:
    alert_navigation_system(err)
