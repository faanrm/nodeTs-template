import express from "express";
import { deleteUserById, getUserByEmail, getUserById, getUsers, createUser, updateUserById } from "../models/UserModels";
import { random, authentification } from "../helpers/index";

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const registerUser = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username } = req.body
        if (!email || !password || !username) {
            return res.status(400).json({ message: "Missing fields!" })
        }

        const isExist = await getUserByEmail(email)
        if (isExist) {
            return res.status(409).json({ message: "This email already exists." });
        }
        const salt = random()
        const user = await createUser({
            email, username,
            authentification: {
                salt,
                password: authentification(salt, password)
            }
        })
        return res.status(200).json(user).end()
    } catch (error) {
        console.log(error); 5
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {

    try {
        const { id } = req.params
        const deletedUser = deleteUserById(id)
        if (!deleteUser) {
            return res.status(404).json({ message: "no user found" })
        }
        return res.status(200).json({ data: deleteUser, message: "User deleted" })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message)
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if (!username) {
            return res.sendStatus(400).json({ message: "error no username" });
        }

        const user = await getUserById(id);

        user.username = username;
        await user.save();

        return res.status(200).json({data : user, message : "user updated"}).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}