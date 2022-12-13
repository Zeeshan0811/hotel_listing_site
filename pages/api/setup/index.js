import Allsetup from '../../../database/models/Allsetup';
import logger from '../../../services/logger'

export default async function handler(req, res) {
    try {
        const allsetup = await Allsetup.findAll({
            attributes: ['type', 'title', 'icon'],
            limit: 100
        });
        res.status(200).json({ allsetup });
    } catch (e) {
        logger.error(e.stack);
        res.status(400).json({
            error_code: 'get_allsetup',
            message: e.message
        });
    }
}
// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
// }