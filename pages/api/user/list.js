import User from '../../../database/models/User';
import logger from '../../../services/logger';

export default async function Handler(req, res) {
    const { type } = req.query;

    try {
        const users = await User.findAll({
            where: { type: type || 2 },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
            limit: 100,
        });
        res.status(200).json(users);
    } catch (e) {
        logger.error(e.stack);
        res.status(400).json({
            error_code: 'get_user',
            message: e.message
        });
    }
}