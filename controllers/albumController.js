const albumModel = require("../models/albumModel");
const { statusCodes, CustomError } = require("../utilities/");

const mongoose = require("mongoose");


async function getAll(req, res) {
    const result = await albumModel.getAll();

    res
        .status(statusCodes.OK)
        .json(result);
}

async function getById(req, res) {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(`Invalid Id: ${id}`, {error: "The Id must be a string that contains a 24 character hexadecimal value"}, "Bad Id format", statusCodes.BadRequest)
    }

    const result = await albumModel.getById(id);

    res
        .status(statusCodes.OK)
        .json(result);
}

async function createAlbum(req, res) {
    const newAlbumData = req.body;
    const result = await albumModel.createAlbum(newAlbumData);

    res
        .status(statusCodes.Created)
        .json(result);
}

async function updateAlbum(req, res) {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(`Invalid Id: ${id}`, {error: "The Id must be a string that contains a 24 character hexadecimal value"}, "Bad Id format", statusCodes.BadRequest)
    }

    const newAlbumData = req.body;
    const result = await albumModel.updateAlbum(id, newAlbumData);

    res
        .status(statusCodes.NoContent)
        .json();
}

async function deleteAlbum(req, res) {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(`Invalid Id: ${id}`, {error: "The Id must be a string that contains a 24 character hexadecimal value"}, "Bad Id format", statusCodes.BadRequest)
    }

    const result = await albumModel.deleteAlbum(id);

    res
        .status(statusCodes.NoContent)
        .json();
}


module.exports = {
    getAll,
    getById,
    createAlbum,
    updateAlbum,
    deleteAlbum
};