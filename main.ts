while (true) {
    console.log("Light level:" + input.lightLevel())
    if (input.lightLevel() > 50) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
