#!/bin/bash

docker run -it -v ./src:/api/src --network host koala-api
