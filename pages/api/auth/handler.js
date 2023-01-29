import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const handler = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something went wrong! ${error.message}` });
    }, onNoMatch(req, res) {
        res.status(405).json({ error: `Method $(req.method) is not allowed!` });
    }
});


export default handler;