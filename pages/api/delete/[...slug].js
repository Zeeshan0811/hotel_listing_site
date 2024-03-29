import logger from '../../../services/logger';
import Allsetup from '../../../database/models/Allsetup';
import Hotel from '../../../database/models/Hotel';
import Room from '../../../database/models/Room';
import User from '../../../database/models/User';
import HotelUserRel from '../../../database/models/HotelUserRel';


export default async function Handler(req, res) {
    const { slug } = req.query
    const type = slug[0];
    const id = slug[1];
    const fk_id = slug[2];
    let row = null;
    let modal = null;
    let where_clue = null;
    let unitId = "";

    if (req.method !== 'DELETE') {
        res.status(405).send({ message: 'Only DELETE requests are allowed' })
        return
    }

    switch (type) {
        case "allsetup":
            modal = Allsetup;
            where_clue = { "unitId": id };
            break;
        case "hotel":
            modal = Hotel;
            where_clue = { "hotel_id": id };
            break;
        case "room":
            modal = Room;
            where_clue = { "room_id": id };
            break;
        case "user":
            modal = User;
            where_clue = { "userId": id };
            break;
        case "rel_hotel_user":
            modal = HotelUserRel;
            where_clue = { "rel_id": id };
            break;

        default:
            break;
    }

    try {
        row = await modal.findOne({
            where: where_clue
        });
    } catch (e) {
        logger.error(e.stack);
        res.status(400).json({
            error_code: 'delete_error',
            message: e.message
        });
    }


    if (row) {
        await row.destroy().then(); // deletes the row
        await res.status(200).json({ success: "Data has deleted succefully." });
    } else {
        res.status(404).json({ "message": "Data is not found!" });
    }
}