import User from '../../../database/models/User';
import logger from '../../../services/logger';

export default async function handler(req, res) {
    const { userId } = req.body;
    try {
        // console.log(userId);
        const user = await User.findOne({
            where: { userId: userId },
            attributes: {
                exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
            },
        });

        if (user === null) {
            res.status(404).json({ "message": "User is not found!" });
        } else {
            res.status(200).json({ user });
        }
    } catch (e) {
        logger.error(e.stack);
        res.status(400).json({
            error_code: 'get_user',
            message: e.message
        });
    }
}