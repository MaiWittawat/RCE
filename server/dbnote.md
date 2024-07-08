# Database MySQL Structer

> # users table
    * pk id (using uuid)
    * role varchar(50) USER, CREATOR, ADMIN default=USER
    * username varchar(50) 
    * email varchar(255) not null
    * password encrypt by ?
    * sex boolean 0=male, 1=female
    * status boolean 0=INACTIVE, 1=ACTIVE
    * created_at timestamp default current
    * updated_at timestamp default current

```sql
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    role VARCHAR(25) DEFAULT 'USER' NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    sex BOOLEAN NOT NULL,
    status BOOLEAN DEFAULT 1,
    resetToken VARCHAR(255) DEFAULT NULL;
    resetTokenExpiry DATETIME DEFAULT NULL;
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

> # problems table
    * pk id auto_increment
    * title varchar len(255)
    * description text not null
    * difficulty enum('easy', 'medium', 'hard') NOT NULL
    * created_by int (user id)
    * created_at timestamp default current
    * updated_at timestamp default current

```sql
CREATE TABLE problems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
    created_by VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);
```

> # cases table


```sql
CREATE TABLE cases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    problem_id INT NOT NULL,
    input TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    expected_output TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (problem_id) REFERENCES problems(id) ON DELETE CASCADE
);
```