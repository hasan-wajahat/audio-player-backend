# audio-player-backend
This for the test project for Aula.
This api provides a list of songs and their url for the front-end to consume.

### to start app 
```
npm start
# This will start the app at port 3000 by default.
# To change the port set the env variable PORT.
```

### DB
```
The backend is set in mongoose, however instructions for that is not 
part of this app. An example of the payload can be found in the songs.json
file. The current DB system is security risk but it serves as more of an 
proof of concept than a real app.
```

### routes
```
/api/songs
/api/songs/:id
```

