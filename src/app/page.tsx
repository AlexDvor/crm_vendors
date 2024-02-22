import Button from './components/Button/Button';
import AddCompanyButton from './components/Form/AddCompanyBtn/AddCompanyBtn';
import StatusLabel, { Status } from './components/StatusLabel/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="m-0">HOME PAGE</h1>

      <AddCompanyButton></AddCompanyButton>
    </main>
  );
}
