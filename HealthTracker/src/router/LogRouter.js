import { Router } from "express";
import { saveLog, getAllLog, deleteLog, updateLog } from "../controller/LogController.js";

const logRouter = Router();

logRouter.post("/save", saveLog);
logRouter.get("/getall",getAllLog)
logRouter.delete("/delete/:id",deleteLog);
logRouter.put("/update/:id",updateLog);

export default logRouter;
