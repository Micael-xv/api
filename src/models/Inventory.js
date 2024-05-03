import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Sheets from './Sheets';
import Itens from './Itens';

const Inventory = sequelize.define(
  'inventory',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    amount: {
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

Inventory.belongsTo(Sheets, {
  as: 'sheets',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'owner',
    name: 'idSheets',
    allowNull: false,
  },
});

Inventory.belongsTo(Itens, {
  as: 'itens',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_campaigns',
    name: 'idCampaigns',
    allowNull: false,
  },
});

export default Inventory;
