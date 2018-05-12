package db

// Record is a single record in the database
type Record struct {
	Name string  `json:"name"`
	Time float32 `json:"time"`
}

// NewRecord creates a new Database Record to work with
func NewRecord(name string, time float32) Record {
	return Record{name, time}
}

// Database is the abstraction around the database that we are using
type Database struct {
	contents []Record
}

// New creates a new Database abstraction wrapper
func New() Database {
	contents := make([]Record, 0)
	return Database{contents}
}

// AddRecord will add a new record to our database
func (database *Database) AddRecord(r Record) {
	database.contents = append(database.contents, r)
}

// GetRecords will return all of the records in our database
func (database *Database) GetRecords() []Record {
	return database.contents
}
