import json

from flask import Blueprint, render_template
from service.api import get_candidates_list
dashboard = Blueprint('dashboard_controller', __name__)


@dashboard.route('/')
def login_view():
    list_details = get_candidates_list()
    if list_details['status'] and list_details is not None:
        candidate_list = list_details['data']

    else:
        candidate_list = None
    print(candidate_list)

    return render_template("index.html",candidate_list=candidate_list)




