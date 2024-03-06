import express from "express";
import { Routes } from "./routes";

const app = express() ;

Routes(app);

async function Main() {

    try {
    }

    catch (error) {

        console.log(error);
    }
}

Main();
app.listen(8000, () => {
console.log(" Server running on port 8000");

});