const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectIdSchema = Schema.ObjectId

const PerformanceStatus = new Schema(
  {
    _id: ObjectIdSchema,
    networkElement: String,
    location: String,
    port: String,
    direction: String,
    type: String,
    fromTime: String,
    toTime: String,
  },
  { timestamps: { createdAt: 'created_at' } },
)


mongoose.set('useFindAndModify', false)
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('PerformanceStatus', PerformanceStatus)
