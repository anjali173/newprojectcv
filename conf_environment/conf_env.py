import os
from conf_environment.development_conf import DevelopmentConf
from conf_environment.staging_conf import StagingConf
from conf_environment.production_conf import production_conf

if os.environ['ENV'] == 'dev':
    config = DevelopmentConf()
elif os.environ['ENV'] == 'stage':
    config = StagingConf()
else:
    config = production_conf()  # production
