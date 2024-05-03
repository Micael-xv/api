import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Maps from './Maps';

const MapElements = sequelize.define(
  'mapelements',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    posicaoX: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    posicaoY: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    zindex: {
      field: 'z_index',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'createdAt',
  },

);
MapElements.belongsTo(MapElements, {
  as: 'elemento',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'idMapElements',
    name: 'idMapElementss',
    allowNull: false,
  },
});

MapElements.belongsTo(Maps, {
  as: 'maps',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_map',
    name: 'idMap',
    allowNull: false,
  },
});
export default MapElements;
