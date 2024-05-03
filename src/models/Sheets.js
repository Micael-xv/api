import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Campaigns from './Campaigns';
import Usuario from './Usuario';

const Sheets = sequelize.define(
  'sheets',
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
    hpMax: {
      field: 'hp_max',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    hp: {
      type: DataTypes.Number,
      allowNull: false,
    },
    agility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    inteligence: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    vigor: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    classe: {
      field: 'class',
      name: 'classe',
      type: DataTypes.STRING,
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

Sheets.belongsTo(Usuario, {
  as: 'idMaster',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

Sheets.belongsTo(Campaigns, {
  as: 'campaigns',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_campaigns',
    name: 'idCampaigns',
    allowNull: false,
  },
});

export default Sheets;
