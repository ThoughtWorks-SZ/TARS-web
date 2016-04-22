import mongoose from 'mongoose';

const LogicQuestionRepo = mongoose.model('LogicQuestionRepo', {
  id: Number,
  name: String,
  url: String,
});

export default LogicQuestionRepo;
