import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

import { checkPassword } from "../services/auth.js";
import authConfig from '../config/auth.js';

class SessionsController {
    async create(req, res) {
        const { username, password } = req.body;
        
        const user = await userModel.findOne({ username });

        if(!user) {
            return res.status(401).json({ error: 'User / password invalid.' });
        }

        if (!checkPassword(user, password)) {
            return res.status(401).json({ error: 'User / password invalid.' });
        }

        const { id } = user;

        return res.json({
            user: {
                id,
                username
            },
            token: jwt.sign( { id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        });
    }
}

export default new SessionsController();