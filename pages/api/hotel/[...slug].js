import Room from '../../../database/models/Room';


export default async function Handler(req, res) {
    const { slug } = req.query
    const hotel_uri = slug[0];
    const request_type = slug[1];

    // Get Room List
    if (request_type == "rooms") {
        const rooms = await Room.findAll({
            // where: { hotel_id: hotel_id },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
            limit: 100,
        });
        if (rooms === null) {
            res.status(404).json({ "message": "No Room Found!" });
        } else {
            res.status(200).json(rooms);
        }
    }

    // Single Room 
    if (request_type == "room") {
        const room_uri = slug[2];

        const room = await Room.findOne({
            where: { uri: room_uri },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
        });
        if (room === null) {
            res.status(404).json({ "message": "No Room Found!" });
        } else {
            res.status(200).json(room);
        }
    }
}