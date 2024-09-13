import { genSaltSync, hashSync } from "bcrypt";
import User from "../models/User.js";
import { GenerateToken } from "../helpers/Token.js";

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, isVerified, expireIn } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(403).send({
                status: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(404).json({
                status: false,
                message: "User email is already exist"
            })
        } else {
            const user = await User.findOne({ firstName: firstName });
            if (user) {
                return res.status(403).json({
                    status: false,
                    message: "User name is already exist"
                })
            } else {
                if (password !== cPassword) {
                    return res.status(403).json({
                        status: false,
                        message: "Password and Confirm Password does not match"
                    })
                }

                let salt = genSaltSync(10);
                let doc;
                if (password?.length > 7) {
                    doc = {
                        firstName,
                        lastName,
                        email,
                        password: hashSync(password, salt)

                    }
                    const savedDoc = await doc.save();
                    if (savedDoc.errors) {
                        return res.status(401).send({
                            status: false,
                            message: "Error in saving database"
                        })
                    } else {
                        savedDoc.password = undefined;

                        const token = await GenerateToken({ data: savedDoc, expiresIn: "24h" });
                        console.log("token", token);

                        return res.status(201).json({
                            status: true,
                            message: "Signup Successfully",
                            token,
                            data: savedDoc
                        })


                    }
                }else {
                    return res
                        .status(FORBIDDEN)
                        .send(sendError({ status: false, message: responseMessages.UN_AUTHORIZED }));
                }


            }
        }


    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}