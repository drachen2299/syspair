-- user seed
-- INSERT INTO user
--     VALUES
--     (DEFAULT, 'benberb123'),
--     (DEFAULT, 'blerf3145'),
--     (DEFAULT, 'blerf3146'),
--     (DEFAULT, 'blerf3147'),
--     (DEFAULT, 'blerf3145122'),
--     (DEFAULT, 'blerf31451245'),
--     (DEFAULT, 'blerf3145346234'),
--     (DEFAULT, 'blerf314541231'),
--     (DEFAULT, 'blerf31453553'),
--     (DEFAULT, 'blerf31456443'),
--     (DEFAULT, 'blerf31454334341234'),2
--     (DEFAULT, 'blerf31453424'),
--     (DEFAULT, 'blerf314534234'),
--     (DEFAULT, 'blerf31455656765'),
--     (DEFAULT, 'blerf31455784232'),
--     (DEFAULT, 'blerf3145786655'),
--     (DEFAULT, 'blerf3145676521'),
--     (DEFAULT, 'blerf31454354345'),
--     (DEFAULT, 'blerf314576352312'),
--     (DEFAULT, 'blerf31453342342345'),
--     (DEFAULT, 'blerf31455566432'),
--     (DEFAULT, 'blerf31454421'),
--     (DEFAULT, 'blerf314512335446'),
--     (DEFAULT, 'blerf3145977534'),
--     (DEFAULT, 'blerf3145346456323'),
--     (DEFAULT, 'blerf314523436457'),
--     (DEFAULT, 'blerf3145235676845'),
--     (DEFAULT, 'blerf31454564578323')   
-- ;
-- INSERT INTO user
-- SELECT *
-- FROM json_populate_recordset(
--     NULL :: user,

--         '[
--         {"username":"benberb123"},
--         {"username":"blerf3145"},
--         {"username":"blerf3146"},
--         {"username":"blerf3147"},
--         {"username":"blerf3145122"},
--         {"username":"blerf31451245"},
--         {"username":"blerf3145346234"},
--         {"username":"blerf314541231"},
--         {"username":"blerf31453553"},
--         {"username":"blerf31456443"},
--         {"username":"blerf314543343412342"},
--         {"username":"blerf31453424"},
--         {"username":"blerf314534234"},
--         {"username":"blerf31455656765"},
--         {"username":"blerf31455784232"},
--         {"username":"blerf3145786655"},
--         {"username":"blerf3145676521"},
--         {"username":"blerf31454354345"},    
--         {"username":"blerf314576352312"},
--         {"username":"blerf31453342342345"},    
--         {"username":"blerf31455566432"},
--         {"username":"blerf31454421"},
--         {"username":"blerf314512335446"},  
--         {"username":"blerf3145977534"},
--         {"username":"blerf3145346456323"},
--         {"username":"blerf314523436457"} ,
--         {"username":"blerf3145235676845"},
--         {"username":"blerf31454564578323"}]'
-- );
-- INSERT INTO author (full_name, year_born, nationality, image, created_at)
-- VALUES('Guido van Rossum', 1956, 'Dutch', 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Guido-portrait-2014-drc.jpg', now());

-- INSERT INTO language (name, year_created, author_id, type, image, created_at)
-- VALUES('Python', 1991, (SELECT id FROM author WHERE author.full_name = 'Guido van Rossum' LIMIT 1), 'Strong', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', now());

INSERT INTO author (full_name, year_born, nationality, image, created_at)
VALUES('Yukihiro Matsumoto', 1965, 'Japanese', 'https://upload.wikimedia.org/wikipedia/commons/7/76/Yukihiro_Matsumoto.JPG', now());

INSERT INTO language (name, year_created, author_id, type, image, created_at)
VALUES('Ruby', 1995, (SELECT id FROM author WHERE author.full_name = 'Yukihiro Matsumoto' LIMIT 1), 'Strong', 'hhttps://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg', now());

INSERT INTO author (full_name, year_born, nationality, image, created_at)
VALUES('James Gosling', 1955, 'Canada', 'https://upload.wikimedia.org/wikipedia/commons/1/14/James_Gosling_2008.jpg', now());

INSERT INTO language (name, year_created, author_id, type, image, created_at)
VALUES('Java', 1995, (SELECT id FROM author WHERE author.full_name = 'James Gosling' LIMIT 1), 'Strong', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', now());

INSERT INTO author (full_name, year_born, nationality, image, created_at)
VALUES('Brendan Eich', 1961, 'USA', 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Brendan_Eich.png', now());

INSERT INTO language (name, year_created, author_id, type, image, created_at)
VALUES('Javascript', 1995, (SELECT id FROM author WHERE author.full_name = 'Brendan Eich' LIMIT 1), 'Weak', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', now());

INSERT INTO author (full_name, year_born, nationality, image, created_at)
VALUES('Anders Hejlsberg', 1960, 'Danish', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Anders_Hejlsberg.jpg', now());

INSERT INTO language (name, year_created, author_id, type, image, created_at)
VALUES('CSharp', 2000, (SELECT id FROM author WHERE author.full_name = 'Anders Hejlsberg' LIMIT 1), 'Strong', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg', now());

INSERT INTO author (full_name, year_born, nationality, image, created_at)
VALUES('Graydon Hoare', 1979, 'USA', 'https://everipedia-storage.s3.amazonaws.com/ProfilePicture/en/graydon-hoare__3f5731_medium.webp', now());

INSERT INTO language (name, year_created, author_id, type, image, created_at)
VALUES('Rust', 1991, (SELECT id FROM author WHERE author.full_name = 'Graydon Hoare' LIMIT 1), 'Strong', 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg', now());
--seed authors
--seed languages
--seed surveys