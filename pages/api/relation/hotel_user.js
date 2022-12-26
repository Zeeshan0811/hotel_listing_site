import HotelUserRel from '../../../database/models/HotelUserRel';
import User from '../../../database/models/User';
import Hotel from '../../../database/models/Hotel';

export default async function Handler(req, res) {
    const { rel_type, hotel_id, user_id } = req.body;
    let rel = null

    if (req.method == 'GET') {
        const rel_id = req.body.rel_id;


        if (rel_id) {
            // Get Single Relation
            rel = await HotelUserRel.findOne({
                where: { rel_id },
                attributes: {
                    exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                },
                limit: 100,
                include: [{
                    model: User,
                    attributes: {
                        exclude: ['created_at', 'updated_at']
                    },
                },
                {
                    model: Hotel,
                    attributes: {
                        exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                    },
                }],
            });
        } else {
            // Get Relation List
            rel = await HotelUserRel.findAll({
                attributes: {
                    exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                },
                limit: 100,
                include: [{
                    model: User,
                    attributes: {
                        exclude: ['created_at', 'updated_at']
                    },
                },
                {
                    model: Hotel,
                    attributes: {
                        exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                    },
                }],
            });
        }

        res.status(200).json({ rel });
    }


    // Create New Room
    if (req.method == 'POST') {
        await HotelUserRel.create({
            rel_type,
            hotel_id,
            user_id
        }).then(function (rel) {
            if (rel) {
                res.status(200).send(rel);
            } else {
                res.status(400).send('Error in insert new record');
            }
        });
    }

    // Update New Room
    if (req.method == "PUT") {
        rel = await HotelUserRel.findOne({
            where: { rel_id: req.body.rel_id },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
        });

        if (rel) {
            (rel_type) ? (rel.rel_type = rel_type) : 0;
            (hotel_id) ? (rel.hotel_id = hotel_id) : 0;
            (user_id) ? (rel.user_id = user_id) : 0;

            room.save();
            res.send(rel);
        } else {
            res.status(400).send('Error in updating new record');
        }
    }
}


