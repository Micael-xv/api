import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Maps from './Maps';
import Elemento from './Elemento';

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
    rotate: {
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
Elemento.belongsTo(Elemento, {
  as: 'elemento',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'idElemento',
    name: 'idMapElement',
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
