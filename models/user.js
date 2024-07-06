const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    userName: ObjectId,
    
  email: { type: String, unique:true, required:true},

  thoughts: String,

  friends: Date

});