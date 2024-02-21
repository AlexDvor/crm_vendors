import Button from './components/Button/Button';
import StatusLabel, { Status } from './components/StatusLabel/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="m-0">HOME PAGE</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <Button></Button>
    </main>
  );
}
