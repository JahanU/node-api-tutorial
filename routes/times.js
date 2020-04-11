const express = require('express'); // Import package
const router = express.Router();


var date = new Date();

router.get('/', (req, res) => {
    res.send(date);
    console.log(date.getDate());
});

module.exports = router;