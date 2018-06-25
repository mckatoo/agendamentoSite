#!/bin/bash

docker run -ti \
--name=agendamentoSite \
--network=host \
-v $(pwd)/www:/var/www \
node /bin/bash
