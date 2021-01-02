while True: 
    print("Light level:" + input.light_level())
    if input.light_level() > 50:
        light.set_all(light.rgb(0, 0, 0))
    else:
        light.set_all(light.rgb(255, 255, 255))

