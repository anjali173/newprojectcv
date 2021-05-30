import json

import requests
from conf_environment.conf_env import config

api_base_url = config.base_url


def get_candidates_list():
    url = api_base_url + "candidates"
    response = requests.get(url)
    return response.json() if response.status_code == 200 and len(response.json()) > 0 else None


