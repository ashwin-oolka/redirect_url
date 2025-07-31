const express = require("express");
const app = express();
const PORT = 3000;

// Static route mappings
const staticRoutes = {
  home: "https://oolka.page.link/home",
  insights: "https://oolka.page.link/creditreport",
  creditreport: "https://oolka.page.link/creditreport",
  bankstatement: "https://oolka.page.link/bankstatement",
  rewards: "https://oolka.page.link/rewards",
  securedcard: "https://oolka.page.link/securedcard",
  BankList: "https://oolka.page.link/BankList",
  "get-a-loan": "https://oolka.page.link/get-a-loan",
  "get-a-card": "https://oolka.page.link/get-a-card",
  SubscriptionPayWall: "https://oolka.page.link/SubscriptionPayWall",
  Profile: "https://oolka.page.link/Profile",
};

// Dynamic route generators
const dynamicRoutes = {
  "loans/:id": (params) => `https://oolka.page.link/loans/${params.id}`,
  "cards/:id": (params) => `https://oolka.page.link/cards/${params.id}`,
  "loandetail/:loanID": (params) =>
    `https://oolka.page.link/loandetail/${params.loanID}`,
  "lmsloandetail/:loanID": (params) =>
    `https://oolka.page.link/lmsloandetail/${params.loanID}`,
};

// Register static redirect routes
for (const [key, url] of Object.entries(staticRoutes)) {
  app.get(`/redirect/${key}`, (_, res) => res.redirect(301, url));
}

// Register dynamic redirect routes
for (const [route, handler] of Object.entries(dynamicRoutes)) {
  app.get(`/redirect/${route}`, (req, res) => {
    res.redirect(301, handler(req.params));
  });
}

app.get("/", (_, res) => {
  res.send("🟢 Oolka Redirect Server is running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
