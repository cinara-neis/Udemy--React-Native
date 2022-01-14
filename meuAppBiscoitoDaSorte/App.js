import React, { Component } from 'react';
import { View,Image, Text, StyleSheet, 
  TouchableOpacity} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
    textoFrase:'',
    img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A persistência é o caminho do êxito.',
      'Só existe um êxito: a capacidade de levar a vida que se quer.',
      'A coragem não é ausência do medo; é a persistência apesar do medo.',
      'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.',
      'Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada.',
      'Uma autoimagem forte e positiva é a melhor preparação possível para o sucesso.',
      'Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los', 
      'Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor',
      'Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança',
      'A melhor vingança é um sucesso estrondoso'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }

render(){
    return(
      <View style={styles.container}>

        <Image 
        source={this.state.img}
        style={styles.img}/>
        
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnarea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width: 250,
    height:250,
  },
  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign: 'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius:25
  },
  btnarea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color: '#dd7b22',
  }
});


export default App;