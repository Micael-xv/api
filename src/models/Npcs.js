import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Campaigns from './Campaigns';
import MapElements from './MapElements';

const Npcs = sequelize.define(
  'npcs',
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
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appearence: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    temper: {
      type: DataTypes.TEXT,
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

Npcs.belongsTo(Campaigns, {
  as: 'campaigns',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_campaign',
    name: 'idCampaign',
    allowNull: false,
  },
});

Npcs.belongsTo(MapElements, {
  as: 'mapelements',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'map_element',
    name: 'idmapElement',
    allowNull: false,
  },
});

export default Npcs;
