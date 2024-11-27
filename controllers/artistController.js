const artistModel = require("../models/artistModel");
const { statusCodes, CustomError } = require("../utilities/");

const mongoose = require("mongoose");


async function getAll(req, res) {
    const result = await artistModel.getAll();

    res
        .status(statusCodes.OK)
        .json(result);
}

async function getById(req, res) {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(`Invalid Id: ${id}`, {error: "The Id must be a string that contains a 24 character hexadecimal value"}, "Bad Id format", statusCodes.BadRequest)
    }

    const result = await artistModel.getById(id);

    res
        .status(statusCodes.OK)
        .json(result);
}

async function createArtist(req, res) {
    const newArtistData = req.body;
    const result = await artistModel.createArtist(newArtistData);

    res
        .status(statusCodes.Created)
        .json(result);
}

async function updateArtist(req, res) {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(`Invalid Id: ${id}`, {error: "The Id must be a string that contains a 24 character hexadecimal value"}, "Bad Id format", statusCodes.BadRequest)
    }

    const newArtistData = req.body;
    const result = await artistModel.updateArtist(id, newArtistData);

    res
        .status(statusCodes.NoContent)
        .json();
}

async function deleteArtist(req, res) {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
        throw new CustomError(`Invalid Id: ${id}`, {error: "The Id must be a string that contains a 24 character hexadecimal value"}, "Bad Id format", statusCodes.BadRequest)
    }

    const result = await artistModel.deleteArtist(id);

    res
        .status(statusCodes.NoContent)
        .json();
}

module.exports = {
    getAll,
    getById,
    createArtist,
    updateArtist,
    deleteArtist
};