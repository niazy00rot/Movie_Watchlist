const router = require('express').Router();
const path = require('path')

async function get_root(req, res){
    res.sendFile(path.join(__dirname, '../../frontend/index.html'))

}
router.get('/', get_root)
module.exports = router
