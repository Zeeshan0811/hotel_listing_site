import Room from '../../../database/models/Room';

export default async function (req, res) {
    const { hotel_id, title, short_descritpion, description, facilities, views, breakfast, services, guests, beds, area } = req.body;

    // Get All The Rooms
    if (req.method == 'GET') {
        const room = await Room.findAll({
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
            limit: 100,
        });
        res.status(200).json({ room });
    }


    // Create New Room
    if (req.method == 'POST') {
        await Room.create({
            hotel_id,
            title,
            short_descritpion,
            description,
            facilities,
            views,
            breakfast,
            services,
            guests,
            beds,
            area
        }).then(function (room) {
            if (room) {
                res.status(200).send(room);
            } else {
                res.status(400).send('Error in insert new record');
            }
        });
    }

    // Update New Room
    if (req.method == "PUT") {
        const room = await Room.findOne({
            where: { uri: req.body.uri },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
        });

        if (room) {
            (hotel_id) ? (room.hotel_id = hotel_id) : '';
            (title) ? (room.title = title) : '';
            (short_descritpion) ? (room.short_descritpion = short_descritpion) : '';
            (description) ? (room.description = description) : '';
            (facilities) ? (room.facilities = facilities) : '';
            (views) ? (room.views = views) : '';
            (breakfast) ? (room.breakfast = breakfast) : '';
            (services) ? (room.services = services) : '';
            (guests) ? (room.guests = guests) : '';
            (beds) ? (room.beds = beds) : '';
            (area) ? (room.area = area) : '';

            room.save();
            res.send(room);
        } else {
            res.status(400).send('Error in updating new record');
        }
    }




}




// res.status(200).json({ message: "Success!" });
// res.json({ message: "Invalid Credentials" });