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
INSERT INTO user
SELECT *
FROM json_populate_recordset(
    NULL :: user,

        '[
        {"username":"benberb123"},
        {"username":"blerf3145"},
        {"username":"blerf3146"},
        {"username":"blerf3147"},
        {"username":"blerf3145122"},
        {"username":"blerf31451245"},
        {"username":"blerf3145346234"},
        {"username":"blerf314541231"},
        {"username":"blerf31453553"},
        {"username":"blerf31456443"},
        {"username":"blerf314543343412342"},
        {"username":"blerf31453424"},
        {"username":"blerf314534234"},
        {"username":"blerf31455656765"},
        {"username":"blerf31455784232"},
        {"username":"blerf3145786655"},
        {"username":"blerf3145676521"},
        {"username":"blerf31454354345"},    
        {"username":"blerf314576352312"},
        {"username":"blerf31453342342345"},    
        {"username":"blerf31455566432"},
        {"username":"blerf31454421"},
        {"username":"blerf314512335446"},  
        {"username":"blerf3145977534"},
        {"username":"blerf3145346456323"},
        {"username":"blerf314523436457"} ,
        {"username":"blerf3145235676845"},
        {"username":"blerf31454564578323"}]'
);


--seed authors
--seed languages
--seed surveys