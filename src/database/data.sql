CREATE TABLE pedals(
    id INT PRIMARY KEY,
    manufactor VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    year VARCHAR(15) NOT NULL,
    category VARCHAR(30) NOT NULL,
    tones TEXT[] NOT NULL,
    description TEXT NOT NULL,
    imageUrl VARCHAR(500),
    controllers TEXT[] NOT NULL,
    size VARCHAR(30) NOT NULL
);