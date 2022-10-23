CREATE TABLE competitor
(
  name VARCHAR(100) NOT NULL,
  id BIGSERIAL NOT NULL,
  alias VARCHAR(50),
  PRIMARY KEY (id),
  UNIQUE (alias)
);

CREATE TABLE principal
(
  id BIGSERIAL NOT NULL,
  email VARCHAR(320) NOT NULL,
  principal_type INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (email)
);

CREATE TABLE round
(
  id BIGSERIAL NOT NULL,
  ordinal_number INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE game
(
  first_competitor_score INT,
  id BIGSERIAL NOT NULL,
  second_competitor_score INT,
  scheduled_date DATE NOT NULL,
  first_competitor_id BIGSERIAL NOT NULL,
  second_competitor_id BIGSERIAL NOT NULL,
  round_id BIGSERIAL NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (first_competitor_id) REFERENCES competitor(id),
  FOREIGN KEY (second_competitor_id) REFERENCES competitor(id),
  FOREIGN KEY (round_id) REFERENCES round(id)
);

CREATE TABLE round_comment
(
  comment_text TEXT NOT NULL,
  id BIGSERIAL NOT NULL,
  date_posted DATE NOT NULL,
  round_id BIGSERIAL NOT NULL,
  principal_id BIGSERIAL NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (round_id) REFERENCES round(id),
  FOREIGN KEY (principal_id) REFERENCES principal(id)
);

