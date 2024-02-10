import Alert from './components/ui/Alert/Alert'
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from 'lucide-react';

function App() {
  return (
    <>
      <Alert
        type={"alert-default"}
        icon={<Bell size={20} />}
        title={"Alert Header"}
      >
        <p>
          Lorem ipsum dolor sit <a href="/">amet consectetur</a> adipisicing elit. Deserunt maiores quos id excepturi dolores? Delectus sequi in quaerat assumenda illo?
        </p>
      </Alert>
      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Note"}
        message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={"alert-warning"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
        message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
    </>
  )
}

export default App
