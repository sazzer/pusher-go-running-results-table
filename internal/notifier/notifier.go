package notifier

import (
	"pusher/running-results-table/internal/db"

	"github.com/pusher/pusher-http-go"
)

type Notifier struct {
	notifyChannel chan<- bool
}

func notifier(database *db.Database, notifyChannel <-chan bool) {
	client := pusher.Client{
		AppId:   "PUSHER_APP_ID",
		Key:     "PUSHER_KEY",
		Secret:  "PUSHER_SECRET",
		Cluster: "PUSHER_CLUSTER",
		Secure:  true,
	}

	for {
		<-notifyChannel

		data := map[string][]db.Record{"results": database.GetRecords()}
		client.Trigger("results", "results", data)
	}
}

func New(database *db.Database) Notifier {
	notifyChannel := make(chan bool)
	go notifier(database, notifyChannel)

	return Notifier{
		notifyChannel,
	}
}

func (notifier *Notifier) Notify() {
	notifier.notifyChannel <- true
}
