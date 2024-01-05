import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hi I am Homepage");
});

// serves jokes
app.get("/api/jokes", (req, res) => {
  const jokesArray = [
    {
      id: 1,
      title: "Classic Joke",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Pun Alert",
      joke: "I told my wife she should embrace her mistakes. She gave me a hug.",
    },
    {
      id: 3,
      title: "Tech Humor",
      joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    },
    {
      id: 4,
      title: "Animal Comedy",
      joke: "How does a penguin build its house? Igloos it together!",
    },
    {
      id: 5,
      title: "Food Fun",
      joke: "Why did the tomato turn red? Because it saw the salad dressing!",
    },
    {
      id: 6,
      title: "Literary Humor",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 7,
      title: "Space Joke",
      joke: "How do you throw a space party? You planet!",
    },
  ];

  res.send(jokesArray);
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`server running....`);
});
