import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';
import { sequelize } from '../config/config';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await Usuario.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        type: 'success',
        message: 'Registros carregados com sucesso',
        data: response,
      });
    }

    const response = await Usuario.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id}`,
        data: [],
      });
    }

    return res.status(200).send({
      type: 'success',
      message: 'Registro carregado com sucesso',
      data: response,
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const create = async (dados, res) => {
  const {
    fistname, lastname, email, number, passwordHash
  } = dados;

  const response = await Usuario.create({
    fistname,
    lastname,
    email,
    number,
    passwordHash,
  });

  return res.status(200).send({
    type: 'success',
    message: 'Cadastro realizado com sucesso',
    data: response,
  });
};

const update = async (id, dados, res) => {
  const response = await Usuario.findOne({ where: { id } });

  if (!response) {
    return res.status(200).send({
      type: 'error',
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [],
    });
  }

  Object.keys(dados).forEach((field) => response[field] = dados[field]);

  await response.save();
  return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response,
  });
};

const persist = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return await create(req.body, res);
    }

    return await update(id, req.body, res);
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.body.id ? req.body.id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(200).send({
        type: 'error',
        message: 'Informe um id para deletar o registro',
        data: [],
      });
    }

    const response = await Usuario.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id} para deletar`,
        data: [],
      });
    }

    await response.destroy();
    return res.status(200).send({
      type: 'success',
      message: `Registro id ${id} deletado com sucesso`,
      data: [],
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      error: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const {
      email, password, cargo, firstname, lastname, number,
    } = req.body;
    const response = await Usuario.findOne({
      where: {
        email,
      },
    });
    if (response) {
      throw Error('Username já foi utilizado!');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const resposta = await Usuario.create({
      firstname,
      lastname,
      cargo,
      number,
      email,
      passwordHash,
    });
    return res.status(201).send({
      message: 'Criado!',
      response: resposta,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usuario.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error('Usuario ou senha invalidos!');
    }

    const passwordHash = user.passwordHash;
    console.log(password + ' ' + passwordHash);
    const resposta = await bcrypt.compare(password, passwordHash);

    if (resposta) {
      const token = jwt.sign({ userId: user.id, userName: user.name }, process.env.SECRET_KEY, { expiresIn: '1h' });
      return res.status(200).send({
        token,
      });
    }

    return res.status(400).send({
      message: 'Usuario ou senha inválidos!',
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const campanha = async (req, res) => {
  try {
    const response = await sequelize.query(
      `
          select
          title,
          u.firstname,
          description,
          sistem,
          started_at,
          idMaster
          from campaigns as c
          inner join usuario as u on (c.id = u.id);
          `,
    ).then((a) => a[0]);
    return res.status(201).send({
      message: 'Dados coletados com sucesso!',
      response,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: 'Não tem esses dados!',
      response: error.message,
    });
  }
};

const persona = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    const response = await sequelize.query(
      `
    SELECT 
      inv.id AS inventory_id,
      inv.amount,
      inv.owner AS sheet_id,
      inv.item AS item_id,
      sh.name AS sheet_name,
      sh.hp_max,
      sh.hp,
      sh.shild,
      sh.agility,
      sh.strength,
      sh.inteligence,
      sh.vigor,
      sh.class,
      usr.firstname AS user_firstname,
      usr.lastname AS user_lastname
    FROM
      inventory inv
    JOIN sheets sh ON inv.owner = sh.id
    JOIN usuario usr ON sh.owner = usr.id
    WHERE sh.id = '${id}' AND usr.id = '${id}';
      `,
    ).then((a) => a[0]);
    return res.status(201).send({
      message: 'Dados coletados com sucesso!',
      response,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: 'Não tem esses dados!',
      response: error.message,
    });
  }
};

export default {
  get,
  persist,
  campanha,
  persona,
  destroy,
  register,
  login,
};
