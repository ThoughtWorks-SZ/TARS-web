import LogicTemplate from '../schema/LogicTemplate';

exports.find = (req, res) => {
  LogicTemplate.find({}, (err, obj) => {
    res.send(obj);
  });
};

exports.add = (req, res) => {
  const template = new LogicTemplate({});

  template.save((err) => {
    if (err) {
      res.send({ success: false, error: err });
    } else {
      res.send({ success: true });
    }
  });
};
