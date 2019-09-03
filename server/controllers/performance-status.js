const PerformanceStatus = require('../models/performance-status')
const mongoose = require('mongoose')
const PerformanceStatusService = require('./performance-status-service')

exports.getData = function (req, res) {
    console.log('hello')
    PerformanceStatus.find({}, (err, data) => {
        if (err) return res.status(204).send({ success: false, error: 'could not get all data' })
        return res.status(200).send({ success: true, data: data })
    })
}

exports.addData = function (req, res) {
    // const isUserBodyInValidMsg = await UserService.isUserValidForRegistration(req.body)
    // if (isUserBodyInValidMsg) {
    //   return res.status(400).send({
    //     success: false,
    //     error: isUserBodyInValidMsg,
    //   })
    // }
  
    let data = PerformanceStatusService.convertBodyToModel(req.body)
    data._id = new mongoose.Types.ObjectId()
  
    PerformanceStatus.create(data, (err, performanceStatusData) => {
      if (err) return res.status(400).send({ success: false, error: 'Could not add performance data' })
  
      res.status(200).send({ success: true, data: performanceStatusData })
    })
}

exports.deleteData = function (req, res) {
  const { id } = req.params

  PerformanceStatus.deleteOne({ _id: id }, err => {
    if (err) return res.status(204).send({ success: false, error: 'Could not delete data' })
    return res.status(200).send({ success: true })
  })
}

exports.updateData = function (req, res) {
    // const { id } = req.params

    // const isUserBodyInValidMsg = await UserService.isUserNotValidForUpdate(req.body)
  
    // if (isUserBodyInValidMsg) {
    //   return res.status(400).send({
    //     success: false,
    //     error: isUserBodyInValidMsg,
    //   })
    // }
  
    // PerformanceStatus.updateOne({ _id: id }, userModel, { new: true }, (err, user) => {
    //   if (err) return res.status(400).send({ success: false, error: 'Could not update user' })
    //   return res.status(200).send({ success: true, data: user })
    // })
}
