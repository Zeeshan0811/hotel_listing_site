import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import User from './User'
import Hotel from './Hotel'

const initHotelUserRel = (sequelize, Types) => {
    class HotelUserRel extends Model { }
    HotelUserRel.init(
        {
            rel_id: { type: DataTypes.INTEGER, primaryKey: true },
            rel_type: Types.INTEGER,
            hotel_id: {
                type: DataTypes.INTEGER, references: {
                    model: Hotel,
                    key: 'hotel_id',
                }
            },
            user_id: {
                type: DataTypes.INTEGER, references: {
                    model: User,
                    key: 'userId',
                }
            },
        },
        {
            sequelize,
            modelName: 'HotelUserRel',
            tableName: 'nso_hotel_user_rel',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );

    HotelUserRel.belongsTo(User, { foreignKey: "user_id" });
    HotelUserRel.belongsTo(Hotel, { foreignKey: "hotel_id" });

    return HotelUserRel;
};

export default initHotelUserRel(connection, DataTypes);