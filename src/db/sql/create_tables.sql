DROP TABLE IF EXISTS `books`;
DROP TABLE IF EXISTS `authors`;

CREATE TABLE
    `authors` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        PRIMARY KEY(`id`)
    );

CREATE TABLE
    `books` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `date` DATE NOT NULL,
        `author_id` INT NOT NULL,
        `description` TEXT,
        `image` VARCHAR(255),
        PRIMARY KEY(`id`),
        INDEX author_index (author_id),
        FOREIGN KEY (author_id)
            REFERENCES authors(id)
            ON DELETE CASCADE
    );
