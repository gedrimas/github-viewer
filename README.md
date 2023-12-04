# GitHub repository viewer (TS+REACT+GraphQL) 

The app has been deployed for your convenience on my local k3s server. You can check it out here: https://ivelum.server.gedrimas.eu1.kubegateway.com/

To up and run the app locally first of all you need Docker to be installed on your machine. 

Pull the docker image from the public repository:

- for AMD CPU:
  `docker pull gedrimas/example-application:github-viewer-amd.v1.0.0`

- for ARM CPU:
  `docker pull gedrimas/example-application:github-viewer-arm.v1.0.0`

To run the container for example on Mac OS M1:
  `docker run -d -p 3000:80  gedrimas/example-application:github-viewer-arm.v1.0.0`

Open the link: http://localhost:3000/

