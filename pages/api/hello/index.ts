export const data = [
    {
        id: '1',
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        id: '2',
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        gender: 'n/a',
    },
]

export default function handler(req, res) {
    res.status(200).json(data)
}
