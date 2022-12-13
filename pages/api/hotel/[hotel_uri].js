import Hotel from '../../../database/models/Hotel';
import logger from '../../../services/logger'

export default async function handler(req, res) {
    const { query: { hotel_uri } } = req;
    try {
        const hotel = await Hotel.findOne({
            where: { hotel_uri: hotel_uri },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
        });

        if (hotel === null) {
            res.status(404).json({ "message": "Hotel is not found!" });
        } else {
            res.status(200).json({ hotel });
        }
    } catch (e) {
        logger.error(e.stack);
        res.status(400).json({
            error_code: 'get_hotels',
            message: e.message
        });
    }
}