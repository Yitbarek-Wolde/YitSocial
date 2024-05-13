import './App.css';
import { Textarea } from './components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

function App() {
  return (
    <div style={{marginLeft: "40%", marginRight: "40%", marginTop:'12%', border: "50px", borderColor:'white'}}>
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
     
      <CardContent>
        <p>Card Content</p> <Textarea />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card></div>
  );
}

export default App;
