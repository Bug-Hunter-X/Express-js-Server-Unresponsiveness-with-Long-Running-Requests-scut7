# Express.js Server Unresponsiveness with Long-Running Requests

This repository demonstrates a common issue in Express.js applications where the server becomes unresponsive when handling requests that take an extended period to process.  The problem stems from the fact that Express.js, by default, uses a single thread to handle requests.  If one request takes a long time, subsequent requests will be blocked.

## Bug

The `bug.js` file contains an Express.js server with a route that simulates a long-running operation using `setTimeout`.  When you make a request to this server, it will take 5 seconds to respond.  During this 5-second period, the server will not accept any other requests, leading to unresponsiveness.

## Solution

The `bugSolution.js` file shows how to address this issue using techniques like clustering or asynchronous operations with promises or async/await to prevent blocking.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`.
4. Make multiple requests to `http://localhost:3000/`.
5. Observe that after the first request, subsequent requests will hang until the first request completes.

Then run `node bugSolution.js` and repeat the steps to see the improved response.