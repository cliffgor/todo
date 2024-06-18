import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useState } from 'react';

const explore = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTask = useCallback(() => {
    if (!inputValue.trim()) return;
    setTasks((prevTasks) => [...prevTasks, { id: Date.now().toString(), text: inputValue }]);
    setInputValue('');
  }, [inputValue]);

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, text: editText } : task))
    );
    setIsEditing(null);
    setEditText('');
  };

  const handleRemove = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      {isEditing === item.id ? (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setEditText}
            value={editText}
          />
          <Button title="Save" onPress={() => handleSaveEdit(item.id)} />
        </>
      ) : (
        <>
          <Text style={styles.taskText}>{item.text}</Text>
          <TouchableOpacity onPress={() => handleEdit(item.id, item.text)}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRemove(item.id)}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        testID="toDoList"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  taskText: {
    flex: 1,
  },
  buttonText: {
    marginLeft: 10,
  },
});

export default explore;