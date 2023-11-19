CREATE TABLE pedals(
    id SERIAL PRIMARY KEY,
    manufactor VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    year VARCHAR(15) NOT NULL,
    description TEXT NOT NULL,
    imageUrl VARCHAR(500),
    size VARCHAR(30) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE tones(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE controls(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    type VARCHAR(30) NOT NULL,
    description TEXT NOT NULL,
    pedal_id INT NOT NULL,
    FOREIGN KEY (pedalId) REFERENCES pedals(id),
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE pedal_categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP
);

CREATE TABLE pedal_tones(
    id SERIAL PRIMARY KEY,
    pedal_id INT NOT NULL,
    tone_id INT NOT NULL,
    FOREIGN KEY (pedal_id) REFERENCES pedals(id),
    FOREIGN KEY (tone_id) REFERENCES tones(id)
);

-- pedalId INT NOT NULL,
-- FOREIGN KEY (pedalId) REFERENCES pedals(id),