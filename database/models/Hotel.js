import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initHotel = (sequelize, Types) => {
    class Hotel extends Model { }
    Hotel.init(
        {
            hotel_id: { type: DataTypes.INTEGER, primaryKey: true },
            name: Types.STRING,
            email: Types.STRING,
            phone: Types.STRING,
            phone_2: Types.STRING,
            email: Types.STRING,
            website: Types.STRING,
            about: Types.STRING,
            important_notice: Types.STRING,
            address: Types.STRING,
            address_line_2: Types.STRING,
            city: Types.STRING,
            country: Types.STRING,
            zip: Types.STRING,
        },
        {
            sequelize,
            modelName: 'Hotel',
            tableName: 'nso_hotel',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );
    return Hotel;
};

export default initHotel(connection, DataTypes);