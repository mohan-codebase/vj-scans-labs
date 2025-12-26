
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email?: string;
    phone: string;
    package?: string;
    message?: string;
    source?: string;
    createdAt: Date;
}

const ContactSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
        },
        package: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
        },
        source: {
            type: String,
            default: 'Website',
        },
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt
    }
);

// Prevent overwriting the model if it's already compiled
const Contact: Model<IContact> =
    mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
