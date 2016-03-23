#!/bin/bash

npm install

docker pull training4developers/node

docker run -i -t \
	-p 3000:3000 \
	-v `pwd`/:/opt/app \
	--entrypoint /bin/bash \
	training4developers/node
