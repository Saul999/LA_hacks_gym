import reflex as rx
import os
from gemini_api import gemini
import json

def print_schedule(schedule: str):
    json_gemini = json.loads(schedule)
    Sunday = json_gemini["Sunday"]
    Monday = json_gemini["Monday"]
    Tuesday = json_gemini["Tuesday"]
    Wednesday = json_gemini["Wednesday"]
    Thursday = json_gemini["Thursday"]
    Friday = json_gemini["Friday"]
    Saturday = json_gemini["Saturday"]
    return Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday

class FormSelectState1(rx.State):
    form_data: dict = {}
    schedule: str = ""

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
        self.schedule = gemini(form_data)
        print(print_schedule(self.schedule))
        #print(self.schedule)
        #print(type(self.schedule))
        # print(gemini(form_data))

def render_table():
    return rx.table.root(
            rx.table.header(
                rx.table.row(
                    rx.table.column_header_cell("Sunday"),
                    rx.table.column_header_cell("Monday"),
                    rx.table.column_header_cell("Tuesday"),
                    rx.table.column_header_cell("Wednesday"),
                    rx.table.column_header_cell("Thursday"),
                    rx.table.column_header_cell("Friday"),
                    rx.table.column_header_cell("Saturday"),
                ),
            ),
            rx.table.body(
                rx.table.row(  # Sunday
                    rx.table.cell("Danilo Sousa"),
                    rx.table.cell("danilo@example.com"),
                    rx.table.cell("Developer"),
                ),
                rx.table.row(  # Monday
                    rx.table.cell("Danilo Sousa"),
                    rx.table.cell("danilo@example.com"),
                    rx.table.cell("Developer"),
                ),
                rx.table.row(  # Tuesday
                    rx.table.cell("Danilo Sousa"),
                    rx.table.cell("danilo@example.com"),
                    rx.table.cell("Developer"),
                ),
                rx.table.row(  # Wednesday
                    rx.table.row_header_cell("Jasper Eriksson"),
                    rx.table.cell("jasper@example.com"),
                    rx.table.cell("Developer"),
                ),
                rx.table.row(  # Thursday
                    rx.table.row_header_cell("Jasper Eriksson"),
                    rx.table.cell("jasper@example.com"),
                    rx.table.cell("Developer"),
                ),
                rx.table.row(  # Friday
                    rx.table.row_header_cell("Jasper Eriksson"),
                    rx.table.cell("jasper@example.com"),
                    rx.table.cell("Developer"),
                ),
                rx.table.row(  # Saturday
                    rx.table.row_header_cell("Jasper Eriksson"),
                    rx.table.cell("jasper@example.com"),
                    rx.table.cell("Developer"),
                ),  
            ),
)


def form_select1():
    return rx.vstack(
        rx.form.root(
            rx.heading("Welcome to LA Hacks gym scheduler"),
            rx.flex(
                    rx.card("Monday", size="1"),
                    rx.card("Tuesday", size="1"),
                    rx.card("Wednesday", size="1"),
                    rx.card("Thursday", size="1"),
                    rx.card("Friday", size="1"),
                    rx.card("Saturday", size="1"),
                    rx.card("Sunday", size="1"),
                    spacing="2",
                    align_items="flex-start",
                    flex_wrap="wrap",
                ),
            rx.hstack(
                rx.select(
                    ['0', '30', '60'],
                    default_value="0",
                    name="Monday",
                ),
                rx.select(
                    ['0', '30', '60'],
                    default_value="0",
                    name="Tuesday",
                ),
                rx.select(
                    ['0', '30', '60'],
                    default_value="0",
                    name="Wednesday",
                ),
                rx.select(
                    ['0', '30', '60'],
                    default_value="0",
                    name="Thursday",
                ),
                rx.select(
                    ['0', '30', '60'],
                    default_value="0",
                    name="Friday",
                ),
                rx.select(
                    ['0', '30', '60'],
                    default_value="0",
                    name="Saturday",
                ),
                rx.select(
                    ['0', '30', '60'],
                    default_value="0",
                    name="Sunday",
                ),
                rx.button("Submit", type="submit"),
                width="100%",
            ),
            on_submit=FormSelectState1.handle_submit,
            width="100%",
        ),
        rx.divider(width="100%"),
        rx.heading("Results"),
        rx.text(FormSelectState1.form_data.to_string()),
        rx.text(FormSelectState1.schedule),
        width="100%",
    )
def index():
    return rx.vstack(
        form_select1(),
        render_table()
    )

app = rx.App()
app.add_page(index)