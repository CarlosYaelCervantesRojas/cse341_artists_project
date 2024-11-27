const mongoose = require("mongoose");

const artistSchema = require("../schemas/artistSchema");
const { statusCodes, CustomError } = require("../utilities");

const Artist = mongoose.model("artist", artistSchema);


async function getAll() {
    const result = await Artist.find({}).exec();
    return result;
}

async function getById(id) {
    const result = await Artist.findById(id).exec();

    if (!result) {
        throw new CustomError(`Id: ${id} does not match any artist`, {error: "Id does not exist"}, "Not Found", statusCodes.NotFound);
    }

    return result;
}

async function createArtist(newArtistData) {
    const result = await Artist.create({
        name: newArtistData.name,
        genres: newArtistData.genres,
        popularity: newArtistData.popularity,
        followers: newArtistData.followers,
        nationality: newArtistData.nationality,
        birthday: newArtistData.birthday,
        alive: newArtistData.alive
    });
    

    return result;
}

async function updateArtist(id, newArtistData) {
    const artist = await Artist.findById(id).exec();
    if (!artist) {
        throw new CustomError(`Id: ${id} does not match any artist`, {error: "Id does not exist"}, "Not Found", statusCodes.NotFound);
    }

    artist.name = newArtistData.name;
    artist.genres = newArtistData.genres;
    artist.popularity = newArtistData.popularity;
    artist.followers = newArtistData.followers;
    artist.nationality = newArtistData.nationality;
    artist.birthday = newArtistData.birthday;
    artist.alive = newArtistData.alive;

    const result = await artist.save({ validateBeforeSave: true });

    return result;
}

async function deleteArtist(id) {
    const result = await Artist.deleteOne({ _id: id });
    if (!result.deletedCount) {
        throw new CustomError(`Id: ${id} does not match any artist`, {error: "Id does not exist"}, "Not Found", statusCodes.NotFound);
    }
    return result;
}


module.exports = {
    getAll,
    getById,
    createArtist,
    updateArtist,
    deleteArtist
};