import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './Usuario';

const Itens = sequelize.define(
  'itens',
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    publicos: {
      field: 'public',
      type: DataTypes.NUMBER,
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
Itens.belongsTo(Usuario, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_entrega',
    name: 'idEntrega',
    allowNull: false,
  },
});
export default Itens;
