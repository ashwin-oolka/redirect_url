import express, { Router } from "express"
const app = express();
const PORT = 3000;
const router = Router()


const handleURLs = (req, res) => {
    res.redirect(301, `https://oolka.page.link/lmsloandetail/${req.params.loanId}`);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/redirect/loansdetails/:loanId", handleURLs)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


