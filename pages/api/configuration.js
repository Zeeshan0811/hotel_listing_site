export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        res.status(200).json({ name: 'John Doe from post message' })
    } else {
        // Handle any other HTTP method
        res.status(200).json({ name: 'John Doe from other method' })
    }
}