CREATE DATABASE election;

USE election;

CREATE TABLE candidates (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
industry_connected BOOLEAN NOT NULL
);



SELECT * FROM candidates;

# retrieve only specific column values
SELECT first_name, last_name FROM candidates;

# find all candidates that are industry_connected
SELECT first_name, industry_connected
FROM candidates
WHERE industry_connected =1;  # where industry connected is true 0 for false, 1 for true boolien values

SELECT first_name, last_name, industry_connected
FROM candidates
WHERE id = 5; # select a row with the primary key of 5

UPDATE candidates 
SET industry_connected =1
WHERE id = 3;

DELETE FROM candidates
WHERE first_name = 'Montague';





