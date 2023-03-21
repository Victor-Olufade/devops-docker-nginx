## common docker commands

## docker build -t node-docker-nginx .: build image from Dockerfile in root directory giving it a tag name of 'node-docker-nginx'

## docker run -p 3000:3000 -d --name node-docker node-docker-nginx: spin up container naming it 'node-docker' by running image 'node-docker-nginx' in detached mode; mapping port 3000 on local/remote machine to port 3000 on docker container

## docker run -v $(pwd):/app -p 3000:3000 -d --name node-docker node-docker-nginx: does the same as the preceeding but adds a synchrinization btw current working dir and /app dir in container

## docker run -v $(pwd):/app:ro -p 3000:3000 -d --name node-docker node-docker-nginx: the ':ro' specifies read-only

## docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-docker node-docker-nginx: -v /app/node_modules ensures the nodemodules in app within container is not overwritten by the initial bind-mount

## docker exec -it node-docker bash: open container 'node-docker' file in interactive mode

## exit: to exit bash interactive mode

## docker rm node-docker -f: delete container 'node-docker'

## docker ps -a: show all containers started or stopped

## docker logs node-docker: logs the console of your container in the log of your local machine

## docker volume prune: remove all unnecessary volumes