import Room from '../../../database/models/Room';
import logger from '../../../services/logger'

export default async function handler(req, res) {
    try {
        const rooms = await Room.findAll({
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
            limit: 100,
        });

        if (rooms === null) {
            res.status(404).json({ "message": "Rooms are empty!" });
        } else {
            res.status(200).json({ rooms });
        }
    } catch (e) {
        logger.error(e.stack);
        res.status(400).json({
            error_code: 'get_hotels',
            message: e.message
        });
    }
}