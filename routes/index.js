
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Node.js Knockout 台灣黑客頌 - 48 小時不間斷挑戰' });
};
exports.new = function(req, res){
  res.render('new', { title: 'Node.js Knockout 台灣黑客頌 - 48 小時不間斷挑戰' });
};
exports.agenda = function(req, res){
  res.render('agenda', { title: 'Node.js Knockout 台灣黑客頌 - 48 小時不間斷挑戰' });
};
exports.judge = function(req, res){
  res.render('judge', { title: 'Node.js Knockout 台灣黑客頌 - 48 小時不間斷挑戰' });
};
