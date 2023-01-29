import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initRoom = (sequelize, Types) => {
    class Room extends Model { }
    Room.init(
        {
            room_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            hotel_id: Types.INTEGER,
            uri: Types.STRING,
            title: Types.STRING,
            short_descritpion: Types.STRING,
            description: Types.STRING,
            beds: Types.INTEGER,
            area: Types.INTEGER,
            guest: Types.INTEGER,
            price: Types.INTEGER,
            services: Types.STRING,
            created_by: Types.INTEGER,
            Updated_by: Types.INTEGER,
        },
        {
            sequelize,
            modelName: 'Room',
            tableName: 'nso_room',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );
    return Room;
};

export default initRoom(connection, DataTypes);