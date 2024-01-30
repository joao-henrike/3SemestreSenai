
import { FlatList, SafeAreaView, View } from 'react-native';
//import Person from './src/components/Person/Person';
import Game from './src/components/Person/Game';

//import das fonts
import { useFonts,Poppins_300Light,Poppins_500Medium_Italic, } from 'expo-google-fonts/poppins'; 
import { StatusBar } from 'expo-status-bar';


// export default function App() {

//   const peopleList = [
//      {id: '1',name: 'carlos', age:37},
//      {id: '2',name: 'edu', age:38},
//      {id: '3',name: 'Jucelino', age:25},
//   ];

//   return (
//    <SafeAreaView>
//     <StatusBar/>

//     {/* FlatList*/}
//     <FlatList
//     data={peopleList}
//     keyExtractor={(item) => item.id}
//     renderItem={({item})  => <person name={item.name} age={item.age}  />}
//     />
//      </SafeAreaView>
//      );
    
//     }

export default function App() {
  const gameList = [
    {id:'1',name:'dmc 5', Datetime: 2019 },
    {id:'2',name:'doom eternal', Datetime: 2020},
    {id:'3',name:'palworld',Datetime:2024}

  ];
  const Genre = [
  {id:'1'= 'Action'},
  {Id:'2'='Adventure'},
  {id:'3'='RPG'},
  
  ]
  return (
    <SafeAreaView>
      <StatusBar/>
  
     <FlatList
      data={gameList}
      keyExtractor={(item) => item.id}
      renderItem={({item})  => <gameList name={item.name} Datetime={item.age}  />}
      />
       </SafeAreaView>
         );
    
       }

  

   


