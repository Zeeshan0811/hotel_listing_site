import Hotel from '../../../database/models/Hotel';
import logger from '../../../services/logger'

export default async function Handler(req, res) {
    const { name, phone, phone_2, email, address, address_line_2, city, country, zip, website, about, important_notice } = req.body;

    try {
        console.log(req.method);
        // Get Hotel List
        if (req.method == 'GET') {
            const hotels = await Hotel.findAll({
                attributes: ['hotel_id', 'name', 'email', 'phone', 'website'],
                limit: 100,
            });
            res.status(200).json(hotels);
        }

        // Creating New hotel
        if (req.method == 'POST') {
            try {
                await Hotel.create({
                    name, phone, phone_2, email, address, address_line_2, city, country, zip, website, about, important_notice
                }).then(function (hotel) {
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
            const hotel = await Hotel.findOne({
                where: { hotel_uri: req.body.hotel_uri },
                attributes: {
                    exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                },
            });

            if (hotel) {
                (name) ? (hotel.name = name) : '';
                (phone) ? (hotel.phone = phone) : '';
                (phone_2) ? (hotel.phone_2 = phone_2) : '';
                (email) ? (hotel.email = email) : '';
                (address) ? (hotel.address = address) : '';
                (address_line_2) ? (hotel.address_line_2 = address_line_2) : '';
                (city) ? (hotel.city = city) : '';
                (country) ? (hotel.country = country) : '';
                (zip) ? (hotel.zip = zip) : '';
                (website) ? (hotel.website = website) : '';
                (about) ? (hotel.about = about) : '';
                (important_notice) ? (hotel.important_notice = important_notice) : '';

                hotel.save();
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