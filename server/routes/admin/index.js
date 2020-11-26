// 后台的路由
module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    router.post('/categories', async(req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    app.use('/admin/api', router)
}
process.on('unhandledRejection', error => {
    console.error('unhandledRejection', error);
    process.exit(1) // To exit with a 'failure' code
  });