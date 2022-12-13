import User from '../../../database/models/User';

export default async function (req, res) {
    const { firstName, lastName, type, email, phone, address, address_line_2, city, country, zip } = req.body;

    console.log(req.body);

    await User.create({
        uri,
        type,
        firstName,
        lastName,
        email,
        phone,
        address,
        address_line_2,
        city,
        country,
        zip
    }).then(function (users) {
        if (users) {
            res.send(users);
        } else {
            res.status(400).send('Error in insert new record');
        }
    });
}




// res.status(200).json({ message: "Success!" });
// res.json({ message: "Invalid Credentials" });