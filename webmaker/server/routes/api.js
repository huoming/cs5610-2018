/**
 * Created by sesha on 6/2/17.
 */
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



//
// router.get('/register', (req, res) => {
//   res.send('register misplaced');
// })

module.exports = router;
