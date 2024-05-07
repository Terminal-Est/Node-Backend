import { AppDataSource } from "../data/data-source";
import { Sponsor } from "../data/entity/sponsor";
import { Video } from "../data/entity/video";
import { validate } from "class-validator";

// Create a sponsor in DATA database.
async function createSponsor(sponsor: Sponsor) {
    return await AppDataSource.createQueryBuilder()
        .insert()
        .into(Sponsor)
        .values([
            { 
                email: sponsor.email,
                name: sponsor.name,
                description: sponsor.description,
                address: sponsor.address,
                city: sponsor.city,
                state: sponsor.state,
                postcode: sponsor.postcode,
                pnumber: sponsor.pnumber
            }
        ])
        .execute();
}

// Get sponsor object from email address.
async function getSponsorEmail(email: string) {
    var promise = await AppDataSource.getRepository(Sponsor)
        .createQueryBuilder("sponsor")
        .where("sponsor.email = :id", {id: email})
        .getOne();
    return new Promise<Sponsor>((resolve, reject) => {
        if (promise != null) {
            var sponsor: Sponsor = promise;
            return resolve(sponsor);
        } else {
            return reject(false);
        }
    })
}

// Get a sponsor object based on name.
async function getSponsorName(name: string) {
    var promise = await AppDataSource.getRepository(Sponsor)
        .createQueryBuilder("sponsor")
        .where("sponsor.name = :id", {id: name})
        .getOne();
    return new Promise<Sponsor>((resolve, reject) => {
        if (promise != null) {
            var sponsor: Sponsor = promise;
            return resolve(sponsor);
        } else {
            return reject(false);
        }
    })
}

// Get a sponsor object based on SID.
async function getSponsorSID(sid: number) {
    var promise = await AppDataSource.getRepository(Sponsor)
        .createQueryBuilder("sponsor")
        .where("sponsor.sid = :id", {id: sid})
        .getOne();
    return new Promise<Sponsor>((resolve, reject) => {
        if (promise != null) {
            var sponsor: Sponsor = promise;
            return resolve(sponsor);
        } else {
            return reject(false);
        }
    })
}

// Get all sponsors in the database.
async function getAllSponsors() {
    var promise = await AppDataSource.getRepository(Sponsor)
        .createQueryBuilder("sponsor")
        .getMany();
    return promise;
}

// Validate sponsor details against class validator.
async function validateSponsor(sponsor: Sponsor) {
    const errors = await validate(sponsor)
    return new Promise<boolean>(function(resolve, reject) {
        if (errors.length > 0) {
            return reject(errors);
        } else {
            return resolve(true)
        }
    });
}

async function updateSponsor(sponsor: Sponsor) {
    return await AppDataSource.createQueryBuilder()
        .update(Sponsor)
        .set({
            email: sponsor.email,
            address: sponsor.address,
            city: sponsor.city,
            state: sponsor.state,
            postcode: sponsor.postcode,
            pnumber: sponsor.pnumber
        })
        .where("sid = :id", {id: sponsor.sid})
        .execute();
}

async function deleteSponsorData(sid: number) {
    return await AppDataSource.getRepository(Sponsor)
        .createQueryBuilder("sponsor")
        .delete()
        .where("sid = :id", {id: sid})
        .execute();
}

async function getSponsorVideos(sid: number) {
    var sponsorVideos = await AppDataSource.getRepository(Video)
        .createQueryBuilder("sponsorVideos")
        .where("sponsorVideos.sid = :id", { id: sid })
        .getMany();

    return new Promise<Video[]>((resolve , reject) => {
        if (sponsorVideos.length == 0) {
            return reject(false);
        } else {
            return resolve(sponsorVideos);
        }
    })
}


export {
    createSponsor,
    getAllSponsors,
    getSponsorEmail,
    getSponsorName,
    getSponsorSID,
    deleteSponsorData,
    updateSponsor,
    validateSponsor,
    getSponsorVideos
}