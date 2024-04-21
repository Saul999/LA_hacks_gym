"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction/"
filename = f"{config.app_name}/{config.app_name}.py"

## top row with days
def headerOfDays():
    return rx.table.header(
                rx.table.row(
                    rx.table.column_header_cell("Monday"),
                    rx.table.column_header_cell("Tuesday"),
                    rx.table.column_header_cell("Wednesday"),
                    rx.table.column_header_cell("Thursday"),
                    rx.table.column_header_cell("Friday"),
                    rx.table.column_header_cell("Saturday"),
                    rx.table.column_header_cell("Sunday"),
                ),
    )

## drop down to pick from time
def timeDropDown():
    return rx.table.cell(
        rx.select(
            ["0 Minutes", "30 Minutes", "45 Minutes", "60 Minutes", "90 Minutes", "120 Minutes", "150 Minutes", "180 Minutes", "210 Minutes", "240 Minutes"],
            placeholder="Workout Sessions",
            label="Times",
        ),
    ),

class State(rx.State):
    """The app state."""

days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

def custom() -> rx.Component:
    # Return the rx.image component directly
    return rx.image(
        src="./pixelcut-export1.png",
        width="25%",
        height="25%",
    )



def index() -> rx.Component:
    return rx.center(
            rx.vstack(
                rx.heading("Welcome to LA HACKS gym scheduler", size="9"),
                rx.text("What is your availability?"),
                # Create the table structure
                rx.table.root(
                    headerOfDays(),
                    rx.table.body(
                        rx.table.row(
                            timeDropDown(),
                            timeDropDown(),
                            timeDropDown(),
                            timeDropDown(),
                            timeDropDown(),
                            timeDropDown(),
                            timeDropDown(),
                        ),
                    )
                ),
                rx.button(
                    "SUBMIT",
                    # on_click=lambda: custom(),
                    size="4",
                ),
                rx.logo(),
                align="center",
                spacing="7",
                font_size="2em",
            ),
            height="100vh",
        )




# def index() -> rx.Component:

# def pickMuscle() -> rx.Component:
#     return rx.image(
#         src="./pixelcut-export1.",
#         width="100px",
#         height="auto",
#         border_radius="15px 50px",
#         border="5px solid #555",
#     )


# def custom():
#     return rx.text("Custom Route")

# def pickMuscle() -> rx.Component:
#         return 

# app = rx.App()

# app.add_page(index)
# app.add_page(about)
# app.add_page(custom, route="/custom-route")



app = rx.App()
app.add_page(index)
app.add_page(custom)
