import User from '../../../database/models/User';
import logger from '../../../services/logger';

export default async function Handler(req, res) {
    const { userId, firstName, lastName, phone, email, address, address_line_2, city, country, } = req.body;
    // Updating New Hotel
    if (req.method == 'GET') {
        try {
            // console.log(userId);
            let return_data;
            if (req.query.userId) {
                return_data = await User.findOne({
                    where: { userId: req.query.userId },
                    attributes: {
                        exclude: ['created_by', 'updated_by', 'created_at', 'updated_at']
                    },
                });
            }

            if (return_data === null) {
                res.status(404).json({ "message": "User is not found!" });
            } else {
                res.status(200).json(return_data);
            }
        } catch (e) {
            logger.error(e.stack);
            res.status(400).json({
                error_code: 'get_user',
                message: e.message
            });
        }

    }

    // Updating User
    if (req.method == 'PUT') {
        console.log(req.body);
        const user = await User.findOne({
            where: { userId: userId },
        });
        if (user) {
            user.update({
                firstName, lastName, phone, email, address, address_line_2, city, country,
            });
            res.status(200).send(user);
        } else {
            res.status(400).send('Error in updating new record');
        }
    }


}