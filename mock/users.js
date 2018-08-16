export default {
    'get /api/users/count': function (req, res, next) {
        res.json({
            data: Math.ceil(Math.random() * 1000)
        })
    },
    'get /api/users/1234': function (req, res, next) {
        setTimeout(() => {
            res.json({
                result: [
                    {
                        id: 1234,
                        userName: "liguangwei",
                        city: "北京"
                    }
                ]
            })
        }, 1500)
    }
}