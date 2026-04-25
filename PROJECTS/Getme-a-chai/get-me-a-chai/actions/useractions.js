"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payments"
import connectDb from "@/db/connectDb"
import User from "@/models/User"


export const intiate = async (amount, to_username, paymentform) => {
    await connectDb()
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

    instance.orders.create({
        amount: 50000,
        currency: "<currency>",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
}

