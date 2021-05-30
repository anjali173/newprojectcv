from flask import Flask, redirect, url_for
from os import environ
from controller.dashboard_controller import dashboard

app = Flask(__name__)
app.config["env"] = environ.get("ENV")
app.secret_key = 'doihjsoij/gdg8d*g/*d8g/d/g*d9g9d*h/dg8d74htfdtg84g5d1g4dg524gs'
app.register_blueprint(dashboard)


@app.route('/')
def index():
    return redirect(url_for('dashboard_controller.login_view'))


if __name__ == '__main__':
    app.run()
