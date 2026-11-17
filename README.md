# Social Media API —( MongoDB-Lab 1)

A lightweight Node.js and Express backend service configured to connect securely to a MongoDB Atlas cluster using environment variables and ES Modules.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js 
- **Database & Driver:** MongoDB Atlas 
- **Environment Management:** dotenv

# Reflection Questions
# 1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
In a real app, only our backend server needs to talk to the database—regular users never connect to it directly. Whitelisting specific IP addresses acts like a lock on the door, so even if someone somehow guesses or steals our database password, they still can't get in from their own computer. Leaving it open to 0.0.0.0/0 means anyone on the internet can reach our database login, which opens us up to hackers trying to guess passwords or flooding the server with fake traffic.

# 2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
The dotenv package lets us store sensitive info like our database password and connection link inside a hidden .env file on our own computer, instead of hardcoding them directly into server.js where anyone on GitHub could see them. When we actually deploy an app to a live hosting service like Render, Vercel, or AWS, we don't upload the .env file—instead, we type those secret variables directly into the hosting website's settings dashboard or use their built-in secret managers.

# 3. If your application failed to connect, what are the first few steps you would take to debug the issue?
First, I would read the error message in my terminal to see if it's a wrong password (Authentication failed) or a network/timeout problem. Next, I would check my .env file to make sure it is in the main project folder, import "dotenv/config" is at the very top of server.js, and I replaced <password> properly without leaving the < > brackets around it. Finally, I would log into MongoDB Atlas to make sure my IP address (0.0.0.0/0) is active under Network Access and that my database user has read and write permissions.