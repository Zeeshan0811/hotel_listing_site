import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import Category from './Category';

const initAllsetup = (sequelize, Types) => {
    class Allsetup extends Model { }
    Allsetup.init(
        {
            unitId: { type: DataTypes.INTEGER, primaryKey: true },
            type: Types.STRING,
            title: Types.STRING,
            icon: Types.STRING,
        },
        {
            sequelize,
            modelName: 'Allsetup',
            tableName: 'nso_allsetup',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );
    Allsetup.associate = function (models) {
        Category.belongsTo(models.Allsetup, { foreignKey: 'type' });
    }
    return Allsetup;
};



export default initAllsetup(connection, DataTypes);