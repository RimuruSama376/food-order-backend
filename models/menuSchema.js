import mongoose from 'mongoose'

const menuSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        description: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)


// const Menu = mongoose.model('menu', menuSchema);

const Menu = mongoose.model('menu', menuSchema, 'menu')

export default Menu
