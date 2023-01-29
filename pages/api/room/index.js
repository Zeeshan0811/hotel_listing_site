import Room from '../../../database/models/Room';
var randomstring = require("randomstring");

export default async function Handler(req, res) {
    const { hotel_id, uri, title, short_descritpion, description, beds, area, guest, price, service_list } = req.body;
    // res.status(200).send();

    // Get All The Rooms
    if (req.method == 'GET') {
        let return_data;
        if (req.query.hotel_id) {
            return_data = await Room.findAll({
                where: { hotel_id: req.query.hotel_id },
                attributes: {
                    exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                },
            });
        } else if (req.query.room_id) {
            return_data = await Room.findOne({
                where: { room_id: req.query.room_id },
                attributes: {
                    exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                },
            });
        } else if (req.query.uri) {
            return_data = await Room.findOne({
                where: { uri },
                attributes: {
                    exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                },
            });
        } else {
            return_data = await Room.findAll({
                attributes: {
                    exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                },
                limit: 100,
            });
        }
        res.status(200).json(return_data);
    }


    // Create New Room
    if (req.method == 'POST') {
        let uri = randomstring.generate();
        let services = JSON.stringify(service_list);
        await Room.create({
            hotel_id, uri, title, short_descritpion, description, beds, area, guest, price, services
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
        let room_id = req.body.room_id;
        const room = await Room.findOne({
            where: { room_id },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
        });

        // res.status(200).send(room);

        if (room) {
            room.update({
                title, short_descritpion, description, beds, area, guest, price,
                services: JSON.stringify(service_list)
            })
            // room.save();
            res.status(200).send(room);
        } else {
            res.status(400).send('Error in updating new record');
        }
    }

}




// res.status(200).json({ message: "Success!" });
// res.json({ message: "Invalid Credentials" });