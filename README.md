# node-helloworld-docker
This is a sample helloworld nodejs api running on docker container.

### Pre-Requisite
1) Install docker desktop for corresponding Operating System (https://www.docker.com/products/docker-desktop).
2) Once Installed, run the docker desktop.

### Steps to run the application in docker
1) git clone https://github.com/Barathwaja/node-helloworld-docker.git
2) cd helloworld
3) npm install
4) npm start
4) check the ExpressJS API is working or not
5) API Details
    - localhost:9000/
    - localhost:9000/hello
6) stop the NodeJS server using Ctrl+C

##### Docker Build Image
7) docker build -t helloworld-node-10 . <br/> where -t is the tag of the docker image
#### Docker Run Image on Container
8) docker run -p 9000:9000 -d helloworld-node-10 <br/> where <br/>
-p is to expose the internal port outside the docker container
-d is to run the container in the detached mode
#### Docker Container Id
9) docker ps
#### Docker Container Logs
10) docker logs <container-id> 
11) Follow Step 5 after checking logs