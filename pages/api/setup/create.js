import Allsetup from '../../../database/models/Allsetup';

export default async function Handler(req, res) {
    const { type, title } = req.body;

    console.log(req.body);

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    await Allsetup.create({
        type,
        title
    }).then(function (allsetup) {
        if (allsetup) {
            res.send(allsetup);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
}




// res.status(200).json({ message: "Success!" });
// res.json({ message: "Invalid Credentials" });