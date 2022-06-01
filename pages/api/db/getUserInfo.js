import { client } from '../../../lib/sanity'

const getUserInfo = async (req, res) => {
    try {
        console.log(req.query.walletAddress), ' rocket'
        const query = `
        *[_type == "users" && walletAddress==walletAddress]{
            name,
            walletAddress,
            "imageUrl": profileImage.asset->url
        }`

        const sanityResponse = await client.fetch(query)

        console.log(sanityResponse, 'fireee')

        res.status(200).send({ message: 'success', data: sanityResponse[0] })
    } catch (error) {
        res.status(500).send({ message: 'error', data: error.message })
    }
}

export default getUserInfo
