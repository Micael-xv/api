import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Usuario = sequelize.define(
  'usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    passwordHash: {
      field: 'password_hash',
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

export default Usuario;
