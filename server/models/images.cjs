import { Schema, model } from "mongoose";
import { DiSafari } from "react-icons/di";

const imagesSchema =new Schema({
    nameUser: String,
    title: String,
    nameService: String,
    categoty: String,
    descripcion: String,
    time: Number,
    price: Number,
    caracteristicas:String,
    key: String,
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})


export default model('Image', imagesSchema)





