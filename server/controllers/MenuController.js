import menuModel from "../models/menuModel.js";

class MenuController {
    async index(req, res) {
        try {
            const item = await menuModel.find();
            return res.json(item);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const item = await menuModel.findById(id);

            if (!item) {
                return res.status(404).json();
            }

            return res.json(item);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async create(req, res) {
        try {
            const { name, description, price, photo } = req.body;

            const item = await menuModel.findOne( {name} );

            if (item) {
                return res
                .status(422)
                .json({ message: `Item ${name} already exists`})
            }

            const newItem = await menuModel.create( {name, description, price, photo} );
            
            return res.status(201).json(newItem);

        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, description, price, photo } = req.body;

            const item = await menuModel.findById(id);

            if (!item) {
                return res.status(404).json();
            }

            await user.updateOne( { name, description, price, photo } );

            return res.status(200).json();
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const item = await menuModel.findById(id);

            if (!item) {
                return res.status(404).json();
            }

            await item.deleteOne();

            return res.status(200).json();
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

}

export default new MenuController();