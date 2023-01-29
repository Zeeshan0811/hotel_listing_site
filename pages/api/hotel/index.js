import Hotel from '../../../database/models/Hotel';
import logger from '../../../services/logger'
var randomstring = require("randomstring");


export default async function Handler(req, res) {
    const { name, phone, phone_2, email, address, address_line_2, city, country, zip, website, about, important_notice } = req.body;

    try {
        // console.log(req.method);
        // Get Hotel List
        if (req.method == 'GET') {
            let return_data;
            if (req.query.hotel_id) {
                return_data = await Hotel.findOne({
                    where: { hotel_id: req.query.hotel_id },
                    attributes: {
                        exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                    }
                });
            } else {
                return_data = await Hotel.findAll({
                    attributes: {
                        exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                    },
                    limit: 100,
                });
            }
            res.status(200).json(return_data);
        }

        // Creating New hotel
        if (req.method == 'POST') {
            let hotel_uri = randomstring.generate();
            try {
                await Hotel.create({
                    hotel_uri, name, phone, phone_2, email, address, address_line_2, city, country, zip, website, about, important_notice
                }, { isNewRecord: true }).then(function (hotel) {
                    if (hotel) {
                        res.send(hotel);
                        // res.send(hotel.toJSON());
                    } else {
                        res.status(400).send('Error in insert new record');
                    }
                });
            } catch (e) {
                logger.error(e.stack);
                res.status(400).json({
                    error_code: 'post_hotel',
                    message: e.message
                });
            }
        }

        // Updating New Hotel
        if (req.method == 'PUT') {
            console.log(req.body);
            const hotel = await Hotel.findOne({
                where: { hotel_id: req.body.hotel_id },
            });
            if (hotel) {
                hotel.update({
                    name, phone, phone_2, email, website, address, city, country, about, important_notice
                });
                res.send(hotel);
            } else {
                res.status(400).send('Error in updating new record');
            }
        }

    } catch (e) {
        logger.error(e.stack);
        res.status(400).json({
            error_code: 'get_hotels',
            message: e.message
        });
    }
}