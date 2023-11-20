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

insert into pedals(manufactor, model, year, description, imageUrl, size, createdAt) values (
    'Bk Buttler',
    'Tube Driver',
    '1978',
    'A classic overdrive/boost pedal with tubes',
    null,
    'Large',
    NOW();
);

insert into pedal_categories(pedal_id, category_id) values (1, 1);
insert into pedal_categories(pedal_id, category_id) values (2, 1);

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
    pedal_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (pedal_id) REFERENCES pedals(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
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

insert into categories(name, description, createdAt) values (
    'Overdrive', 'A pedal that clips the guitar signal and saturates, emulating tube amps', 
    NOW()
);

insert into tones(name, description, createdAt) values (
    'Warm',
    'A hot, brown and vintage tone, with more bass and mid frequencies.',
    NOW()
);

insert into tones(name, description, createdAt) values (
    'Tube',
    'Warm, dynamic and colourful vintage tone that comes from tubes.',
    NOW()
);