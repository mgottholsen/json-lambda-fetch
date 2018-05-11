# NodeJS Lambda Function
Lambda function built on NodeJS for use with parsing user's latests posts with a custom AWS API gateway and returning a JSON object.

## Install into Lambda
To install, download this repository and include index.js and node_modules.
You may need to run the following from the root of the folder:

```npm install request```

Once downloaded, make sure to update the variable username with your Medium username. Then, zip up the parent folder and login to your AWS account and go to Lambda.

In Lambda, select "Create a Lambda function" button. Select "Blank Function" under blueprint. The next section is configure triggers, just hit "next". Give your function a name. I usually give it the same name as the zip / folder name. Leave runtime as Node.js 4.3 and under Code Entry Type, select "upload a .ZIP file" and select your Function package. Make sure to specify your function role. I usually use "Choose an Existing Role" and select "lambda_basic_execution". After that, click next to finish setup.

## Testing the function
You can then run "Test" and if everything was setup correctly, it should return your formatted JSON object that can be retrieved using the API gateway and then returned to your Web app or AJAX call.
