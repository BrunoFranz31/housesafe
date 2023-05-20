import * as React from 'react'
import { Button, View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function InicioScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#7A68FF' }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#7A68FF' }}>
          <Image style={{ backgroundColor: '#7A68FF', width: 400, height: 400 }} source={require('./img/1.png')}></Image>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#7A68FF' }}>
        <Text style={{ fontSize: 25, color: '#4D00FF', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#7A68FF', marginBottom: 135 }}>IMOBILIÁRIA DO ASTA</Text>
      </View>
      <Button title="Ir para Cadastro" onPress={() => navigation.navigate('Cadastro')} />
    </ScrollView>
  );
}

function Cadastro({ navigation }) {
  return (
    <View style={{ backgroundColor: '#7A68FF', flex: 1 }}>
      <Text style={{ alignContent: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>FORMULARIO DE CADASTRO</Text>
      <View style={{ backgroundColor: '#7A68FF', flex: 1 }}>
        <View style={{ margin: 5, backgroundColor: '#7A68FF' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Nome:</Text>
          <TextInput style={{ marginBottom: 20, backgroundColor: '#FFFFFF', margin: 2, color: 'black', marginEnd: 2, marginTop: 2 }} placeholderTextColor={'gray'} placeholder='DIGITE SEU NOME COMPLETO'></TextInput>
        </View>
        <View style={{ margin: 5, backgroundColor: '#7A68FF' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Endereço:</Text>
          <TextInput style={{ marginBottom: 20, backgroundColor: '#FFFFFF', margin: 2, color: 'black', marginEnd: 2, marginTop: 2 }} placeholderTextColor={'gray'} placeholder='DIGITE SEU ENDEREÇO'></TextInput>
        </View>

        <View style={{ margin: 10, backgroundColor: '#7A68FF' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>SELECIONE ABAIXO A SUA FINALIDADE PARA LISTAGEM DE CASAS:</Text>
        </View>


        <View style={{ margin: 10, backgroundColor: '#7A68FF' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Finalidade:</Text>
        </View>

        <View style={{ backgroundColor: '#7A68FF' }} />
        <View style={finalidade.caixa}>
          <TouchableOpacity style={finalidade.opcao} onPress={() => navigation.navigate('TelaVenda')}>
            <Text style={finalidade.opcaotexto}>VENDA</Text>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 1, backgroundColor: '#7A68FF' }}>
          <View style={finalidade.caixa}>
            <TouchableOpacity style={finalidade.opcao} onPress={() => navigation.navigate('TelaAluguel')}>
              <Text style={finalidade.opcaotexto}>ALUGUEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}









function TelaVenda({ navigation }) {
  return (

    <ScrollView scrollEnabled={true}>
      <View style={{ backgroundColor: '#7A68FF', flex: 1 }}>

        <Text style={{ alignContent: 'center', backgroundColor: 'lightgray', alignItems: 'center', fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center', justifyContent: 'center' }}>CASAS PARA VENDA</Text>

        <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} source={require('./casavenda/casa1.png')}></Image>
        <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'black' }}>R$ 1.100,00</Text>

        <View style={{ backgroundColor: '#7A68FF' }}>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>COMPRAR</Text>
            </TouchableOpacity>
          </View>









          <View style={{ backgroundColor: '#7A68FF' }}>
            <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100 }} source={require('./casavenda/casa2.png')}></Image>
            <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'black' }}>R$ 510.000</Text>
          </View>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>COMPRAR</Text>
            </TouchableOpacity>
          </View>









          <View style={{ backgroundColor: '#7A68FF' }}>
            <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100 }} source={require('./casavenda/casa3.png')}></Image>
            <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'black' }}>R$ 395.000</Text>
          </View>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>COMPRAR</Text>
            </TouchableOpacity>
          </View>






          <View style={{ backgroundColor: '#7A68FF' }}>
            <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100 }} source={require('./casavenda/casa4.png')}></Image>
            <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'black' }}>R$ 750.000</Text>
          </View>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>COMPRAR</Text>
            </TouchableOpacity>
          </View>











        </View>
      </View>
    </ScrollView>
  )
}

function TelaBuyHouseSell({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'center', backgroundColor: '#7A68FF', marginHorizontal: 1 }}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlign: 'center', alignContent: 'center', backgroundColor: 'green', padding: 25, borderRadius: 20 }}>COMPRA / ALUGUEL EFETUADA(O)</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <View style={{margin:90, backgroundColor:'red', padding:20, borderRadius:15}}>
          <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>VOLTAR AO INICIO</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}


function TelaAluguel({ navigation }) {
  return (

    <View style={{ backgroundColor: '#7A68FF' }}>
      <ScrollView scrollEnabled={true}>
        <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} source={require('./casaaluguel/casa1alu.png')}></Image>
        <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'blue' }}>AVALIAÇÃO: 8.9</Text>
        <View style={{ backgroundColor: '#7A68FF' }}>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>ALUGAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: '#7A68FF' }}>
          <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} source={require('./casaaluguel/casa2alu.png')}></Image>
          <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'blue' }}>R$ 110.920 - 36 Dias</Text>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>ALUGAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: '#7A68FF' }}>
          <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} source={require('./casaaluguel/casa3alu.png')}></Image>
          <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'blue' }}>R$ 140 POR NOITE </Text>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>ALUGAR</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View style={{ backgroundColor: '#7A68FF' }}>
          <Image style={{ margin: 15, borderRadius: 15, width: 100, height: 100, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} source={require('./casaaluguel/casa4alu.png')}></Image>
          <Text style={{ fontSize: 20, margin: 12, fontWeight: 'bold', color: 'blue' }}>R$ 400 POR NOITE</Text>
          <View style={comprar.btn}>
            <TouchableOpacity style={comprar.bt} onPress={() => navigation.navigate('TelaBuyHouseSell')}>
              <Text style={comprar.b}>ALUGAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>









  )
}













const NStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NStack.Navigator initialRouteName="Inicio">
        <NStack.Screen name="Inicio" component={InicioScreen}></NStack.Screen>
        <NStack.Screen name="Cadastro" component={Cadastro}></NStack.Screen>
        <NStack.Screen name="TelaVenda" component={TelaVenda}></NStack.Screen>
        <NStack.Screen name="TelaAluguel" component={TelaAluguel}></NStack.Screen>
        <NStack.Screen name="TelaBuyHouseSell" component={TelaBuyHouseSell}></NStack.Screen>
      </NStack.Navigator>
    </NavigationContainer>
  )
}

const comprar = StyleSheet.create({

  c: {
    flexDirection: 'row',
    color: 'white',
    width: 100,
    height: 50,
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10
  },




  btn: {
    flexDirection: 'row'
  },

  bt: {

    backgroundColor: '#066100',
    width: 130,
    height: 40,
    borderRadius: 10,
    margin: 5
  },
  b: {
    flex: 1,
    position: 'absolute',
    color: 'white',
    width: 100,
    height: 50,
    borderRadius: 15,
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10
  }
})

const finalidade = StyleSheet.create({
  caixa: {
    backgroundColor: '#7A68FF',
    flexDirection: 'row',
  },

  opcao: {
    flex: 1,
    backgroundColor: '#952DC8',
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },

  opcaotexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  }
}
);

export default App;