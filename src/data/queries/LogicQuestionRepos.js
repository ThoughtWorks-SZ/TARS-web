import LogicQuestionRepo from '../schema/LogicQuestionRepo';

exports.find = (req, res) => {
  LogicQuestionRepo.find({}, (err, obj) => {
    res.send(obj);
  });
};

exports.add = (req, res) => {
  const repo = new LogicQuestionRepo({ name: 'test', url: 'www.url.com' });

  repo.save((err) => {
    if (err) {
      res.send({ success: false, error: err });
    } else {
      res.send({ success: true });
    }
  });
};
