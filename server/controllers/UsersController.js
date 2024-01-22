import userModel from '../models/userModel.js';
import { createPasswordHash } from '../services/auth.js';


class UsersController {
    async index(req, res) {
        try {
            const users = await userModel.find();
            return res.json(users);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await userModel.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            return res.json(user);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async create(req, res) {
        try {
            const { username, password }  = req.body;

            const user = await userModel.findOne({ username });

            if (user) {
                return res
                .status(422)
                .json({ message: `User ${username} already exists.`})
            }
            
            const encryptedPassword = await createPasswordHash(password);

            const newUser = await userModel.create( {
                username, 
                password: encryptedPassword, 
                } );
            
            return res.status(201).json(newUser);

        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { username, password, role } = req.body;

            const user = await userModel.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            const encryptedPassword = await createPasswordHash(password);

            const updatedUser = await user.updateOne( { 
                username,
                password: encryptedPassword,
                role 
                } );

            return res.status(200).json(updatedUser);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' }); 
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const user = await userModel.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            const deletedUser = await user.deleteOne();
            
            return res.status(200).json(deletedUser);

        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }
}

export default new UsersController();