import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Campaigns from './Campaigns';
import Itens from './Itens';

const CampaignItens = sequelize.define(
  'campaignitens',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

);
CampaignItens.belongsTo(Itens, {
  as: 'itens',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_item',
    name: 'idItem',
    allowNull: false,
  },
});

CampaignItens.belongsTo(Campaigns, {
  as: 'campaigns',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'campaign_item',
    name: 'idCampaignItem',
    allowNull: false,
  },
});

export default CampaignItens;
