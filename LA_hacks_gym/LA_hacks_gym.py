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
    return rx.hstack(
        form_select1()
    )

app = rx.App()
app.add_page(index)