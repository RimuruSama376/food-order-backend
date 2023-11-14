import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        street: {
            type: String,
            required: false
        },
        postalCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


// const Menu = mongoose.model('menu', menuSchema);

const Orders = mongoose.model('orders', orderSchema, 'orders')

export default Orders
