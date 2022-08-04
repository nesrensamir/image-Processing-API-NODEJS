# image-Processing-API-NODEJS 


Starting scripts
The project uses the following scripts:

Start via nodemon: npm run start
Use prettier: npm run prettier
Use eslint: npm run lint
Build the project: npm run build
Start the server after build: node ./build/.
Use jasmine only: npm run jasmine
Use build + jasmine (preffered): npm run test 


Using the API
The image processing api expects the user to input the following parameters: filename, width, height. If no parameters are specified, a default image will be returned. A sample URL would look as follows: http://localhost:3000/images?width=100&height=100&filename=fjord
