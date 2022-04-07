// global scss
import "./global.scss";
// import List from "./components/generics/List"; 
// import RandomNumber from "./components/restriction/RandomNum";
// import ContainerComp from "./components/Container";
// import Parents from "./components/Parents";
// import Button from "./components/Button";
// import Login from "./components/Login";
// import StatusComp from "./components/StatusComp";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Greet from "./components/Greet";
// import ClickEvent from "./components/ClickEvent";
// import InputComp from "./components/Input";
// import Containers from "./components/Containers";
// import Person from "./components/Person";
// import Persons from "./components/Persons";
// import LoggedIn from "./components/state/Loggedin";
// import User from "./components/state/User";
// import User2 from "./components/state/User2";
// import { Counter } from "./components/state/Counter";
// import { UseReducerStrict } from "./components/state/UseReducerStrict";
// import { CounterClass } from "./components/class/Counter";
// context part ###########################
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { Box } from "./components/context/Box";
// import { UserContextProvider } from "./components/context/UserContext";
// import User from "./components/context/User";
// import { MutableRef } from "./components/ref/MutalbleRef";
// import Toasts from "./components/templateLetarals/Toasts";
// import CustomBtn from "./components/wrappingHTML/Button";
// import CustomInput from "./components/wrappingHTML/Input";
// import CustomComp from "./components/wrappingHTML/CustomComp";
import Text from "./components/polymorphic/Text";
// context part end ###########################

const App: React.FC = () => {
  // const names = [
  //   { first: "a", last: "aaa" },
  //   { first: "b", last: "bbb" },
  //   { first: "c", last: "ccc" },
  // ];


  return (
    <>
      {/* <div className="text-center">
        <StatusComp status="error" data="John doe" />
        <hr />
        <br />
        <ContainerComp>some like that</ContainerComp>

        <Parents>
          <ContainerComp>this is parent text</ContainerComp>
        </Parents>
      </div>

      <hr />
      <div className="text-center my-5">
        <Button
          handleClick={(event, id) => console.log("clicked", event, id)}
        />
      </div>
      <div className="text-center py-5">
        <Login />
        <hr />

        <StatusComp status="success" />
        <StatusComp status="success/" />

        <Heading>Placeholder text</Heading>
        <hr />
        <Oscar>
          <Heading>Oscar goes to unknown person like this</Heading>
        </Oscar>
        <hr />
        <Greet name="Mahabur" isLoggedIn={true} />
        <hr />

        <ClickEvent
          handleClick={(e, id) => console.log("button is clicked", e, id)}
        />
        <Input />
      </div> */}

      {/* <InputComp value="" handleChange={(event) => console.log(event)} /> */}

      {/* <Containers styles={{ border: "1px solid red", padding: "4rem" }} /> */}

      {/* <Person name={{ first: "mahabur", last: "rahman" }} />
       */}
      {/* <Persons names={names} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <User2 /> */}
      {/* <Counter /> */}
      {/* <UseReducerStrict /> */}


      {/* ################################  */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* ################################  */}
      {/* <MutableRef /> */}
      {/* <CounterClass message="The count is : " /> */}
      {/* <Login /> */}
      {/* <List items={['mahabur', 'noman', 'sagor']} onClick={(item) => console.log(`item is : ${item}`)} />

      <List items={[1, 3, 4, 5, 6]} onClick={(item) => console.log(`item is : ${item}`)} />

      
      <List items={[
        {first: 'a', last : 'aaa'},
        {first: 'b', last : 'bbb'},
        {first: 'c', last : 'ccc'},
      ]} onClick={(item) => console.log(`item is : ${item}`)} /> */}

      {/* <RandomNumber value={10} isNegative /> */}

      {/* <Toasts position='center' /> */}
      {/* <CustomBtn variant="primary" /> */}
      {/* <CustomBtn variant="primary" onClick={() => console.log('button is clicked !')}>
      Primary button
      </CustomBtn>
      <CustomInput /> */}
      {/* <CustomComp name="mahabur" /> */}
      <div>
        <Text as='h1' size="lg">Heading</Text>
        <Text as="p" size="md">Paragraph</Text>
        <Text as="label" size="sm" color="secondary">Label</Text>
      </div>
    </>
  );
};

export default App;
