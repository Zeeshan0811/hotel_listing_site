import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initImage = (sequelize, Types) => {
    class Image extends Model { }
    Image.init(
        {
            image_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            image_type: Types.INTEGER,
            reference_id: Types.INTEGER,
            path: Types.STRING,
            image: Types.STRING,
            title: Types.STRING,
            image_order: Types.INTEGER,
            created_by: Types.INTEGER,
            updated_by: Types.INTEGER,
        },
        {
            sequelize,
            modelName: 'image',
            tableName: 'nso_images',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );
    return Image;
};

export default initImage(connection, DataTypes);