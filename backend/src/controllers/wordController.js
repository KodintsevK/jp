const Word = require('../models/Word');

class wordController {
    constructor() {

    }

    async saveWord(req, res) {
        try {
            const { meaning, writing } = req.body;
            await Word.create({meaning, writing});
            res.status(200).json({ status: 'added'})   
        } catch (error) {
            console.log(error);
            res.status(500).json({status: 'error'})
        }
    }

    async getWord() {

    }
}

module.exports = wordController