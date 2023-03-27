def on_forever():
    if input.pin_is_pressed(TouchPin.P0):
        basic.show_leds("""
            # . # . #
                        . # # # .
                        . # # # .
                        . # # # .
                        # . # . #
        """)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
basic.forever(on_forever)
