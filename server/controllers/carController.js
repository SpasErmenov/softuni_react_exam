const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');
const carService = require('../services/carService');

router.get('/catalog', async (req, res) => {
    const photo = await carService.getAll();
    
    res.send('This is catalog!');
});

router.get('/search', async (req, res) => {
    const { name } = req.query;
    const photo = await carService.search(name, paymentMethod);

    res.send('This is search');
});

router.get('/:photoId/details', async (req, res) => {
    const photo = await carService.getOne(req.params.photoId);

    const isOwner = photo.owner.toString() === req.user?._id; 
    const isBuyer = photo.buyers?.some(id => id == req.user?._id);
    
    res.send('This is details');
});

router.get('/:photoId/edit', isAuth, async (req, res) => {
    const photo = await carService.getOne(req.params.photoId);

    res.send('This is edit');
});

router.post('/:photoId/edit', isAuth, async (req, res) => {
    const photoData = req.body;
    //TODO: edit photo
    await carService.edit(req.params.photoId, photoData);
    //TODO: check if owner
    res.send(`This is edit`)
});

router.get('/:photoId/delete', isAuth, async (req, res) => {
    //TODO: delete photo
    await carService.delete(req.params.photoId);
    //TODO: Check if owner

    res.send('This is delete');
});

router.get('/create', isAuth, (req, res) => {
    res.redirect('/');
});

router.post('/create', isAuth, async (req,res) => {
    const photoData = req.body;
    
    try {
        await carService.create(req.user._id, photoData);        
    } catch (error) {
        return res.status(400).send('this is create');
    }

    res.redirect('/');
});


module.exports = router;