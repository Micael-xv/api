create table usuario(
    id serial primary key,
    firstname varchar,
    lastname varchar,
    cargo varchar not null,
    email varchar,
    number int,
    password_hash text
);

create table elemento (
    id serial primary key,
    name varchar,
    descricao varchar,
    img varchar,
    publico boolean,
    usuario int references usuario(id)
);

create table campaigns (
    id serial primary key,
    title varchar,
    description varchar,
    sistem varchar,
    started_at text,
    idMaster int references usuario(id)
);

create table itens(
    id serial primary key,
    name varchar,
    description varchar,
    img varchar,
    price float,
    public int,
    creator int references usuario(id)
);

create table campaignItens(
    id serial primary key,
    id_item int references itens(id),
    campaign_item int references campaigns(id)
);

create table sheets(
    id serial primary key,
    name varchar,
    hp_max int,
    hp int,
    shild int,
    agility varchar,
    strength float,
    inteligence int,
    vigor int,
    class varchar,
    owner int references usuario(id),
    id_campaigns int references campaigns(id)
);

create table inventory (
    id serial primary key,
    amount int,
    owner int references sheets(id),
    item int references itens(id)
);

create table maps (
    id serial primary key,
    name varchar,
    description varchar,
    cover varchar,
    id_campaing int references campaigns(id)
);

create table mapElements (
    id serial primary key,
    posicaoX int,
    posicaoY int,
    altura float,
    largura float,
    z_index int,
    rotate int,
    id_elemento int references elemento(id),
    id_map int references maps(id)
);

create table npcs (
    id serial primary key,
    name varchar,
    age int,
    gender varchar,
    appearence varchar,
    temper varchar,
    id_campaign int references campaigns(id),
    map_element int references mapElements(id)
);

-- Inserting into the 'usuario' table
INSERT INTO usuario (firstname, lastname, cargo, email, number, password_hash)
VALUES ('John', 'Doe', 'Manager', 'john.doe@example.com', 123456789, 'password123');

INSERT INTO usuario (firstname, lastname, cargo, email, number, password_hash)
VALUES ('Jane', 'Smith', 'Developer', 'jane.smith@example.com', 987654321, 'qwerty456');

-- Inserting into the 'elemento' table
INSERT INTO elemento (name, descricao, img, publico, usuario)
VALUES ('Sword', 'A powerful weapon', 'sword.jpg', true, 1);

INSERT INTO elemento (name, descricao, img, publico, usuario)
VALUES ('Potion', 'Restores health', 'potion.jpg', true, 2);

-- Inserting into the 'campaigns' table
INSERT INTO campaigns (title, description, sistem, started_at, idMaster)
VALUES ('Epic Adventure', 'Save the kingdom from darkness', 'D&D 5e', '2024-01-15', 1);

INSERT INTO campaigns (title, description, sistem, started_at, idMaster)
VALUES ('Space Odyssey', 'Explore the cosmos', 'Starfinder', '2024-02-20', 2);

-- Inserting into the 'itens' table
INSERT INTO itens (name, description, img, price, public, creator)
VALUES ('Leather Armor', 'Basic protective gear', 'armor.jpg', 50.00, 1, 1);

INSERT INTO itens (name, description, img, price, public, creator)
VALUES ('Fireball Scroll', 'Unleashes fiery destruction', 'scroll.jpg', 100.00, 1, 2);

-- Inserting into the 'campaignItens' table
INSERT INTO campaignItens (id_item, campaign_item)
VALUES (1, 1);

INSERT INTO campaignItens (id_item, campaign_item)
VALUES (2, 2);

-- Inserting into the 'sheets' table
INSERT INTO sheets (name, hp_max, hp, shild, agility, strength, inteligence, vigor, class, owner, id_campaigns)
VALUES ('Warrior', 100, 100, 20, 'Agile', 5.0, 3, 4, 'Fighter', 1, 1);

INSERT INTO sheets (name, hp_max, hp, shild, agility, strength, inteligence, vigor, class, owner, id_campaigns)
VALUES ('Mage', 80, 80, 10, 'Slow', 2.0, 8, 6, 'Wizard', 2, 2);

-- Inserting into the 'inventory' table
INSERT INTO inventory (amount, owner, item)
VALUES (1, 1, 1);

INSERT INTO inventory (amount, owner, item)
VALUES (3, 2, 2);

-- Inserting into the 'maps' table
INSERT INTO maps (name, description, cover, id_campaing)
VALUES ('Castle Ruins', 'Ancient ruins of a once-great castle', 'castle.jpg', 1);

INSERT INTO maps (name, description, cover, id_campaing)
VALUES ('Space Station', 'High-tech hub orbiting a distant planet', 'spacestation.jpg', 2);

-- Inserting into the 'mapElements' table
INSERT INTO mapElements (posicaoX, posicaoY, altura, largura, z_index, rotate, id_elemento, id_map)
VALUES (100, 200, 10.5, 20.3, 1, 0, 1, 1);

INSERT INTO mapElements (posicaoX, posicaoY, altura, largura, z_index, rotate, id_elemento, id_map)
VALUES (300, 400, 8.2, 15.7, 2, 45, 2, 2);

-- Inserting into the 'npcs' table
INSERT INTO npcs (name, age, gender, appearence, temper, id_campaign, map_element)
VALUES ('King Arthur', 45, 'Male', 'Regal', 'Noble', 1, 1);

INSERT INTO npcs (name, age, gender, appearence, temper, id_campaign, map_element)
VALUES ('Commander Shepard', 30, 'Female', 'Commanding', 'Resolute', 2, 2);


select * from usuario;
-- pegar todos os dados dos elementos da campanha em que um determinado usuario estaja participando
select
    title,
    u.firstname,
    description,
    sistem,
    started_at,
    idMaster
from campaigns as c
inner join usuario as u on (c.id = u.id);

-- pegar todos os dados do inventario de um determinado personagem de um determinado usuario
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
        JOIN
    sheets sh ON inv.owner = sh.id
        JOIN
    usuario usr ON sh.owner = usr.id
WHERE
    sh.id = '1' AND usr.id = '1';
