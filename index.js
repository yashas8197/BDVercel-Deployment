const express = require("express");
const app = express();

function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}

app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

function getSum(num1, num2) {
  return num1 + num2;
}

app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});

function getSubscriptionStatus(username, isSubcribed) {
  if (isSubcribed) {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === "true";
  res.send(getSubscriptionStatus(username, isSubscribed));
});

function getDiscountedPrice(price, discount) {
  return price - price * (discount / 100);
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});

function getPersonalizedGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}

app.get("/personalized-greeting", (req, res) => {
  let age = parseInt(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  return discountedPrice + discountedPrice * (tax / 100);
}

app.get("/final-price", (req, res) => {
  const price = parseFloat(req.query.price);
  const discount = parseFloat(req.query.discount);
  const tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});

function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;  
}

app.get("/total-exercise-time", (req, res) => {
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running in port " + PORT);
});
