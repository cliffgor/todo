# Welcome to Sovtech test app 👋
## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the code you will navigate to the `` /app/tabs/explore.js`` to view the solution

## Requirements:

- Your application should feature a text input field and a submit button to add new tasks

- When a user enters a task in the inut feild and presses the submit button, the task should be added to a list displayed on the screen

- each task in the list must be accompanied by an "Edit" button

- pressing the "Edit" button shouls transform the task text into an  editable input field along with a save button to confirm changes

- Changes must be saved to the task list when "Save" button is pressed

- Each task should also feature a "Remove" button next to the "Edit" button for removing that specific task from the list

- The "Remove" button should not be visible while in edit mode

- Add the attributes testID="toDoLIst" to the Flatlist component

## Start Code

``` javascript

import React, { useState, useCallback } from 'react'; import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';

const TodoApp = () => { 

return ( <View> ToDo List </View> ); 

};

export default TodoApp;

```