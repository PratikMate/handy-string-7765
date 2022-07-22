const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    title: { type: String, require: false },
    starttime: { type: String, require: true },
    endtime: { type: String, require: true },
    timediff: { type: String, require: true },
    userId: { type: String, require: true },
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;