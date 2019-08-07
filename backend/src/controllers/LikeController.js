const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targeDev = await Dev.findById(devId);

        if(!targeDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }

        if(targeDev.likes.includes(loggedDev._id)) {
            console.log('DEU MATCH');
        }

        loggedDev.likes.push(targeDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
}