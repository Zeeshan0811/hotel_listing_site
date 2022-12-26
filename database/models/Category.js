import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initCategory = (sequelize, Types) => {
    class Category extends Model { }
    Category.init(
        {
            cat_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            cat_title: Types.STRING,
            cat_note: Types.STRING,
        },
        {
            sequelize,
            modelName: 'Category',
            tableName: 'nso_cateogory',
            createdAt: 'created_at',
        }
    );

    Category.associate = function (models) {
        Category.hasOne(models.role, { foreignKey: 'cat_id', sourceKey: 'type' });
    }
    return Category;
};

export default initCategory(connection, DataTypes);