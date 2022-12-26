import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initUser = (sequelize, Types) => {
    class User extends Model { }
    User.init(
        {
            userId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            type: Types.INTEGER,
            firstName: Types.STRING,
            lastName: Types.STRING,
            email: Types.STRING,
            phone: Types.STRING,
            address: Types.STRING,
            address_line_2: Types.STRING,
            city: Types.STRING,
            country: Types.STRING,
            zip: Types.STRING,
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'nso_user',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );
    return User;
};

export default initUser(connection, DataTypes);