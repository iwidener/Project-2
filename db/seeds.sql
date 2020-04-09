INSERT INTO friendly.interests (interestName) 
VALUES ("Hiking"), ("Coding"), ("Singing"), ("Dancing"), ("Cooking"), ("Fashion"), ("Music"), ("Film");

INSERT INTO friendly.users (email, password, phone, age)
VALUES ("kayla@gmail.com", "password", 2142141111, 26),
("randy@glive.com", "password", 2142142222, 24),
("inna@yahoo.com", "password", 2144693333, 21),
("valerie@gmail.com", "password", 2144723323, 22),
("lance@hotmail.com", "password", 2144522456, 18);

INSERT INTO friendly.userinterests (interestName, userEmail, userPhone, InterestId, UserId)
VALUES("Coding", "kayla@gmail.com", 2142141111, 2, 1),
("Hiking", "kayla@gmail.com", 2142141111, 1, 1),
("Cooking", "kayla@gmail.com", 2142141111, 5, 1),
("Film", "inna@yahoo.com", 2144693333, 8, 3),
("Coding", "inna@yahoo.com", 2144693333, 2, 3),
("Fashion", "inna@yahoo.com", 2144693333, 6, 3),
("Film", "randy@glive.com", 2142142222, 8, 2),
("Music", "randy@glive.com", 2142142222, 7, 2),
("Hiking", "randy@glive.com", 2142142222, 1, 2),
("Singing", "valerie@gmail.com", 2144723323, 3, 4),
("Dancing", "valerie@gmail.com", 2144723323, 4, 4),
("Cooking", "valerie@gmail.com", 2144723323, 5, 4),
("Singing", "lance@hotmail.com", 2144522456, 3, 5),
("Dancing", "lance@hotmail.com", 2144522456, 4, 5),
("Film", "lance@hotmail.com", 2144522456, 8, 5);
