# Creating a real-time data table with React and Go

This is an example of using Pusher Channels to create a real-time updated data table in React and Go.

[View tutorial](https://pusher.com/tutorials/realtime-data-table-react-go)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

In order to run this project, ensure that the following software is all installed correctly:

* [Go](https://golang.org/)
* [Dep](https://golang.github.io/dep/)
* [Node.js](https://nodejs.org/en/)
* [Create React App](https://github.com/facebook/create-react-app)

Also ensure that this project is checked out in an appropriate place under the $GOPATH.

### Running the Backend Service

Ensure that Go and Dep are installed and set up on your machine. Download the necessary dependencies by executing `dep ensure`, and then run the backend by running `go run running-results-table.go`.

### Running the Web UI

Ensure that Node.js is installed on your machine. From the `ui` directory execute `npm install` to download the depdendencies and then `npm start` to run the application.

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Go](https://golang.org/) - Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
* [Create React App](https://github.com/facebook/create-react-app) - Create React apps with no build configuration.

