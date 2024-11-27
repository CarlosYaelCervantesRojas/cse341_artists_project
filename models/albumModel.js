const mongoose = require("mongoose");

const { statusCodes, CustomError } = require("../utilities");
const albumSchema = require("../schemas/albumSchema");

const Album = mongoose.model("Album", albumSchema);

async function getAll() {
    const result = await Album.find({}).exec();
    return result;
}

async function getById(id) {
    const result = await Album.findById(id).exec();

    if (!result) {
        throw new CustomError(`Id: ${id} does not match any album`, {error: "Id does not exist"}, "Not Found", statusCodes.NotFound);
    }

    return result;
}

async function createAlbum(newAlbumData) {
    const result = await Album.create({
        name: newAlbumData.name,
        totalTracks: newAlbumData.totalTracks,
        genres: newAlbumData.genres,
        popularity: newAlbumData.popularity,
    });
    

    return result;
}

async function updateAlbum(id, newAlbumData) {
    const album = await Album.findById(id).exec();
    if (!album) {
        throw new CustomError(`Id: ${id} does not match any album`, {error: "Id does not exist"}, "Not Found", statusCodes.NotFound);
    }

    album.name = newAlbumData.name;
    album.totalTracks = newAlbumData.totalTracks;
    album.genres = newAlbumData.genres;
    album.popularity = newAlbumData.popularity;

    const result = await album.save({ validateBeforeSave: true });

    return result;
}

async function deleteAlbum(id) {
    const result = await Album.deleteOne({ _id: id });
    if (!result.deletedCount) {
        throw new CustomError(`Id: ${id} does not match any album`, {error: "Id does not exist"}, "Not Found", statusCodes.NotFound);
    }
    return result;
}

module.exports = {
    getAll,
    getById,
    createAlbum,
    updateAlbum,
    deleteAlbum
};