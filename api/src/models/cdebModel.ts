import { Model, model, Schema } from "mongoose"

// ---------------------------------------------------------------------------------------------------------------------
//  Reservation Model
// ---------------------------------------------------------------------------------------------------------------------

export interface IPassCDEB {
    code1: string
    code2: string
}

export interface IReservationDocument extends IPassCDEB {
    createdAt: string
    updatedAt: string
}

export interface IReservationModel extends Model<IReservationDocument> {
    save: () => void
}

// ---------------------------------------------------------------------------------------------------------------------
// Reservation Schema
// ---------------------------------------------------------------------------------------------------------------------

const cdebSchema = new Schema<IReservationDocument>(
    {
        code1: {
            type: String,
            required: true,
        },
        code2: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

// ---------------------------------------------------------------------------------------------------------------------
// Schema registration
// ---------------------------------------------------------------------------------------------------------------------

export const cdebModel = model<IReservationDocument, IReservationModel>(
    "cdeb",
    cdebSchema
)
