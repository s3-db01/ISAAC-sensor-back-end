## Sensor API

| **Route** | **Action** | **Body**                                                                           | **Method** |
| --- | --- |------------------------------------------------------------------------------------|-----------|
| api/sensors/ | Create | {floor_id : int, x_coordinate : int, y_coordinate : int, flagged_faulty : int}     | Post      |
| api/sensors/:id | Update | {floor_id : int, x_coordinate : int, y_coordinate : int, flagged_faulty : int} | Put       |
| api/sensors/ | Find all |                                                                                    | Get       |
| api/sensors/:id | Find one |                                                                                    | Get       |
| api/sensors/:id | Delete |                                                                                    | Delete    |
| api/sensors/ | Delete all |                                                                                    | Delete    |