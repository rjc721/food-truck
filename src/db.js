import mongoose from 'mongoose';
import config from './config';

export default callback => {
  mongoose.promise = global.promise;
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
}
