docker-compose build

echo Starting Postgres
docker-compose up -d db

MAX_ATTEMPTS=10
connection_established=false

for attempt in {1..MAX_ATTEMPTS};
do
    echo "Hi"
    sleep 1
    STATUS=$(docker-compose logs db)
    echo $STATUS
    if [[ $STATUS == *"ready to accept connections"* ]]
    then
        connection_established=true
        echo "Database connection established."
        break
    fi
    if [ $attempt == MAX_ATTEMPTS ]
    then
        echo "Failed to make database connection."
    fi
done

echo $connection_established
if [ $connection_established == true ]
then
    npm run db:migrate
    npm run db:seed
fi

