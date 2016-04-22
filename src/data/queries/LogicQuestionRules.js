import LogicQuestionRule from '../schema/LogicQuestionRule';

exports.find = (req, res) => {
  LogicQuestionRule.find({}, (err, obj) => {
    res.send(obj);
  });
};

exports.add = (req, res) => {
  const rule = new LogicQuestionRule({
    level: 1,
    amount: 5,
    repo_id: '57199fe3dcc751d80ab80992',
    template_id: '57199fe3dcc751d80ab80992',
  });

  rule.save((err) => {
    if (err) {
      res.send({ success: false, error: err });
    } else {
      res.send({ success: true });
    }
  });
};
