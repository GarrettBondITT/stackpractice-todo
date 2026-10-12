import "./App.css";
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <>
      <h1>To Do : Stack Practice</h1>
      <div className="flex items-center gap-2 p-8">
        <Button onClick={() => console.log("add")}>
          <Plus />
          Add
        </Button>

        <Button variant="outline" onClick={() => console.log("edit")}>
          <Pencil />
          Edit
        </Button>

        <Button variant="destructive" onClick={() => console.log("delete")}>
          <Trash2 />
          Delete
        </Button>
      </div>
    </>
  );
}

export default App;
