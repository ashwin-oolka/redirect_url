import express, { Router } from "express"
const app = express();
const PORT = 3000;
const router = Router()


const handleURLs = (req, res) => {
    console.log(req.params);

    // res.status(200).send("done");
    res.redirect(301, `https://github.com/${req.params.loanId}`);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/redirect/loansdetails/:loanId", handleURLs)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


