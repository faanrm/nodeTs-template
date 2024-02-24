import express from "express"
import { deleteUser, getAllUsers, registerUser, updateUser } from "../controllers/UserController"

const router = express.Router()

router.get('/get-all-user',getAllUsers)
router.post('/create-user',registerUser)
router.put('/update-user/:id',updateUser)
router.delete("/delete-user/:id", deleteUser)
export default router