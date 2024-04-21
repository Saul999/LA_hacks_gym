import reflex as rx
import os
from gemini_api import gemini
import json

# def print_schedule(schedule: str):
#     json_gemini = json.loads(schedule)
#     Sunday = json_gemini["Sunday"]
#     Monday = json_gemini["Monday"]
#     Tuesday = json_gemini["Tuesday"]
#     Wednesday = json_gemini["Wednesday"]
#     Thursday = json_gemini["Thursday"]
#     Friday = json_gemini["Friday"]
#     Saturday = json_gemini["Saturday"]
    # return rx.table.root(
    #         rx.table.header(
    #             rx.table.row(
    #                 rx.table.column_header_cell("Sunday"),
    #                 rx.table.column_header_cell("Monday"),
    #                 rx.table.column_header_cell("Tuesday"),
    #                 rx.table.column_header_cell("Wednesday"),
    #                 rx.table.column_header_cell("Thursday"),
    #                 rx.table.column_header_cell("Friday"),
    #                 rx.table.column_header_cell("Saturday"),
    #             ),
    #         ),
    #         rx.table.body(
    #             rx.table.row(  # Sunday
    #                 rx.table.cell(""),
    #                 rx.table.cell("danilo@example.com"),
    #                 rx.table.cell("Developer"),
    #             ),
    #             rx.table.row(  # Monday
    #                 rx.table.cell("Danilo Sousa"),
    #                 rx.table.cell("danilo@example.com"),
    #                 rx.table.cell("Developer"),
    #             ),
    #             rx.table.row(  # Tuesday
    #                 rx.table.cell("Danilo Sousa"),
    #                 rx.table.cell("danilo@example.com"),
    #                 rx.table.cell("Developer"),
    #             ),
    #             rx.table.row(  # Wednesday
    #                 rx.table.row_header_cell("Jasper Eriksson"),
    #                 rx.table.cell("jasper@example.com"),
    #                 rx.table.cell("Developer"),
    #             ),
    #             rx.table.row(  # Thursday
    #                 rx.table.row_header_cell("Jasper Eriksson"),
    #                 rx.table.cell("jasper@example.com"),
    #                 rx.table.cell("Developer"),
    #             ),
    #             rx.table.row(  # Friday
    #                 rx.table.row_header_cell("Jasper Eriksson"),
    #                 rx.table.cell("jasper@example.com"),
    #                 rx.table.cell("Developer"),
    #             ),
    #             rx.table.row(  # Saturday
    #                 rx.table.row_header_cell("Jasper Eriksson"),
    #                 rx.table.cell("jasper@example.com"),
    #                 rx.table.cell("Developer"),
    #             ),  
    #         ),
# )
    #return Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday

class FormSelectState1(rx.State):
    form_data: dict = {}
    schedule: str = ""
    # Monday: dict = {}
    # Tuesday: dict = {}
    # Wednesday: dict = {}
    # Thursday: dict = {}
    # Friday: dict = {}
    # Satuday: dict = {}
    

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
        self.schedule = gemini(form_data)
        #self.Monday = self.schedule["Monday"]
        #self.Tuesday = self.schedule["Tuesday"]
        #self.Wednesday = self.schedule["Wednesday"]
        #self.Thursday = self.schedule["Thursday"]
        #self.Friday = self.schedule["Friday"]
        #self.Saturday = self.schedule["Saturday"]
        #print(self.schedule)
        #print(type(self.schedule))
        # print(gemini(form_data))

def form_select1():
    return rx.center(
        rx.vstack(
            rx.form.root(
                rx.heading("Welcome to IntelliFit" ,
                            style={"textAlign": "center", "fontSize": "5em", "marginBottom": "2rem", "color":"white"},),
                rx.heading("Please enter your availabilty", style={"textAlign": "center", "fontSize": "3em", "marginBottom": "2rem", "color":"white"}),
                rx.flex(
                    rx.table.root(
                        rx.table.header(
                            rx.table.row(
                                rx.table.column_header_cell("Monday"),
                                rx.table.column_header_cell("Tuesday"),
                                rx.table.column_header_cell("Wednesday"),
                                rx.table.column_header_cell("Thursday"),
                                rx.table.column_header_cell("Friday"),
                                rx.table.column_header_cell("Saturday"),
                                rx.table.column_header_cell("Sunday"),
                            ),
                        ),
                   
                        rx.table.body(
                            rx.table.row(
                                rx.table.row_header_cell(
                                    rx.select(
                                        ['0', '30', '60','90','120','150','180'],
                                        placeholder="Workout Session",
                                        label="Times",
                                        name="Monday",
                                        color="pink",
                                        variant="soft",
                                        radius="full",
                                    ),
                                ),
                                rx.table.cell(
                                    rx.select(
                                        ['0', '30', '60','90','120','150','180'],
                                        placeholder="Workout Session",
                                        label="Times",
                                        name="Tuesday",
                                        color="pink",
                                        variant="soft",
                                        radius="full",
                                    ),
                                ),
                                rx.table.cell(
                                    rx.select(
                                         ['0', '30', '60','90','120','150','180'],
                                        placeholder="Workout Session",
                                        label="Times",
                                        name="Wednesday",
                                        color="pink",
                                        variant="soft",
                                        radius="full",
                                    ),
                                ),
                                rx.table.cell(
                                    rx.select(
                                         ['0', '30', '60','90','120','150','180'],
                                        placeholder="Workout Session",
                                        label="Times",
                                        name="Thursday",
                                        color="pink",
                                        variant="soft",
                                        radius="full",
                                    ),
                                ),
                                rx.table.cell(
                                    rx.select(
                                         ['0', '30', '60','90','120','150','180'],
                                        placeholder="Workout Session",
                                        label="Times",
                                        name="Friday",
                                        color="pink",
                                        variant="soft",
                                        radius="full",
                                    ),
                                ),
                                rx.table.cell(
                                    rx.select(
                                         ['0', '30', '60','90','120','150','180'],
                                        placeholder="Workout Session",
                                        label="Times",
                                        name="Saturday",
                                        color="pink",
                                        variant="soft",
                                        radius="full",
                                    ),
                                ),
                                rx.table.cell(
                                    rx.select(
                                         ['0', '30', '60','90','120','150','180'],
                                        placeholder="Workout Session",
                                        label="Times",
                                        name="Sunday",
                                        color="pink",
                                        variant="soft",
                                        radius="full",
                                    ),
                                ),
                            ),
                        ),
                    ),
                        spacing="9",
                        justify_content="center",
                        align_items="flex-start",
                        flex_wrap="wrap",
                ),
        
                rx.button("Submit", type="submit", style={"margin": "0 auto", "display": "block", "align": 'center','justify_content': 'center'},),
                on_submit=FormSelectState1.handle_submit,
                align="center",
                width="100%",
            ),
            rx.divider(width="100%"),
            rx.heading("Your Schedule:", style={"textAlign": "center"}),
            
            rx.text(FormSelectState1.form_data.to_string()),
            rx.text(FormSelectState1.schedule),
            justify_content= 'center',
            align='center',
            width="100%",
        ),
        width="100%",
        align="center",
        spacing="7",
    )
def index():
    return rx.vstack(
        form_select1()
    )

def index():
    return rx.center(
        form_select1(),
        bg="linear-gradient(to bottom, navy, BLACK)",
        height="100vh",  # This makes sure the centering happens vertically across the full height of the viewport
    )

app = rx.App(
    theme=rx.theme(
        appearance="dark", has_background=True, radius="large", accent_color="teal"
    )
)
app.add_page(index)