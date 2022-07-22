const { Router } = require("express")
const ProjectModel = require("../models/project")
const projectRouter = Router();

projectRouter.get("/:userId/projects", async (req, res) => {
    const userId = req.params.userId
    const tasks = await ProjectModel.find({ userId })
    res.send(tasks)
})

projectRouter.post("/:userId/projects", async (req, res) => {
    const userId = req.params.userId
    let payload = {
        ...req.body,
        userId
    }
    const task = await new ProjectModel(payload)
    task.save((err, success) => {
        if (err) {
            return res.status(500).send({ message: "something went wrong" })
        }
        return res.status(201).send(success)
    })
})

module.exports = projectRouter;

