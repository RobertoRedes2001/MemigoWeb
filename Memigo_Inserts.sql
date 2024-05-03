INSERT INTO users (id, uid, username, password, email, userpfp, creationDate) 
VALUES (0, '@Pepito', 'Pepito Ramirez', 'contraseña1', 'pepito@example.com', 'imagen', NOW());

INSERT INTO users (id, uid, username, password, email, userpfp, creationDate) 
VALUES (0, '@paparopoulos18', 'Papote Malote', 'contraseña2', 'papote@example.com', 'imagen', NOW());

INSERT INTO users (id, uid, username, password, email, userpfp, creationDate) 
VALUES (0, '@alkeda', 'Pequeña Terrorista', 'contraseña3', 'pequeña@example.com', 'imagen', NOW());

INSERT INTO users (id, uid, username, password, email, userpfp, creationDate) 
VALUES (0, '@granmonobaby', 'El OwO', 'contraseña4', 'owo@example.com', 'imagen', NOW());

INSERT INTO users (id, uid, username, password, email, userpfp, creationDate) 
VALUES (0, '@sweetp69', 'Princesa Bultos', 'contraseña5', 'princesa@example.com', 'imagen', NOW());

INSERT INTO memes (id, userid, meme, postDesc, likes, postDate) 
VALUES (0, 1, 'imagen', '¡La vida es corta, rompe las reglas, perdona rápido, besa lento, ama verdaderamente, ríe sin control y nunca dejes de sonreír!', 0, NOW());

INSERT INTO memes (id, userid, meme, postDesc, likes, postDate) 
VALUES (0, 2, 'imagen', 'Si el dinero no te da la felicidad, devuélvelo.', 0, NOW());

INSERT INTO memes (id, userid, meme, postDesc, likes, postDate) 
VALUES (0, 3, 'imagen', 'Nunca discutas con un idiota, te hará descender a su nivel y allí te vencerá por experiencia.', 0, NOW());

INSERT INTO memes (id, userid, meme, postDesc, likes, postDate) 
VALUES (0, 4, 'imagen', 'El dinero no da la felicidad, pero prefiero llorar en un Ferrari.', 0, NOW());

INSERT INTO memes (id, userid, meme, postDesc, likes, postDate) 
VALUES (0, 5, 'imagen', 'La inteligencia me persigue pero yo soy más rápido.', 0, NOW());

INSERT INTO templates (id, template) VALUES (0, 'plantilla1');
INSERT INTO templates (id, template) VALUES (0, 'plantilla2');
INSERT INTO templates (id, template) VALUES (0, 'plantilla3');

INSERT INTO roles (name) VALUES ('user');
INSERT INTO roles (name) VALUES ('admin');