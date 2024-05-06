import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Campaigns from './Campaigns';

const Maps = sequelize.define(
  'maps',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

);

Maps.belongsTo(Campaigns, {
  as: 'campaigns',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_campaing',
    name: 'idCampaing',
    allowNull: false,
  },
});

export default Maps;
