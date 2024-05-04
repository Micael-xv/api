import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './Usuario';

const Campaigns = sequelize.define(
  'campaigns',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sistem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    started: {
      field: 'started_at',
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

);

Campaigns.belongsTo(Usuario, {
  as: 'idMaster',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'idMaster',
    name: 'idMasterUser',
    allowNull: false,
  },
});

export default Campaigns;
