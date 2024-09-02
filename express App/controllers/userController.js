const { response } = require("express");
const { createUser, getAllUsers } = require("../models/userModel")

module.exports = {
    create: async (req, res) => {
        try {
            const user = await createUser(req.body);
            if (user.error) {
                return res.send({
                    error: user.error,
                })
            }
            return res.send({
                response: user.response,
            })

        } catch (error) {
            return res.send({
                error: error,
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const users = await getAllUsers();

            if (users.error) {
                return res.send({
                    error: users.error,
                })
            }
            return res.send({
                response: users.response,
            })
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    }
}