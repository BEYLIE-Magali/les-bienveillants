import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text>Les Bienveillants</Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column'
        }}
        >
          <View>
            <Text style={styles.title} />
            <Button
              title='Enfance'
              color='#eb7c8f'
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </View>
          <View>
            <Text style={styles.title} />
            <Button
              title='Santé'
              color='#e7625f'
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </View>
          <View>
            <Text style={styles.title} />
            <Button
              title='Développement'
              color='#0461b1'
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </View>
          <View>
            <Text style={styles.title} />
            <Button
              title='Droit'
              color='#9f90cf'
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
            <Button
              title='Culture'
              color='#f8ea8c'
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
            <View>
              <Text style={styles.title} />
              <Button
                title='Environnement'
                color='#21b6a8'
                onPress={() => Alert.alert('Button with adjusted color pressed')}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dae7dd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  }
})
