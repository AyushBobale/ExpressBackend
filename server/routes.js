import express, {application} from "express";
import { deleteData, getData, postData, updateData } from "./controller.js";

const router = express.Router();


router.get('/', getData);
router.post('/', postData);
router.put('/', updateData);
router.delete('/', deleteData);

export default router;