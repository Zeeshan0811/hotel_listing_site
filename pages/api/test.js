import logger from '../../services/logger'

export default async function handler(req, res) {
    const { query: { id, user } } = req;

    switch (res.method) {
        case 'GET':

            break;
        case 'POST':

            break;
        case 'PUT':

            break;
        case 'DELETE':
            res.setHeader('');
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${res.method} Not Allowed`);
            break;
    }
    res.status(200).json({ name: 'John Doe' })
}