class NewController {
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('NEW DEETAIL');
  }
}

module.exports = new NewController();
